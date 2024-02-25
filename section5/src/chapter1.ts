// 인터페이스의 확장 : 객체 타입이면 확장 할 수 있다.

interface Animal {
  name: string;
  color: string;
}

interface Dog extends Animal {
  // 인터페이스 Dog는 인터페이스 Animal을 확장한다
  // name: "hello" // 재정의 할 땐 원본의 타입을 따라야 한다 number 불가
  isBark: boolean;
}

const dog: Dog = {
  name: "",
  color: "",
  isBark: true,
};

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "",
  color: "",
  isBark: true,
  isScratch: true,
};
