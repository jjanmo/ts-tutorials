# Pick

## 몰랐던 부분들

1. keyof와 extends를 사용해야하는줄은 알았는데 어떻게 사용해야할지 감이 안잡힘

   ```ts
   // 솔직한 생각
   type MyPick<T, K> = keyof T extends K ? [여기에 뭐라고 표현해야할까?];

   ```

   > 이건 시작부터 잘못됨 😭

   > [`Conditional Types`](https://www.typescriptlang.org/ko/docs/handbook/2/conditional-types.html) 으로 생각했지만 아니였음

2. `여기에 뭐라고 표현해야할까?` 부분에 `또다른 타입 변수`가 들어갈 수 있음을 인지하지 못함

3. [`Indexed Access Types`](https://www.typescriptlang.org/ko/docs/handbook/2/indexed-access-types.html) : 특정 속성의 타입을 찾기 위해서 특정 속성으로 인덱싱된 접근을 할 수 있다라는 사실

4. 2번과 3번을 토대로 아래처럼 사용할 수 있음을 알게됨.

   ```ts
   type A3<A, B> = { [C in A]: B[C] };
   ```

   > 예시 코드로서 맞는 코드는 아님. 새로운 타입변수 C를 사용할 수 있고, `B[C]` 이런 식으로 객체 B의 속성의 타입을 가져올 수 도 있다는 것을 표현한 것

5. extends의 의미

- 제네릭에서의 extends

  제네릭 타입을 제한하는 역할을 한다.

  ```ts
  interface Lengthwise {
    length: number;
    value: number;
  }

  function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length); // 여기서 length 속성을 사용할 수 있음
    return arg;
  }

  loggingIdentity({ length: 10, value: 3 }); // 유효한 호출

  loggingIdentity({ length: 10 }); // 유효하지 않은 호출

  loggingIdentity({ length: 10, value: 3, title: 'hello' }); // 유효한 호출
  ```

  > T는 Lengthwise 타입으로 제한된다. 원시타입이라면 T가 해당 원시타입이 아니라면 유효하지 않은 상황이 된다. 하지만 위처럼 객체 타입이라면 이를 `확장`하는 것만 유효한 타입으로 인정받는다.

- 조건부 타입(Conditional Type)에서의 extends

  우리가 코드에서보는 삼항연산자 느낌으로 해석하면 맞다.

  ```ts
  type NonNullable<T> = T extends null | undefined ? never : T;

  const value: string | null = 'Hello';
  const nonNullableValue: NonNullable<typeof value> = value; // string
  ```

  > 위의 예시처럼 원시타입으로만 이루어져 있다면 쉽게 해석할 수 있다. T가 null이나 undefined로 확장가능한지(할당가능한지)를 따져보면 된다. 하지만 함수인 경우는 그 안의 인자와 리턴타입에 따라서 복잡해진다. 우선 쉬운 부분만 정확하게 알아보고 다른건 다음번에 확인해보자.

  > `T extends U ? X : Y` : 타입 T가 타입 U로 확장이 가능한지를 따지면 된다.(왼쪽에서 오른쪽으로 해석하는 방향성을 가진다.)

## 풀이 과정 복기 어게인 👀

1. 첫번째

   ```ts
   type MyPick<T, K> = keyof T extends K ? T : never;
   ```

2. 두번째

   ```ts
   type MyPick<T, K> = { [C in keyof T]: T[C] };

   type A = MyPick<Todo, 'title'>;
   ```

   > A가 Todo와 같은 타입이 됨. `keyof T`가 아니라 `K`여야한다고 생각함

3. 세번째 : **2개의 오류 발생** (따옴표 부분에서)

   ```ts
   type MyPick<T, K> = { [C in 'K']: T['C'] };
   ```

   > `Type 'K' is not assignable to type 'string | number | symbol'.`

   > `Type 'C' cannot be used to index type 'T'`

4. 네번째

   타입 K가 'string | number | symbol' 이여야한다는 말에서 현재 내가 사용하는 타입 K는 저것이 아니기때문에 뭔가 제너릭에서 제한을 해야한다는 느낌적인 느낌을 받을 수 있음

   ```ts
   type MyPick<T, K extends keyof T> = { [C in K]: T[C] };
   ```
