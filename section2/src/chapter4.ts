// 타입 별칭 (공통적으로 타입이 같을 경우 미리 선언)
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "문신웅",
  nickname: "David",
  birth: "1995.09.05",
  bio: "안녕하세요",
  location: "광주",
};

let user2: User = {
  id: 2,
  name: "홍길동",
  nickname: "David",
  birth: "1995.09.05",
  bio: "안녕하세요",
  location: "광주",
};

// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number; // 규칙을 위반하지만 않으면 모두 허용
  Korea: number; // Korea를 반드시 가지도록 선언
  // Korea: string; // 오류! value는 위의 타입과 일치 시켜주는게 좋다
};
let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
};

let countryNumberCodes2: CountryNumberCodes = {
  Korea: 410, // 얘는 꼭 있어야 된다고 위에서 선언 했으니까 추가
  // Korea: "ko"
};
