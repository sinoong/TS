// Unknown 타입

function unknownExam() {
  // 업캐스팅
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  // 다운캐스팅 => 불가
  let unknownVar: unknown;
  // let num: number = unknownVar
  // let str: string = unknownVar
  // let bool: Boolean = unknownVar
}

// Never 타입 ==> 모든 서브 (가장 최 하단) => 공집합

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // let never1: never = 10;
  // let never2: never = "string";
  // let never3: never = true;
}

// Void 타입

function voidExam() {
  function voidFunc(): void {
    console.log("hi");
    return undefined;
  }

  let voidVar: void = undefined;
}

// any 타입 => 치트키 (never 제외)

function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar // 다운 캐스팅인데도 된다 
  undefinedVar = anyVar // 다운 캐스팅인데도 된다 
  // neverVar = anyVar; // never은 안된다
}