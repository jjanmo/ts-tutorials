# Readonly

## 생각의 흐름

1. 일반 객체의 모든 속성에 `readonly` 속성을 붙여야한다.
2. 모든 속성을 순회하면서 readonly를 붙여야한다.
3. 순회는 어떻게 하지??
4. 아하 `mapped type` 이라는 개념이 존재하지?!

## Mapped Type

자바스크립트의 for-in문처럼 `in`을 사용하여 순회하도록 만든다. 키워드는 `in` 이다. 그렇다면 무엇을 순회할 수 있나? 주로 `유니온 타입`으로 이루어진 타입을 in을 통해서 순회할 수 있게 된다.

객체 타입을 `keyof`로 받아서 키값만을 유니온 타입으로 뽑아서 활용할 때, `mapped type`을 사용한다.

```ts
type Status = 'todo' | 'doing' | 'done';

type A = { [P in Status]: number };
```

`P in Status` 의 의미는 위에서 말했다 싶이 P에 Status의 각 값이 하나씩 들어가게 된다. 즉 todo : string, doing : string, done : string 이런 식으로 결과값이 나오게 된다.

```ts
type A = {
  todo: string;
  doing: string;
  done: string;
};
```

> 최종 결과값
