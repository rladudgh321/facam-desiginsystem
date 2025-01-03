import * as fs from 'fs';
import * as themes from '../dist/index.js';

// :root {
//   --black-alpha-900: '#FEWEF34'
// }

const toCssCasting = (str) => str.replace(/([A-Z])/g, "-$1").toLowerCase();

const generateThemeCssVariables = () => {
  const cssArray = [];
  
  Object.entries(themes.vars).forEach(([varsKey, varsValue]) => {
    if(varsKey === 'colors') {
      Object.entries(varsValue.$static).forEach(([staticKey, staticValue]) => {
        const selector = ':root';
        const color = Object.entries(staticValue).map(([colorKey, colorValue]) => 
          Object.entries(colorValue).map(([subKey, subValue]) => {
              return `--${colorKey}-${subKey}: ${subValue};`
            }
          ).join('\n')
        ).join('\n');
        cssArray.push(selector, '{', color, '\n}');
      });
    }
  })
  console.log(cssArray);
  return cssArray;
}

const generateThemeCss = () => {
  const variables = generateThemeCssVariables();
  fs.writeFileSync('dist/themes.css', variables.join('\n'))
}

generateThemeCss();