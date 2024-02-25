// 인터페이스 : 상호간에 약속된 규칙

interface Person {
  readonly name: string;
  age?: number;
  // sayHi: () => void; -> 중복 된 걸로 판단
  sayHi(): void;
  sayHi(a: number, b: number): void;
}

const person: Person = {
  name: "문신웅",
  sayHi: function () {
    console.log("Hi");
  },
};

person.sayHi();
person.sayHi(1, 2);
