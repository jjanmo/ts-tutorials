// 유틸 타입 직접 만들어보기
// https://typescript-kr.github.io/pages/utility-types.html

export {};

type Person = {
  name: string;
  age: number;
};

type Todo = {
  title?: string;
  status?: string;
};

type TodoItem = {
  title: string;
  description: string;
  completed: boolean;
};

// ✅ 1) Partial<T>
// T의 모든 프로퍼티를 선택적으로 만드는 타입을 구성합니다.
type MyPartial<T> = {
  [key in keyof T]?: T[key];
};

// [MORE] T의 특정 프로퍼티(U)를 선택적으로 만드는 타입을 구성합니다.
type MySpecificPartial<T, U extends keyof T> = {
  [key in keyof T as key extends U ? key : never]?: T[key];
} & {
  [key in keyof T as key extends U ? never : key]: T[key];
};

type T1 = MySpecificPartial<Person, 'age'>;
/*
{
  name : string,
  age ?: number
}
*/
const obj: T1 = {
  name: 'jjanmo',
};

// ✅  2) Required<T> 💫 (새로운 것들 존재!)
// T의 모든 프로퍼티가 필수로 설정된 타입을 구성합니다.
/*
관련 내용 : Mapping Modifiers - 2가지 존재
immutability : readonly
optionality : ?
이를 추가하거나 제거할때 해당 키워드 앞에  +/-를 붙여서 이를 컨트롤할 수 있다
*/
type MyRequired<T> = {
  [K in keyof T]-?: T[K];
};

type T2 = MyRequired<Todo>;

// ✅  3) Readonly<T>
type MyReadonly<T> = { readonly [K in keyof T]: T[K] };

type T3 = MyReadonly<Todo>;

// ✅  4) Pick<T, Keys>
// T에서 프로퍼티 K의 집합을 선택해 타입을 구성합니다.
type MyPick<T, U extends keyof T> = {
  [key in U]: T[key];
};

type T4 = MyPick<TodoItem, 'title' | 'completed'>;

// ✅  5) Record<Keys, Value> ⭐️  (개인적으로 어려움)
// 타입 T의 프로퍼티의 집합 K로 타입을 구성합니다. 이 유틸리티는 타입의 프로퍼티들을 다른 타입에 매핑시키는 데 사용될 수 있습니다.

// ✅  6) Exclude<T, Excluded>
// T에서 U에 할당할 수 있는 모든 속성을 제외한 타입을 구성합니다.

type MyExclude<T, U> = T extends U ? never : T;

type T6_1 = MyExclude<'a' | 'b' | 'c', 'a'>; // "b" | "c"
type T6_2 = MyExclude<'a' | 'b' | 'c', 'a' | 'b'>; // "c"
type T6_3 = MyExclude<string | number | (() => void), Function>; // string | number

// ✅ 7) MyNonNullable<T>
// T에서 null 과 undefined를 제외한 타입을 구성합니다.

type MyNonNullable<T> = T extends null | undefined ? never : T;

type T7_1 = MyNonNullable<string | number | undefined>; // string | number
type T7_2 = MyNonNullable<string[] | null | undefined>; // string[]

// ✅ 8) Extract<T, Extracted>
// T에서 U에 할당 할 수 있는 모든 속성을 추출하여 타입을 구성합니다.

type MyExtract<T, U> = T extends U ? T : never;

type T8_1 = MyExtract<'a' | 'b' | 'c', 'a' | 'f'>; // "a"
type T8_2 = MyExtract<string | number | (() => void), Function>; // () => void

// ✅ 9) Omit<T, Keys>
// T에서 모든 프로퍼티를 선택한 다음 K를 제거한 타입을 구성합니다.

// 내 풀이
type MyOmit1<T, K> = {
  [key in keyof T as key extends K ? never : key]: T[key];
};

// builtin
type MyOmit2<T, K> = {
  [P in Exclude<keyof T, K>]: T[P];
};
/*
Step1
Exclude<'title' | 'description' | 'completed', 'completed'> => 'title' | 'description'

Step2
'title' | 'description' 를 mapped type using "in" => {title : string, description : string}
*/

type T9_1 = MyOmit1<TodoItem, 'completed'>;
type T9_2 = MyOmit2<TodoItem, 'completed'>;

// ✅ 10) ConstructorParameters<ClassConstructor>
// ConstructorParameters<T> 타입은 생성자 함수 타입의 모든 매개변수 타입을 추출할 수 있게 해줍니다. 모든 매개변수 타입을 가지는 튜플 타입(T가 함수가 아닌 경우 never)을 생성합니다.

type MyConstructorParameters<T extends new (...args: any[]) => {}> = any;

type T10_1 = MyConstructorParameters<ErrorConstructor>; // [(string | undefined)?]
type T10_2 = MyConstructorParameters<FunctionConstructor>; // string[]
type T10_3 = MyConstructorParameters<RegExpConstructor>; // [string, (string | undefined)?]

// ✅ 11) ReturnType<Function>
// 함수 T의 반환 타입으로 구성된 타입을 만듭니다.

type MyReturnType<T extends (...args: any[]) => void> = T extends (
  ...args: any[]
) => infer R
  ? R
  : never;

declare function f1(): { a: number; b: string };
type T11_1 = MyReturnType<() => string>; // string
type T11_2 = MyReturnType<(s: string) => void>; // void
type T11_3 = MyReturnType<<T>() => T>; // {}
type T11_4 = MyReturnType<<T extends U, U extends number[]>() => T>; // number[]
type T11_5 = MyReturnType<typeof f1>; // { a: number, b: string }
type T11_6 = MyReturnType<any>; // any
type T11_7 = MyReturnType<never>; // any
// @ts-expect-error
type T11_8 = MyReturnType<string>; // 오류
// @ts-expect-error
type T11_9 = MyReturnType<Function>; // 오류

// ✅ 12) InstanceType<ClassConstructor>
// 생성자 함수 타입 T의 인스턴스 타입으로 구성된 타입을 만듭니다.

type MyInstanceType<T extends new (...args: any[]) => void> = any;
class C {
  x = 0;
  y = 0;
}

type T12_1 = MyInstanceType<typeof C>; // C
type T12_2 = MyInstanceType<any>; // any
type T12_3 = MyInstanceType<never>; // any
// @ts-expect-error
type T12_4 = MyInstanceType<string>; // 오류
// @ts-expect-error
type T12_5 = MyInstanceType<Function>; // 오류

// ✅ 13) Parameters<T>
// 함수 타입 T의 매개변수 타입들의 튜플 타입을 구성합니다.
type MyParameters<T extends (...args: any[]) => void> = any;

declare function f1(arg: { a: number; b: string }): void;
type T13_1 = MyParameters<() => string>; // []
type T13_2 = MyParameters<(s: string) => void>; // [string]
type T13_3 = MyParameters<<T>(arg: T) => T>; // [unknown]
type T13_4 = MyParameters<typeof f1>; // [{ a: number, b: string }]
type T13_5 = MyParameters<any>; // unknown[]
type T13_6 = MyParameters<never>; // never
// @ts-expect-error
type T13_7 = MyParameters<string>; // 오류
// @ts-expect-error
type T13_8 = MyParameters<Function>; // 오류
