const animalOptions = [
  {
    text: 'cat',
    url: './images/animals/cat.jpg',
  },
  {
    text: 'fox',
    url: './images/animals/fox.jpg',
  },
  {
    text: 'hamster',
    url: './images/animals/hamster.jpg',
  },
  {
    text: 'lion',
    url: './images/animals/lion.jpg',
  },
  {
    text: 'pig',
    url: './images/animals/pig.jpg',
  },
  {
    text: 'rabbit',
    url: './images/animals/rabbit.jpg',
  },
];

const languageOptions = [
  {
    text: 'c#',
    url: './images/languages/c-sharp.png',
  },
  {
    text: 'go',
    url: './images/languages/go.png',
  },
  {
    text: 'java',
    url: './images/languages/java.png',
  },
  {
    text: 'javascript',
    url: './images/languages/javascript.png',
  },
  {
    text: 'python',
    url: './images/languages/python.png',
  },
  {
    text: 'ruby',
    url: './images/languages/ruby.png',
  },
  {
    text: 'rust',
    url: './images/languages/rust.png',
  },
  {
    text: 'typescript',
    url: './images/languages/typescript.png',
  },
];

const $animalSelect = document.querySelector(
  '#animal-select'
) as HTMLSelectElement;
const $languageSelect = document.querySelector(
  '#language-select'
) as HTMLSelectElement;

function createOptions(data: any, target: any) {
  const created = data.map(
    (option: any) => `<option value=${option.text}>${option.text}</option>`
  );

  target.innerHTML = created.join('');
}

function renderImage(target: HTMLElement, src: string) {
  if (target.lastElementChild?.tagName === 'IMG')
    target.lastElementChild.remove();

  const $image = document.createElement('img');
  $image.src = src;
  $image.classList.add('image');
  target.append($image);
}

function handleAnimalChange(e: any) {
  const selected: string = e.target.value;
  const src = animalOptions.filter((option) => option.text === selected)[0].url;
  const $section = document.querySelector('#animal-section') as HTMLElement;
  renderImage($section, src);
}

function handleLanguageChange(e: any) {
  const selected: string = e.target.value;
  const src = languageOptions.filter((option) => option.text === selected)[0]
    .url;
  console.log(src);
  const $section = document.querySelector('#language-section') as HTMLElement;
  renderImage($section, src);
}

function init() {
  $animalSelect.addEventListener('change', handleAnimalChange);
  $languageSelect.addEventListener('change', handleLanguageChange);

  createOptions(animalOptions, $animalSelect);
  createOptions(languageOptions, $languageSelect);
}

init();
