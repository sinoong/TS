// 맵드 타입 => interface에서 사용 못 해, 자주 쓰여
interface User {
  id: number;
  name: string;
  age: number;
}

type ParitalUser = {
  [key in "id" | "name" | "age"]?: User[key]; // [key in key들 유니온]?: User[value의 타입으로 판단]
};

type BooleanUser = {
  // [key in "id" | "name" | "age"]: boolean; // 밑에랑 같다
  [key in keyof User]: boolean;
};

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

// 한명의 유저 정보를 불러오는 기능
function fetchUser(): User {
  // ... 기능
  return {
    id: 1,
    name: "이정환",
    age: 27,
  };
}

// 한명의 유저 정보를 수정하는 기능
function updateUser(user: ParitalUser) {
  // ... 수정하는 기능
}

updateUser({
  id: 1,
  name: "이정환",
  age: 25,
});
