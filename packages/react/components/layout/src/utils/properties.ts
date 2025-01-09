export const extractSparkleProps = <T extends Object>(
  props: T,
  keys: (keyof T)[],
) => {
  const result: any = {};

  keys.forEach((key) => {
    if(props[key]) {
      result[key] = props[key];
    }
  });

  return result;
}

// // properties 속성은 `Set` 객체를 반환 -> 그래서 Array.from을 사용하여 배열로 반환시킨다
// console.log(sprinkles.properties); // Set { 'backgroundColor', 'fontSize' }
// Array.from(sprinkles.properties) ['backgroundColor', 'fontSize']