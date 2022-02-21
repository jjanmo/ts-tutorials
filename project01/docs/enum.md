# Enum

> 특정 값들의 집합을 의미하는 자료형

## 숫자형 이넘

```ts
enum Coins {
  Bitcoin, // 0
  Etherium, // 1
  Tether, // 2
  Cardano, // 3
  Solana, // 4
}

console.log(Coins.Bitcoin); // 0
console.log(Coins[4]); // Solana

const bitcoin = Coins.Bitcoin;
console.log(bitcoin);

// Coins.Bitcoin = 10; // error
```

- 이넘은 기본적으로 맨 위에서부터 숫자 0에서 부터 순차적으로 할당된다.

- 양방향 바인딩이 되기 때문에 `Coins[4]`와 같이 사용하여 해당 값을 불러올 수 있다.

- 이넘 값을 다른 변수에 할당할 수 있으며 그 값을 사용할 수 있다.

- 이넘은 readonly이기 때문에 선언되면 변경할 수 없다. 단, 바인딩 되는 숫자를 변경하고 싶다면 선언시 변경이 가능하다. 여기서도 조건이 존재하는데, 변경하고 싶은 숫자를 하나 지정하면 그 밑으로는 그 숫자를 기준으로 순차적으로 바인딩 된다.(아래 예시 코드 확인)

```ts
enum Coins {
  Bitcoin,
  Etherium,
  Tether = 10,
  Cardano,
  Solana,
}

console.log(Coins.Bitcoin); // 0
console.log(Coins.Tether); // 10
console.log(Coins.Cardano); // 11
```

## 문자형 이넘

위에서 살펴봤듯 숫자형 이넘은 이넘의 기본적인 형태이다. 이와 다르게 문자형 이넘은 할당할 때 숫자가 아니라 문자를 할당하는 것을 말한다.

```ts
enum Language {
  Java = '자바',
  Javascript = '자바스크립트',
  Typescript = '타입스크립트',
  Python = '파이썬',
  Rust = '러스트',
  Go = '고랭',
}

const myfavLang = Language.Javascript;
console.log(myFavLang); // 자바스크립트
```
