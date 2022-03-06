// 타입 추론 예제 1
type Language = 'kr' | 'en' | 'jp' | 'ch';

interface Dropdown<T> {
  value: T;
  title: string;
}

// DetailedDropdown의 제네릭에 의해 Dropdown의 제네릭도 설정이 된다
interface DetailedDropdown<T> extends Dropdown<T> {
  description: string;
  tag: T;
}

const detailedDropdown: DetailedDropdown<Language> = {
  value: 'kr',
  title: 'language',
  description: 'korean',
  tag: 'kr',
};

// Best Common Type 이란?
// → https://www.typescriptlang.org/docs/handbook/type-inference.html#best-common-type
class Shape {
  color: string;
  constructor() {
    this.color = 'red';
  }
}

class Square extends Shape {
  sideLength: number;
  constructor() {
    super();
    this.sideLength = 10;
  }
}

class Circle extends Shape {
  radius: number;
  constructor() {
    super();
    this.radius = 7;
  }
}

const shape1 = [new Shape(), new Square(), new Circle()];
// 해당 배열의 요소 중에서 가장 적절한 타입으로 타입이 추론이 된다. 해당 요소들은 모두 supertype으로 Shape를 갖기 때문에
// Shape[]로 추론이 된다.
// → Best Common Type
const shape2 = [new Square(), new Circle()];
// 위와는 다르게 직접적으로 Shape라는 타입을 직접적으로 사용하는 요소가 없기 때문에
// 각각의 타입이 유니언 타입으로  타입 추론된다. (공통된 타입을 추론 할 수 없음)
const shape3: Shape[] = [new Square(), new Circle()];
// 명시적으로 Shape 타입을 적을 수 있다.

// 해당 함수의 리턴 타입이 Shape로 추론된다
// → new Square() 와 new Shape()의 공통된 타입이 Shape이기 때문에
function createShape1(isSquare: boolean) {
  if (isSquare) {
    return new Square();
  } else {
    return new Shape();
  }
}

// 리턴타입이 Square | Circle 로 추론된다
// 혹은 명백하게 Shape 타입으로 정의할수 도 있다.
function createShape2(isSquare: boolean) {
  if (isSquare) {
    return new Square();
  } else {
    return new Circle();
  }
}
