// 클래스
let studentA = {
  name: "문신웅",
  grade: "A+",
  age: 30,
  study() {
    console.log("열심히 공부함");
  },
  introduce() {
    console.log("안녕하세요!");
  },
};

class Student {
  // 클래스는 쉼표를 찍지 않아
  // 필드
  name;
  grade;
  age;

  // 생성자 => 실제로 객체를 만드는 메서드
  constructor(name, grade, age) {
    this.name = name; // 지금 생성하고 있는 클래스 필드의 name(this.name) = 매개변수로 들어온 (name)
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  study() {
    console.log("열심히 공부함");
  }

  introduce() {
    console.log(`안녕하세요! ${this.name} 입니다!`);
  }
}

class StudentDeveloper extends Student {
  // 필드
  favoriteSkill;

  // 생성자
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age); // 부모 클래스의 생성자가 호출 됨
    this.favoriteSkill = favoriteSkill;
  }

  // 메서드
  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 함`);
  }
}

const studentDeveloper = new StudentDeveloper("문신웅", "B+", 30, "TS");
console.log(studentDeveloper);
studentDeveloper.programming();

// 클래스를 이용해서 만든 객체 -> 인스턴스
// 스튜던트 인스턴스
// let studentB = new Student("문신웅", "A+", 30); // new class() -> 생성자가 호출
// console.log(studentB);
// studentB.study();
// studentB.introduce();
