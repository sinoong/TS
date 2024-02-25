// object 객체
// let user: object = {} 이렇게 쓰면 너가 객체인거 말곤 몰?루 뜻
// let user: {id: number, name: string} = {} 이렇게 객체에도 명시 해줘야함
let user: {
  id?: number; // ?를 붙이면 있어도 되고 없어도 된다 => 선택적 property === optional property
  name: string;
} = {
  id: 1,
  name: "문신웅",
};

let config: {
  readonly apiKey: string; // readonly를 붙여서 읽기 전용으로 고친다. 수정 불가
} = {
  apiKey: "MY API KEY",
};

// config.apiKey = 'hacked'
