// type assertion example in DOM API

const $app = document.querySelector('.app') as HTMLDivElement;

// $app.innerHTML = 'Hello World';
// error : 해당 엘리먼트를 사용할 때 반드시 .app 요소가 있다고 보장할 수 없기때문에 Object is possibly 'null'. 와 같은 메세지를 준다.

// sol1)
// 이런식으로 조건을 줄 수 있음 .
if ($app) {
  $app.innerHTML = 'Hello World1';
}

// sol2) 타입 단언
$app.innerHTML = 'Hello World2';
