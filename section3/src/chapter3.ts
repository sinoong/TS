// 기본 타입간의 호환성
let num1: number = 10;
let num2: 10 = 10;

num1 = num2;


// 객체 타입간의 호환성
// 어떤 객체 타입을 다른 객체타입으로 취급해도 괜찮은가?

// 조건이 더 적은 부분이 슈퍼 타입이 된다 
type Animal = {
  name: string;
  color: string;
}

// 조건이 하나 더 많으니 서브 타입
type Dog = {
  name: string;
  color: string;
  breed: string;
}

let animal : Animal = {
  name: "기린",
  color: "yellow",
}

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도"
}

animal = dog;
// dog = animal;

// 연습2
type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
}

let book : Book;
let programmingBook : ProgrammingBook = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "reactjs",
}

book = programmingBook;
// programmingBook = book;


// 초과 프로퍼티 검사 
type Book = {
  name: string;
  price: number;
}

let book2 : Book = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  // skill: "reactjs", => 이 부분은 Book에 대한 초과 프로퍼티
}

let book3: Book = programmingBook;

function func(book: Book) {}
func({
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  // skill: "reactjs",
})
func(programmingBook)