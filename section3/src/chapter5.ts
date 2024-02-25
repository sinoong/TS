// 타입 추론
let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "문신웅",
  profile: {
    nickname: "david",
  },
  urls: [""],
};
let { id, name, profile } = c;
let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
  return "hello";
}

let d; // 암묵적 any 타입 => 상황에 맞춰서 진화한다 , any로 명시한 것과는 달라 명시하면 전부 any타입
d = 10;
d.toFixed();

d = "hello";
d.toUpperCase();

const num = 10;
const str = "hello";

let arr = [1, "string"];
