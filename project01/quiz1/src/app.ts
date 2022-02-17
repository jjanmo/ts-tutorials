type Todo = {
  id: number;
  title: string;
  done: boolean;
};
let todoItems: Todo[];

function fetchTodoItems(): Todo[] {
  const todos: Todo[] = [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
  return todos;
}

function fetchTodos(): Todo[] {
  const todos = fetchTodoItems();
  return todos;
}

function addTodo(todo: Todo): void {
  todoItems.push(todo);
}

function deleteTodo(index: number): void {
  todoItems.splice(index, 1);
}

function completeTodo(index: number, todo: Todo): void {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

function logFirstTodo(): Todo {
  return todoItems[0];
}

function showCompleted(): Todo[] {
  return todoItems.filter((item: Todo): boolean => item.done);
}

function addTwoTodoItems(): void {
  const newTodo1: Todo = { id: 4, title: 'Hello', done: false };
  const newTodo2: Todo = { id: 5, title: 'World', done: false };
  addTodo(newTodo1);
  addTodo(newTodo2);
}

function log(): void {
  console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();
