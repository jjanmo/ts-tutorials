export interface Item {
  title: string;
  description: string;
  completed: boolean;
}

type MyPick<T, K extends keyof T> = { [P in K]: T[P] };
type A1 = MyPick<Item, 'title'>;

type A2 = Pick<Item, 'title'>;
