#패캠 프로젝트 디자인시스템

$ npm i file://../../packages/themes

이렇게 해서 다른 프로젝트의 루트를 install 받아올 수 있다

타이포그래피는 여러가지 토큰, 즉 variables의 조합으로 heading, line-height, font-weight로 이루어져 클래스로 만들어야 하고

색깔은 라이트모드와 다크모드를 대응하기 위해 각각 분리해서 만들어주는 경우가 있었음

spacing radius shadow는 클래스와 다크모드 라이트모드 대응할필요 없음
이 세개는 Div 박스를 만드는 속성

객체에서 숫자가 키가 될수 있다

export const spacing = {
  0: "0",
  1: "0.25rem"
}

UI라이브러리
1. 피그마 variant
2. chakraUI props의 user의 action

UI라이브러리 폴더를 만들고
각각의 컴포넌트 패키지를 관리할 경우
버그가 발견되었을 때 일괄 컴포넌트를 롤백하는 것이 아니라
해당 버그난 컴포넌트 패키지를 롤업함으로써 다른 패키지의 안정성을 보장한다
하지만, 각각의 컴포넌트 패키지에 버전을 일괄 업데이트 할 경우
서비스를 사용하는 측에서 각각의 컴포넌트를 매번 대응해줘야 하는 번거로움이 있다. 디펜던시 봇을 통해 일괄 업데이트가 가능하다

회사마다 라이브러리용 모노레포
        서비스용 모노레포를 따로따로 구성하는 경우가 있다고 한다
      현재 프로젝트는 서비스와 라이브러리 한곳에서 관리한다

패지키지베이스
nx의 빌드스크립트 CLI
캐싱에대한 이점
버전 달라지고 모듈에대한 단점은 yarn berry pnp으로 보완

워크스페이스 설정은
최상단 package.json에서
  "workspaces": [
    "packages/**/*",
    "services/**/*"
  ],

라고 명시하면 된다
서비스에서 라이브러리를 다운로드 할 때도
yarn add "라이브러리의 package.json의 이름"
yarn add @fastcampus/themes   를 하면 된다


  "tasksRunnerOptions": {
    "default": {
      "runner": "@nx/tasks-runners/default",
      "options": {
        "cacheableOperations": ["build"]
      }
    }
  },
  nx의 로컬환경에서 빌드를 하겠다는 의미이다

-------
  전역에서 package.json에서 nx build <서비스명>
  
  package.json에서 main을 반드시 써줘야 라이브러리를 사용하는 쪽에서 읽는다
  @fastcampus/themes에서 "main": "dist/index.js"를 안해서
  @fastcampus/react-components-layout에서 vars에 접근을 못했다


  -*---------
  모노레포 최상위 폴더에서 yarn workspace
  $ yarn workspace @fastcampus/storybook dlx storybook@7 init --type react
  
  storybook 최신버전은 8버전이나 yarn pnp 관련해서 찾을 수 없는 현상이 있어서 version을 낮춰서 7버전 사용

  -----------
  StyleSprinkles(props)를 할경우 MarginAndPaddingProperties, BorderStyleProperties, BoxShadowStyleProps것 만 들어가야하는데
  AsElementProps에 관한 것도 들어가기 때문에 오류가 발생된다
  그래서 extractSparkleProps를 사용하여 걸러준다
      className: clsx([StyleSprinkles(extractSparkleProps(props, Array.from(StyleSprinkles.properties))), props.className]),
   props 전달하는 함수 -> 문자열 반환
   const cssString = StyleSprinkles({ backgroundColor: 'blue', fontSize: '16px' });
   console.log(cssString); // "backgroundColor: blue; fontSize: 16px;"
   StyleSprinkles(객체)를 clsx에 반환해야 StyleSprinkles로 정의한 css들이 적용된다
   그래서 Array.from(StyleSprinkles.properties) 이런거로는 안된다

   properties 속성은 `Set` 객체를 반환 -> 그래서 Array.from을 사용하여 배열로 반환시킨다
   console.log(sprinkles.properties); // Set { 'backgroundColor', 'fontSize' }
   Array.from(sprinkles.properties) ['backgroundColor', 'fontSize']


    console.log(Array.from(StyleSprinkles.properties))
    (16) ['margin', 'padding', 'marginX', 'marginY', 'paddingX', 'paddingY', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'borderRadius', 'boxShadow']
    
    console.log(StyleSprinkles(extractSparkleProps(props, Array.from(StyleSprinkles.properties))))
    ar9t0u3j ar9t0u4d ar9t0u57 ar9t0u61 ar9t0u6s ar9t0u73


    ------------
      render: (args) => (
    <_Flex {...args}>
      <div>test</div>
      <div>입니다</div>
    </_Flex>
    }

    렌더함수를 돌릴수도 있다

    ----------
    decorators: [(Story) => <Box padding={3} style={{width:'300px', height:'300px'}} ><Story /></Box>],

    데코레이터로 할수도 있다

    ------------
    render를 사용할때는 해당 컴포넌트를 자체를 사용할 때이고
    <Flex></Flex>    
    
    decorator를 사용할떄는 부모 컴포넌트를 사용 할때이다