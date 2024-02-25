// 대수 타입 => 여러개의 타입을 합성해서 새롭게 만들어낸 타입
// 합집합 타입과 교집합 타입이 존재합니다

// 1. 합집합 - Union 타입
let a: string | number | boolean;
a = 1;
a = "hello";
a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];



type Union1 = Dog | Person; // Dog 이거나 Person 이거나 둘 다 

let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

// 교집합 : Dog와 Person을 모두 가지고 있음 
let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

// 여집합 : name만 있는 건 없어 
// let union4: Union1 = {
//   name: ""
// };

// 2. 교집합 타입 - Intersection 타입
let variable: number & string; 

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Intersection = Dog & Person; // Dog Person 둘 다 인 것만

let intersection1: Intersection = {
  name: "",
  color: "",
  language: "",
}