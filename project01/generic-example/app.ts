const animalOptions = [
  {
    text: 'cat',
    url: './animals/cat.jpg',
  },
  {
    text: 'fox',
    url: './animals/fox.jpg',
  },
  {
    text: 'hamster',
    url: './animals/hamster.jpg',
  },
  {
    text: 'lion',
    url: './animals/lion.jpg',
  },
  {
    text: 'pig',
    url: './animals/pig.jpg',
  },
  {
    text: 'rabbit',
    url: './animals/rabbit.jpg',
  },
];

const languageOptions = [
  {
    text: 'c#',
    url: './languages/c#.png',
  },
  {
    text: 'go',
    url: './languages/go.png',
  },
  {
    text: 'java',
    url: './languages/java.png',
  },
  {
    text: 'javascript',
    url: './languages/javascript.png',
  },
  {
    text: 'python',
    url: './languages/python.png',
  },
  {
    text: 'ruby',
    url: './languages/ruby.png',
  },
  {
    text: 'rust',
    url: './languages/rust.png',
  },
  {
    text: 'typescript',
    url: './languages/typescript.png',
  },
];

const $animalSelect = document.querySelector(
  '#animal-select'
) as HTMLSelectElement;
const $languageSelect = document.querySelector(
  '#language-select'
) as HTMLSelectElement;

function createOptions(data: any, target: any) {
  const created = data.map((option: any) => `<option>${option.text}</option>`);

  target.innerHTML = created.join('');
}

function handleChange() {}

function init() {
  $animalSelect.addEventListener('onchange', handleChange);
  $languageSelect.addEventListener('onchange', handleChange);

  createOptions(animalOptions, $animalSelect);
  createOptions(languageOptions, $languageSelect);
}

init();
