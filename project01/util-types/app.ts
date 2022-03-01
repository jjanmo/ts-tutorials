// 제네릭을 이용한 커스텀 타입 만들기

// 1) 제네릭 타입 제한 예제

function logText<T extends { length: number }>(text: T) {
  console.log(text.length);
  return text;
}

/**
 * interface LengthType {
 *  length: number;
 * }
 * 로 정의해서 위에서 제네릭 extends 뒤에 사용할 수 있다.
 */

logText('hello world');

// 2) 제네릭 타입 제한 예제

interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

// 함수의 인자로 ShoppingItem의 안의 속성 중에 한개만을 받겠다고 제약
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}

getShoppingItemOption('name');
getShoppingItemOption('price');
getShoppingItemOption('stock');
// keyof  -> "name" | "price" | "stock" 세가지 중에 한가지만을 받을 수 있다.
