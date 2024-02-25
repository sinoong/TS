// 열거형(Enum) 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  ADMIN, // 숫자를 지정해주지 않아도 자동으로 0 부터 ++ 된다, 10번부터 하고싶다면 10부터 쓰면 된다 
  USER = 10, // 중간에 원하는 숫자 지정 가능 
  GUEST,
}

enum Language {
  korean = 'ko',
  english = 'en',
}

const user1 = {
  name: "문신웅",
  role: Role.ADMIN, // 0 <- 관리자
  language: Language.korean,
};

const user2 = {
  name: "홍길동",
  role: Role.USER, // 1 <- 일반 유저
};
const user3 = {
  name: "아무개",
  role: Role.GUEST, // 2 <- 게스트
};

console.log(user1, user2, user3)
