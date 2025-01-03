import * as theme from '../dist/index.js';
import * as fs from 'fs';

// :root {
//   --gray-100: #f7fafc;
// }

const toCssCasting = (str) => str.replace(/([a-z])(\d)/, "$1-$2").replace(/([A-Z])/g, "-$1").toLowerCase();

const generateThemeCssVariables = () => {
  const cssString = [];

  Object.entries(theme.vars).forEach(([key, value]) => {
    if(key === "colors") {
      Object.entries(value.$static).forEach(([colorKey, colorValue]) => {
        if(colorKey === 'light') {
          const selector = ':root';
          
          const cssVariables = Object.entries(colorValue).map(([mainkey, mainValue]) => 
            Object.entries(mainValue).map(([subkey, subValue]) => `--${toCssCasting(mainkey)}-${subkey}: ${subValue};`).join('\n')
        ).join('\n');
        
          cssString.push(`${selector} {\n ${cssVariables}\n}`);
        }
      });
    }
  });
  
  return cssString;
}

const generateThemeCss = () => {
  const variables = generateThemeCssVariables();
  fs.writeFileSync('dist/thems.css', [...variables].join('\n'));
}

generateThemeCss();