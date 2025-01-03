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
        
          return cssString.push(`${selector} {\n ${cssVariables}\n}`);
        }
        if(colorKey === 'dark') {
          const selector = ':root .theme-dark';
          
          const cssVariables = Object.entries(colorValue).map(([mainkey, mainValue]) => 
            Object.entries(mainValue).map(([subkey, subValue]) => `--${toCssCasting(mainkey)}-${subkey}: ${subValue};`).join('\n')
        ).join('\n');
        
          return cssString.push(`${selector} {\n ${cssVariables}\n}`);
        }
      });
      // if문에서 return을 안 끊어주면 데이터가 다음으로 넘어가게 된다
      // 예를들면 $static이란 객체를 return 안해주면 다음 코드로 value 안으로 넘어간다
      return;
    }

    //타이포그래피
    const selector = ':root';
    const cssVariables = Object.entries(value).map(([mainkey, mainValue]) => 
      Object.entries(mainValue).map(([subkey, subValue]) => `--${toCssCasting(mainkey)}-${subkey}: ${subValue};`).join('\n')
      ).join('\n');
    return cssString.push(`${selector} {\n ${cssVariables}\n}`);

  });
  
  return cssString;
}

// :root 가상클래스가 css파일에서 항상 위에 와야 동작함
// 클래스 선택자가 css파일에서 위로 올라가면 :root가 동작하지 않음

// .headingxl {
//   fontsize: 3rem;
//   font-weight: 700;
//   line-height: 100%;
// }

const generateThemeCssClasses = () => {
  const cssString =[];
  Object.entries(theme.classes).forEach(([,value]) => {

    const cssClasses = Object.entries(value).map(([mainKey, mainValue]) =>
      Object.entries(mainValue).map(([subKey, subValue]) => {
        const cssName = `.${mainKey}${subKey}`;

        const property = Object.entries(subValue).map(([styleKey, styleValue]) =>
          `${toCssCasting(styleKey)}: ${styleValue};`
        ).join('\n')

        return `${cssName} {\n${property}\n}`;
      }).join('\n')
    ).join('\n');

    cssString.push(cssClasses)
  })
  return cssString
}

const generateThemeCss = () => {
  const variables = generateThemeCssVariables();
  const classes = generateThemeCssClasses();
  fs.writeFileSync('dist/themes.css', [...variables, ...classes].join('\n'));
}

generateThemeCss();