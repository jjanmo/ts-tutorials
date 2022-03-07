// type guard example
export {};

type Type = 'frontend' | 'backend' | 'app' | 'devops';

interface Person {
  name: string;
  age: number;
}

interface Developer {
  name: string;
  type: Type;
  careerYears: number;
}

function introduce(): Person | Developer {
  return { name: 'jjanmo', type: 'frontend', careerYears: 5 };
}

const result = introduce();
console.log(result.name);
// console.log(`${result.type} in ${result.careerYears}`)
// error
// 1) 유니언 타입에서 주의할 점 : 공통된 속성에만 접근이 가능하다.
// 2) introduce 함수가 호출되는 시점에는 어떤 타입이 올지 모르기 때문에 코드상으로 속성이 있지만 타입스크립트 컴파일단계에서는 오류가 낸다.
// → 이러한 경우 타입 가드를 사용해서 해결할 수 있다.

// 아래와 같이 타입 단언을 사용할 수도 있지만, 매번 이렇게 쓰면 코드가 번거로워질 수 있다.
console.log(
  `${(result as Developer).type} in ${(result as Developer).careerYears}`
);

// 타입가드를 사용한 방법 ⭐️
// →  target is Developer : target 타입이 Developer 이냐 라는 말로 결과값은 boolean이 된다.
function isDeveloper(target: Person | Developer): target is Developer {
  return (target as Developer).type !== undefined;
}

const result2 = introduce();
if (isDeveloper(result2)) {
  console.log(`${result2.type} in ${result2.careerYears}`); // 위와는 다르게 객체 형식으로 바로 접근할 수도 있고 + 자동 완성도 제대로 작동한다.
} else {
  console.log(result2.age);
}
