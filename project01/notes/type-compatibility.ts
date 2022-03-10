// 타입 호환
// → 타입스크립트에서는 타입 호환이 타입의 구조적 관점에서 접근한다. structural typing(duck typing)이라고 한다.
// → 인터페이스 클래스 간의 비교여도 관계없다. 구조만으로 비교한다.

// ✅ 클래스 | 인터페이스 관점

interface Hero {
  name: string;
  age: number;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

type S1 = Hero extends Person ? true : false; // true
type S2 = Person extends Hero ? true : false; // false

let hero: Hero = { name: 'Iron', age: 100, skill: 'super suit' };
let person: Person = { name: 'jjanmo', age: 20 };

// hero = person;  // error
// 할당 불가!! 구조적으로 작은 타입은 큰 타입에 할당 못함
// 구조적으로 작은 Person 타입은 구조적으로 큰 Hero 타입에 할당 할 수 없음
// → Hero 타입에서는 반드시 skill 속성이 필요하지만, 할당하려는 Person 타입에는 skill 속성이 존재하지 않기 때문에 할당할 수 없다.
//   만약에 skill 속성이 optional이면 에러없이 할당 가능해진다.

// → 🤯 [주의] 구조적으로 작은 타입이라는 것과 다이어그램상 큰 타입(상위 타입)이라는 의미는 다른 것
person = hero;

// ✅ 함수 | 제네릭 관점
// 함수 타입의 호환성은 각각의 인자 타입, 리턴 타입의 할당여부를 종합해서 결정된다.
// https://ahnheejong.gitbook.io/ts-for-jsdev/05-type-compatibility/functions

let add = function (a: number): number {
  return 7;
};
let sum = function (a: number) {};

// add = sum;  // error
/*
리턴 타입이 있는 함수에 리턴  타입이 없는(void) 함수을 할당하려고 해서 에러
리턴 타입이 없는 것이 리턴 타입이 있는 것보다 다이어그램상 상위 집합(number 타입이 있는 것이 좀 더 구체적이기 때문에 SubType이라고 생각할 수 있다.)
*/
sum = add;

// 함수 인자(파라미터)는 일반적인 Subtype관계가 반대로 적용된다.
// 참고 링크 : https://iamssen.medium.com/typescript-%EC%97%90%EC%84%9C%EC%9D%98-%EA%B3%B5%EB%B3%80%EC%84%B1%EA%B3%BC-%EB%B0%98%EA%B3%B5%EB%B3%80%EC%84%B1-strictfunctiontypes-a82400e67f2

let logA = function (a: number) {};
let logAB = function (a: number, b: string) {};

// logA = logAB; // error
/*
함수 인자에 대한 호환성을 판단하는 방법은 해당인자를 함수 바디에서 접근하려고 할 때(접근하려고 할 때), 이것이 가능한지 여부를 판단하면 된다.
logAB를 할당했다고 하면, logA에서 인자 b에 접근하려고 하면 참조할 수 없는 값(인자로 들어오지 않았기때문에)이기 때문에 에러가 난다.
→ 
*/
logAB = logA;

interface Animal {
  animalProp: string;
}

interface Dog extends Animal {
  dogProp: number;
}

let f = (animal: Animal) => console.log(animal.animalProp);
let g = (dog: Dog) => console.log(dog.dogProp);

// f = g; // error
/*
f 함수에서 dogProp에 접근하려고하면 에러가 난다(f 함수에서는 animal 타입밖에 들어가지 못하기 때문)
*/
g = f;

//https://ahnheejong.gitbook.io/ts-for-jsdev/05-type-compatibility/generics

export {};
