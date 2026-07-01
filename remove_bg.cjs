const Jimp = require('jimp');

async function processImage(imagePath, outPath) {
    const image = await Jimp.read(imagePath);
    const width = image.bitmap.width;
    const height = image.bitmap.height;
    const data = image.bitmap.data; // RGBA buffer

    console.log(`Processing ${imagePath} (${width}x${height})...`);

    // Step 1: BFS to find the absolute background (pure black)
    const isBg = new Uint8Array(width * height);
    const queue = [];
    const visited = new Uint8Array(width * height);

    const getIdx = (x, y) => (y * width + x) * 4;

    // Add borders to queue
    for (let x = 0; x < width; x++) {
        queue.push({x, y: 0});
        queue.push({x, y: height - 1});
        visited[0 * width + x] = 1;
        visited[(height - 1) * width + x] = 1;
    }
    for (let y = 0; y < height; y++) {
        queue.push({x: 0, y});
        queue.push({x: width - 1, y});
        visited[y * width + 0] = 1;
        visited[y * width + (width - 1)] = 1;
    }

    let head = 0;
    while (head < queue.length) {
        const { x, y } = queue[head++];
        const idx = getIdx(x, y);
        const r = data[idx];
        const g = data[idx + 1];
        const b = data[idx + 2];
        const val = Math.max(r, g, b);

        if (val < 10) {
            isBg[y * width + x] = 1;
            const neighbors = [
                {x: x - 1, y},
                {x: x + 1, y},
                {x, y: y - 1},
                {x, y: y + 1}
            ];
            for (const n of neighbors) {
                if (n.x >= 0 && n.x < width && n.y >= 0 && n.y < height) {
                    const nidx = n.y * width + n.x;
                    if (!visited[nidx]) {
                        visited[nidx] = 1;
                        queue.push(n);
                    }
                }
            }
        }
    }

    // Step 2: Initialize alpha mask
    // We identify immediate boundary pixels (max RGB < 35 adjacent to the background)
    // and make them semi-transparent.
    const alphaMask = new Uint8Array(width * height);
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const idx = y * width + x;
            if (isBg[idx]) {
                alphaMask[idx] = 0;
            } else {
                const dataIdx = idx * 4;
                const r = data[dataIdx];
                const g = data[dataIdx + 1];
                const b = data[dataIdx + 2];
                const val = Math.max(r, g, b);

                if (val < 35) {
                    // Check immediate 8-neighbors for background
                    let nearBg = false;
                    for (let dy = -1; dy <= 1; dy++) {
                        for (let dx = -1; dx <= 1; dx++) {
                            const nx = x + dx;
                            const ny = y + dy;
                            if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
                                if (isBg[ny * width + nx]) {
                                    nearBg = true;
                                    break;
                                }
                            }
                        }
                        if (nearBg) break;
                    }

                    if (nearBg) {
                        let alpha = Math.round(((val - 10) / (35 - 10)) * 255);
                        alpha = Math.max(0, Math.min(255, alpha));
                        alphaMask[idx] = alpha;
                        continue;
                    }
                }
                alphaMask[idx] = 255;
            }
        }
    }

    // Step 3: Color Bleeding (Dilation of colors)
    // We want to bleed the foreground colors (alpha === 255) into all transparent/semi-transparent pixels
    const hasColor = new Uint8Array(width * height);
    for (let i = 0; i < width * height; i++) {
        hasColor[i] = (alphaMask[i] === 255) ? 1 : 0;
    }

    const nextData = Buffer.alloc(data.length);
    const nextHasColor = new Uint8Array(width * height);

    for (let iter = 0; iter < 12; iter++) {
        nextData.set(data);
        nextHasColor.set(hasColor);

        let changed = false;
        for (let y = 1; y < height - 1; y++) {
            for (let x = 1; x < width - 1; x++) {
                const idx = y * width + x;
                if (!hasColor[idx]) {
                    let sumR = 0, sumG = 0, sumB = 0, count = 0;
                    const neighbors = [
                        idx - 1, idx + 1, idx - width, idx + width
                    ];
                    for (const n of neighbors) {
                        if (hasColor[n]) {
                            const nDataIdx = n * 4;
                            sumR += data[nDataIdx];
                            sumG += data[nDataIdx + 1];
                            sumB += data[nDataIdx + 2];
                            count++;
                        }
                    }
                    if (count > 0) {
                        const dataIdx = idx * 4;
                        nextData[dataIdx] = Math.round(sumR / count);
                        nextData[dataIdx + 1] = Math.round(sumG / count);
                        nextData[dataIdx + 2] = Math.round(sumB / count);
                        nextHasColor[idx] = 1;
                        changed = true;
                    }
                }
            }
        }
        data.set(nextData);
        hasColor.set(nextHasColor);
        if (!changed) break;
    }

    // Step 4: Blur the alpha channel using a box-blur to make it look smooth
    const blurredAlpha = new Uint8Array(width * height);
    const radius = 2; // radius of blur
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            let sum = 0;
            let count = 0;
            for (let dy = -radius; dy <= radius; dy++) {
                for (let dx = -radius; dx <= radius; dx++) {
                    const nx = x + dx;
                    const ny = y + dy;
                    if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
                        sum += alphaMask[ny * width + nx];
                        count++;
                    }
                }
            }
            blurredAlpha[y * width + x] = Math.round(sum / count);
        }
    }

    // Step 5: Write the blurred alpha back to the image data
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const idx = getIdx(x, y);
            data[idx + 3] = blurredAlpha[y * width + x];
        }
    }

    // Save the image
    await image.writeAsync(outPath);
    console.log(`Saved clean feathered cutout to ${outPath}`);
}

async function main() {
    await processImage('src/assets/founder-1.jpg', 'src/assets/founder-1.png');
    await processImage('src/assets/founder-2.jpg', 'src/assets/founder-2.png');
}

main().catch(console.error);
