const fs = require('fs');
const path = require('path');

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;
      
      const newContent = content.replace(/text-\[clamp\(([\d.]+)rem,([\d.]+)vw,([\d.]+)rem\)\]/g, (match, p1, p2, p3) => {
        const v1 = (parseFloat(p1) / 1.25).toFixed(2).replace(/\.00$/, '');
        const v2 = (parseFloat(p2) / 1.25).toFixed(2).replace(/\.00$/, '');
        const v3 = (parseFloat(p3) / 1.25).toFixed(2).replace(/\.00$/, '');
        modified = true;
        // Clean up trailing zeros safely for integer-like values
        const cleanV1 = v1.endsWith('0') && v1.includes('.') ? parseFloat(v1).toString() : v1;
        const cleanV2 = v2.endsWith('0') && v2.includes('.') ? parseFloat(v2).toString() : v2;
        const cleanV3 = v3.endsWith('0') && v3.includes('.') ? parseFloat(v3).toString() : v3;
        
        return `text-[clamp(${cleanV1}rem,${cleanV2}vw,${cleanV3}rem)]`;
      });
      
      if (modified) {
        fs.writeFileSync(fullPath, newContent, 'utf8');
        console.log(`Reverted fonts in ${fullPath}`);
      }
    }
  }
}

processDirectory(path.join(__dirname, 'src'));
