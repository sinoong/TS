// 인터페이스와 클래스
// 인터페이스는 무조건 public
interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

class Character implements CharacterInterface {
  // implements(구현하다) 사용 -> Character는 CharacterInterface(설계도)를 구현한다 
  constructor(public name: string, public moveSpeed: number, private extra: string) {
    
  }

  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동!`);
  }
}
