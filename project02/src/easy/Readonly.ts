export interface Todo {
  title: string;
  description: string;
}

type MyReadonly<T> = { readonly [P in keyof T]: T[P] };

type A = MyReadonly<Todo>;
