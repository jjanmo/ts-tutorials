// type Programmer = {
//   /**
//    * Nickname of programmer or Fullname of programmer
//    */
//   name: string;
//   /**
//    * Your confident skill or you're known for 'this'
//    */
//   knownFor: string[];
//   /**
//    * You think to need to more study or learn
//    */
//   required: string[];
// };

// const jjanmo: Programmer = {
//   name: 'jjanmo',
//   knownFor: ['vanilla javascript', 'react'],
//   required: ['typescript', 'next'],
// };

// type Person = {
//   name: string;
//   age: number;
// };

// interface Person {
//   name: string;
//   age: number;
// }

// let jjanmo: Person = {
//   name: 'jjanmo',
//   age: 25,
// };

// interface Developer {
//   name: string;
//   skill: string;
// }

// interface Person {
//   name: string;
//   age: number;
// }

// function isDeveloper(someone: Developer | Person): someone is Developer {
//   return (someone as Developer).skill !== undefined;
// }

// function askSomeone(someone: Developer | Person) {
//   if (isDeveloper(someone)) {
//     console.log(someone.skill);
//   } else {
//     console.log(someone.age);
//   }
// }

// type T1 = string | number | boolean;
// type T2 = string & number & boolean;

// enum Coins {
//   Bitcoin,
//   Etherium,
//   Tether,
//   Cardano,
//   Solana,
// }

// console.log(Coins.Bitcoin);
// console.log(Coins[4]);

// const bitcoin = Coins.Bitcoin;
// console.log(bitcoin);

// Coins.Bitcoin = 10; // error

// enum Coins {
//   Bitcoin,
//   Etherium,
//   Tether = 10,
//   Cardano,
//   Solana,
// }

// console.log(Coins.Bitcoin);
// console.log(Coins.Tether);
// console.log(Coins.Cardano);

// enum Language {
//   Java = '자바',
//   Javascript = '자바스크립트',
//   Typescript = '타입스크립트',
//   Python = '파이썬',
//   Rust = '러스트',
//   Go = '고랭',
// }
// const myFavLang = Language.Javascript;
// console.log(myFavLang);

// type Person = {
//   name: string;
//   age: number;
//   friends?: Person[];
// };

// let me: Person = {
//   name: 'jjanmo',
//   age: 15,
//   friends: [
//     {
//       name: 'jjanmo',
//       age: 15,
//     },
//   ],
// };

// type Status = 'TODO' | 'DOING' | 'DONE';

// type Todo = {
//   title: string;
//   status: Status;
//   with: {
//     friends: string[];
//     date: string;
//     location: string;
//   };
// };

// let todo: Readonly<Todo> = {
//   title: '자바스크립트 공부하기',
//   status: 'TODO',
//   with: {
//     friends: ['jjanmo'],
//     date: '2022.02.30',
//     location: 'NewYork',
//   },
// };

// todo.status = 'DOING'
// Cannot assign to 'status' because it is a read-only property.

// todo.with.friends.push('michael');
// todo.with.date = '2022.03.01';

// type SuperReadonly<T> = {
//   readonly [P in keyof T]: SuperReadonly<T[P]>;
// };

// let todo: SuperReadonly<Todo> = {
//   title: '자바스크립트 공부하기',
//   status: 'TODO',
//   with: {
//     friends: ['jjanmo'],
//     date: '2022.02.30',
//     location: 'NewYork',
//   },
// };

// todo.with.friends.push('michael');
// todo.with.friends = ['michale'];
// todo.with.date = '2022.03.01';

// type T1 = Readonly<'자바스크립트 공부하기'>;
// // let title: T1 = '자바스크립트 공부하기';
// let title: T1 ='자바 공부하기';
// //Type '"자바 공부하기"' is not assignable to type '"자바스크립트 공부하기"'

type Status = 'TODO' | 'DOING' | 'DONE';

type Todo = {
  title: string;
  status: Status;
  with: {
    friends: string[];
    date: string;
    location: string;
  };
};

type SuperReadonly<T> = {
  readonly [P in keyof T]: SuperReadonly<T[P]>;
};

let todo: SuperReadonly<Todo> = {
  title: '자바스크립트 공부하기',
  status: 'TODO',
  with: {
    friends: ['jjanmo'],
    date: '2022.02.30',
    location: 'NewYork',
  },
};

function getNumber(value: number): number {
  return value;
}

function getString(value: string): string {
  return value;
}

function getValue<T>(value: T): T {
  return value;
}

const text = getValue<string>('jjanmo');
text.split('');
