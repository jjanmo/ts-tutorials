# Class

기본적으로 자바스크립트의 ES6에서는 class를 지원한다. 이것은 자바스크립트의 prototype 기반의 객체지향 문법을 class 라는 문법적 설탕을 씌운 것이다.(사실 문법적 설탕 이상의 그 의미가 있긴하다.) 여기에 타입스크립트에서는 기존 자바스크립트에서는 사용하지 못했던 여러가지 키워드를 추가함으로서 좀 더 완벽한 객체지향을 지원할 수 있게 되었다. 아래는 타입스크립트에서만 가능한 몇가지 클래스의 특징을 나열해본다.

- 클래스 멤버변수(필드)를 사전에 선언해야한다.
- 접근제한자
  - public
  - protected
  - private
- readonly
- static
- abstract class(추상 클래스)

> 아래는 간단한 예제

```ts
class Person {
  private name: string;
  public age: number;
  readonly log: string;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
```
