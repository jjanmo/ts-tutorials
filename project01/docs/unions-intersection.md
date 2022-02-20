# Unions and Intersection Type

> 유니언 타입과 교차 타입

## 유니언 타입

### 정의

`|`(or 연산자)를 사용해서 여러 개의 타입을 사용하고 싶을때 사용할 수 있는 타입으로서 설정한 여러 개의 타입 중에서 한가지에만 해당하면 되는 타입을 말한다.

```ts
function logStatus(data: string | number): void {
  console.log(data);
}

logStatus('success');
logStatus(404);
```

### 특징

```ts
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function askSomeone(someone: Developer | Person) {
  console.log(someone.name);
  // → name 만이 자동 완성됨

  // someone.skill : error

  // someone.age : error
}
```

유니언 타입에 으로 인자를 설정하게 되면 함수 내부에서는 두 타입의 공통된 속성만을 사용할 수 있게 된다. 왜냐하면 타입을 추론하는 시점에 Devoloper와 Person 중 어느 것이 들어오는지 확실하지 않기 때문이다. 다시 말하면, 타입스크립트는 무엇이 들어와도 명확해지는 보장된 속성만을 인지해서 자동완성으로 보여주는 것이다.

```ts
function isDeveloper(someone: Developer | Person): someone is Developer {
  return (someone as Developer).skill !== undefined;
}

function askSomeone(someone: Developer | Person) {
  if (isDeveloper(someone)) {
    console.log(someone.skill);
  } else {
    console.log(someone.age);
  }
}
```

위에서 나타난 error부분을 해결하기 위해서 `타입가드`와 같은 방식을 활용할 수 있다.

<details>
<summary>타입가드</summary>

- 정의

  타입 가드란 타입의 범위를 좁힘으로서 타입을 보호하는 것이라고 이해할 수 있겠다.

- 종류

  일반적으로 `typeof`, `in`, `instance` 키워드를 이용할 수 있다. 하지만 위에서 처럼 커스텀 타입을 사용하게 되면 `type predicates(타입 술어)`라는 문법(?)을 사용해서 정의를 해줘야한다. `someone is Developer` 라는 타입 술어를 사용하는데, 이것은 불리언값을 반환한다.

- 참고

  [유니온 타입과 타입 가드](https://jeonghwan-kim.github.io/dev/2021/03/18/type-guard.html)

  [Understanding Typescript's Type Predicates](https://dev.to/daveturissini/aha-understanding-typescript-s-type-predicates-40ha)

</details>

## 인터섹션 타입(교차 타입)

### 정의

`&`(and 연산자)를 활용하여 여러 타입을 하나로 결합하여 만들어진 타입을 말한다.

```ts
type T1 = string | number | boolean; // string | number | boolean
type T2 = string & number & boolean; // never
```

T1의 경우 유니언 타입이기 때문에 코드대로 3개의 타입 중에 한가지면 가능한 타입이 만들어진다. T2의 경우는 string 타입과 number 타입과 boolean 타입 모두에 속하는 타입이 만들어진다. 하지만 그런 타입은 존재하지 않기때문에 never 타입이 나오게 된다.

```ts
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function askSomeone(someone: Developer & Person) {
  console.log(someone.name);
  console.log(someone.skill);
  console.log(someone.age);
}
```

유니언 타입과는 다르게 인터섹션 타입을 사용하게 되면 이를 인자로 사용하는 함수에서는 두 개의 타입 중에서 어떠한 타입에 속하는 속성을 사용해도 에러를 발생시키지 않는다. 왜냐하면 `someone: Developer & Person`는 이미 두 타입을 합친 새로운 타입으로서 추론되기 때문이다.

이러한 이유로 인해서 실무에서는 인터섹션 타입보다는 유니온 타입을 좀 더 많이 사용하게 된다.

```ts
askSome({ name: 'jjanmo', skill: 'js' });
```

위와 같은 방식으로 함수에 인자를 전달하게 된다. (리터럴이 아니더라고 특정 객체로 정의된 변수여도 관계없다.) 그런데 인터섹션 타입인 경우 저 상황에서 age 속성이 없기 때문에 에러가 발생한다. 타입에 속성을 분류하는 이유는 어떤 이유가 있기 때문인데 이것을 어떻게 합칠지에 대해선 항상 한 번더 생각을 할 필요가 있어보인다.
