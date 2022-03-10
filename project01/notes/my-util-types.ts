// 유틸 타입 직접 만들어보기
// https://typescript-kr.github.io/pages/utility-types.html

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

// 1) Partial<T>
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

// 2) Required<T>
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

// 3) Readonly<T>
type MyReadonly<T> = { readonly [K in keyof T]: T[K] };

type T3 = MyReadonly<Todo>;

// 4) Pick<T, Keys>
// T에서 프로퍼티 K의 집합을 선택해 타입을 구성합니다.
type MyPick<T, U extends keyof T> = {
  [key in U]: T[key];
};

type T4 = MyPick<TodoItem, 'title' | 'completed'>;

// 5) Record<Keys, Value>

// 6) Exclude<T, Excluded>

// 7) NonNullable<T>

// 8) Extract<T, Extracted>

// 9) Omit<T, Keys>

// 10) ConstructorParameters<ClassConstructor>

// 11) ReturnType<Function>

// 12) InstanceType<ClassConstructor>
