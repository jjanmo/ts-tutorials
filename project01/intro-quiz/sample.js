// @ts-check

/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {number} Sum of a and b
 */

function add(a, b) {
  return a + b;
}

add(1, 10);

// add(1, '10');

const url = '';

/**
 * @typedef {object} Movie
 * @property {string} title
 * @property {string} overview
 * @property {boolean} adult
 * @property {number} popularity
 * @property {string} poster_path
 */

/**
 *
 * @returns {Promise<Movie>}
 */

async function fetchData() {
  return fetch(url).then((res) => res.json());
}

fetchData().then((result) => result.title.length);
