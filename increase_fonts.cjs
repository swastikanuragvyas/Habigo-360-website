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
        const v1 = (parseFloat(p1) * 1.25).toFixed(2).replace(/\.00$/, '');
        const v2 = (parseFloat(p2) * 1.25).toFixed(2).replace(/\.00$/, '');
        const v3 = (parseFloat(p3) * 1.25).toFixed(2).replace(/\.00$/, '');
        modified = true;
        return `text-[clamp(${v1}rem,${v2}vw,${v3}rem)]`;
      });
      
      if (modified) {
        fs.writeFileSync(fullPath, newContent, 'utf8');
        console.log(`Updated fonts in ${fullPath}`);
      }
    }
  }
}

processDirectory(path.join(__dirname, 'src'));
