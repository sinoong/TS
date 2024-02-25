// 타입 변수 응용하기

// 사례1 : 타입 변수를 여러개 선언
function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("1", 2);

// 사례2 : 튜플로 쓰고, [0]만 중요하니까 T, 그 뒤는 볼필요 없으니까 ...unknown[]
function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]); // 0
let str = returnFirstValue([1, "hello", "mynameis"]); // "hello"

// 사례3 : <T extends { length: number }> number타입을 갖는 length로 T를 제한
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]);
let var2 = getLength("12345");
let var3 = getLength({ length: 10 });
// let var4 = getLength(10); // length 프로퍼티가 없는 경우는 막아줌
