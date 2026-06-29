const Jimp = require('jimp');

async function processImage(imagePath) {
    const image = await Jimp.read(imagePath);
    
    // We want to make pixels that are very close to black transparent.
    // However, the background might not be perfectly black. Let's find
    // the background color by looking at the top-left corner.
    const bgColor = image.getPixelColor(0, 0);
    const { r: bgR, g: bgG, b: bgB } = Jimp.intToRGBA(bgColor);

    console.log(`Processing ${imagePath}... Background color: rgb(${bgR}, ${bgG}, ${bgB})`);

    // A simple threshold to consider a pixel as 'background'
    const threshold = 5; 

    // We will do a flood fill starting from the corners to avoid making
    // dark hair or clothes transparent if they are surrounded by non-black.
    // Jimp doesn't have a built-in flood-fill that sets alpha.
    // So we'll write a simple BFS flood fill.
    
    const width = image.bitmap.width;
    const height = image.bitmap.height;
    
    const visited = new Set();
    const queue = [];
    
    // Add all border pixels to queue
    for (let x = 0; x < width; x++) {
        queue.push({x, y: 0});
        queue.push({x, y: height - 1});
    }
    for (let y = 0; y < height; y++) {
        queue.push({x: 0, y});
        queue.push({x: width - 1, y});
    }

    const getIndex = (x, y) => y * width + x;

    while (queue.length > 0) {
        const { x, y } = queue.shift();
        const index = getIndex(x, y);
        
        if (visited.has(index)) continue;
        visited.add(index);
        
        const color = image.getPixelColor(x, y);
        const rgba = Jimp.intToRGBA(color);
        
        // If it's close to black
        if (rgba.r <= threshold && rgba.g <= threshold && rgba.b <= threshold) {
            // Set to transparent
            image.setPixelColor(Jimp.rgbaToInt(0, 0, 0, 0), x, y);
            
            // Add neighbors
            if (x > 0) queue.push({x: x - 1, y});
            if (x < width - 1) queue.push({x: x + 1, y});
            if (y > 0) queue.push({x, y: y - 1});
            if (y < height - 1) queue.push({x, y: y + 1});
        }
    }
    
    // Save it as a PNG
    const outPath = imagePath.replace('.jpg', '.png');
    await image.writeAsync(outPath);
    console.log(`Saved transparent image to ${outPath}`);
}

async function main() {
    await processImage('src/assets/founder-1.jpg');
    await processImage('src/assets/founder-2.jpg');
}

main().catch(console.error);
