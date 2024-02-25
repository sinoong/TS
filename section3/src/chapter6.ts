// 타입 단언
type Person = {
  name: string;
  age: number;
};

let person = {} as Person; // 이것을 as 이 타입으로 간주해
person.name = "";
person.age = 23;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;

// 타입 단언의 규칙
// 값 as 단언 <- 단언식
// A as B
// A가 B의 슈퍼타입이거나 A <- B
// A가 B의 서브타입이어야 함 A -> B

let num1 = 10 as never;
let num2 = 10 as unknown;
let num3 = 10 as unknown as string; // 추천하는 방법은 아님

// const 단언
let num4 = 10 as const;

let cat = {
  name: "야옹이",
  color: "yellow",
} as const;
// cat.name = ''

// Non Null 단언
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "이정환",
};

const len: number = post.author!.length; // 값이 있어!, ?는 없으면 Null 이나 undefined로 판단하니까 에러
