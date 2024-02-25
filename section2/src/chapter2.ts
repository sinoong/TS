// 배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["hello", "im", "sinwoong"];

let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr1: (string | number)[] = [1, "hello"];
let multiArr2: (string | number)[] = ["hello", 1];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플 => ts만 제공
// 길이와 타입이 고정된 배열 => push, pop은 이걸 무시하고 가능
let tup1: [number, number] = [1, 2];

let tup2: [number, string, boolean] = [1, "2", true];

const users: [string, number][] = [
  ["문신웅", 1],
  ["이아무개", 2],
  ["김아무개", 3],
  ["박아무개", 4],
];
