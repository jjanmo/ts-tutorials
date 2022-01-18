const $root = document.querySelector<HTMLDivElement>('#root');

const add = (a: number, b: number): number => a + b;

const render = (value: number): void => {
  const text: string = `This is answer ${value}`;

  $root!.textContent = text;
};

function init(): void {
  const sum = add(50, 40);
  render(sum);
}

init();
