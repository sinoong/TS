// 접근 제어자
// public : 모든 범위에서 접근 가능 => 디폴트
// private : 클래스 내부에서만 접근 가능
// proteced : 클래스 내부 또는 파생 클래스 내부에서만 접근 가능

class Employee {
  // 필드
  private name: string; // Employee 클래스 내에서만 사용 가능
  protected age: number;
  public position: string;

  // 생성자 => 매개변수에도 접근제어자를 달 수 있지만 필드에서 만들었고 자동으로 생성자에도 달아져서 중복됨
  // 매개변수에 접근제어자를 달면 위의 필드 부분을 생략 할 수 있음
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log(`${this.name} 일함`);
  }
}

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  // 생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }

  // 메서드
  func() {
    // this.name;
    this.age;
  }
}

const employee = new Employee("문신웅", 30, "developer");
// employee.name = "홍길동";
// employee.age = 31;
employee.position = "디자이너";

console.log(employee)
