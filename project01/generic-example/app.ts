import { Options } from './types';
import { animalOptions, languageOptions } from './data';

const $animalSelect = document.querySelector(
  '#animal-select'
) as HTMLSelectElement;
const $languageSelect = document.querySelector(
  '#language-select'
) as HTMLSelectElement;

function createOptions<T>(options: Options): [HTMLElement, string[]] {
  const _target = options.target;
  const _options = options.data.map(
    (option: any) => `<option value=${option.value}>${option.value}</option>`
  );
  const defaultOption: string = `<option value="">Choose an option</option>`;
  _options.unshift(defaultOption);

  return [_target, _options];
}

function render() {
  const [target1, options1] = createOptions(animalOptions);
  target1.innerHTML = options1.join('');

  const [target2, options2] = createOptions(languageOptions);
  target2.innerHTML = options2.join('');
}

function renderImage(target: HTMLElement, src: string | undefined) {
  if (!src) return;

  if (target.lastElementChild?.tagName === 'IMG')
    target.lastElementChild.remove();
  const $image = document.createElement('img');
  $image.src = src;
  $image.classList.add('image');
  target.append($image);
}

function handleAnimalChange(e: Event) {
  const selected = (e.target as HTMLSelectElement).value;
  const src = animalOptions.data.filter(
    (option) => option.value === selected
  )[0]?.url;
  const $section = document.querySelector('#animal-section') as HTMLElement;
  renderImage($section, src);
}

function handleLanguageChange(e: Event) {
  const selected: string = (e.target as HTMLSelectElement).value;
  const src = languageOptions.data.filter(
    (option) => option.value === selected
  )[0]?.url;
  const $section = document.querySelector('#language-section') as HTMLElement;
  renderImage($section, src);
}

function init() {
  $animalSelect.addEventListener('change', handleAnimalChange);
  $languageSelect.addEventListener('change', handleLanguageChange);

  render();
}

init();
