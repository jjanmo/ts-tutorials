import { Options } from './types';

export const animalOptions: Options = {
  target: document.querySelector('#animal-select') as HTMLSelectElement,
  data: [
    {
      value: 'cat',
      url: './images/animals/cat.jpg',
    },
    {
      value: 'fox',
      url: './images/animals/fox.jpg',
    },
    {
      value: 'hamster',
      url: './images/animals/hamster.jpg',
    },
    {
      value: 'lion',
      url: './images/animals/lion.jpg',
    },
    {
      value: 'pig',
      url: './images/animals/pig.jpg',
    },
    {
      value: 'rabbit',
      url: './images/animals/rabbit.jpg',
    },
  ],
};

export const languageOptions: Options = {
  target: document.querySelector('#language-select') as HTMLSelectElement,
  data: [
    {
      value: 'c#',
      url: './images/languages/c-sharp.png',
    },
    {
      value: 'go',
      url: './images/languages/go.png',
    },
    {
      value: 'java',
      url: './images/languages/java.png',
    },
    {
      value: 'javascript',
      url: './images/languages/javascript.png',
    },
    {
      value: 'python',
      url: './images/languages/python.png',
    },
    {
      value: 'ruby',
      url: './images/languages/ruby.png',
    },
    {
      value: 'rust',
      url: './images/languages/rust.png',
    },
    {
      value: 'typescript',
      url: './images/languages/typescript.png',
    },
  ],
};
