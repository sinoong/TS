// keyof 연산자 : keyof 타입 => key들을 유니온 타입으로 뽑아옴 => 타입에만 사용 가능

// interface Person {
//   name: string;
//   age: number;
// }

type Person = typeof person;

function getPropertyKey(person: Person, key: keyof typeof person) {
  return person[key];
}

const person = {
  name: "이정환",
  age: 27,
};

getPropertyKey(person, "name"); // 이정환
