# Generic

프로그래밍을 할 때, 가장 염두에 두는 것은 재사용에 대한 부분이다. `재사용성이 있다` 라 함은 프로그램이 오랜 기간동안 유연하고 확장가능한 상태로 만들어 주는 밑바탕이 될 수 있다. 이와 같은 관점에서 제네릭은 타입의 재사용성과 관련있다. 함수나 클래스를 선언하는 시점에 특정 타입을 정의하는 것이 아니라 타입변수를 사용하여 타입을 좀 더 유연하게 구현함으로서 타입의 재사용성을 제공하게 된다. 이것 가장 기본적인 제네릭에 대한 개념(?)이다.

## 제네릭을 사용해야하는 이유

> 재사용성의 측면

### STEP1

```ts
function getNumber(value: number): number {
  return value;
}

function getString(value: string): string {
  return value;
}
```

숫자와 문자열을 각각 입력받아서 리턴하는 함수가 있다. 이 둘은 큰 그림에서 기능적으로 같은 역할을 한다. `값을 받아서 값을 리턴한다` 라는 관점에서 같다. 하지만 타입이 다르기 때문에 각각은 다른 함수로 사용된다.

### STEP2

```ts
function getValue(value: number | string): number | string {
  return value;
}

const value = getValue('jjanmo');

value.split(''); // error 🤯

/*
    Property 'split' does not exist on type 'string | number'.
    Property 'split' does not exist on type 'number'
*/
```

위 두 함수를 유니온 타입을 이용해서 추상화 시킬 수 있다. 하지만 몇가지 문제점이 생긴다. 첫번째는 위와 같은 상황에서 우리는 문자열을 넣은 함수의 리턴값은 당연히 문자열이라고 판단하여 문자열 관련 메소드를 사용할 수 있다고 인식한다. 하지만 타입스크립트에겐 `value`의 타입은 `number | string` 이다. 즉 number 타입일 수도 있다고 판단하여 위와 같은 에러 메세지를 뿜뿜한다.

```ts
const value = getValue('jjanmo') as string;
```

이러한 상황에선 `as 타입` 과 같은 `type assertion`을 통해서 해결할 수 있다.(바로 위 코드)

두번째 문제는 만약에 함수에서 입력 받고 반환하는 타입이 더 많아진다면 어떻게 써야하는가에 대한 것이다. 위와 같은 방식으로 코드를 진행한다면, 다양한 타입의 추가와 함께 코드의 길이 역시 길어질 것이다. 굉장히 불편해보이는 것은 기분 탓이 아니다.

세번째 문제는 첫번째 문제와 연결되어있다. 컴파일 단계에서 타입 추론이 하나로 되지 않기 때문에 타입스크립트와 vscode와의 장점인 자동완성 기능의 효과가 떨어질 수 밖에 없다.

### STEP3

```ts
function getValue<T>(value: T): T {
  return value;
}

const text = getValue<string>('jjanmo');
text.split('');
```

이제 제네릭이 나올 차례이다. 위에서 경험했던 문제점을 모두 없앨 수 있는 방법이 바로 제네릭을 이용하는 방법이다. 함수에 타입변수로서 타입을 선언하고 이 함수가 호출될 때(사용될 때) 해당 타입을 결정하는 것이 제네릭을 사용하는 방법이다.

함수에 T라고 선언하고 함수가 호출될 때, 타입 변수 T자리에 string이라고 적는다. 그러면 이제 T라고 선언된 모든 부분이 string 타입으로 추론되어 사용되어진다.

## 다양한 예시
