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
      
      // Replace text-[10px] with text-xs (which is 12px)
      if (content.includes('text-[10px]')) {
        const newContent = content.replace(/text-\[10px\]/g, 'text-xs');
        fs.writeFileSync(fullPath, newContent, 'utf8');
        console.log(`Updated text-[10px] in ${fullPath}`);
      }
    }
  }
}

processDirectory(path.join(__dirname, 'src'));
