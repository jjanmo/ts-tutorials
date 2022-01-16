const API_URL = 'https://jsonplaceholder.typicode.com/users';

const $name = document.querySelector('#name');
const $address = document.querySelector('#address');
const $email = document.querySelector('#email');

function fetchUser() {
  fetch(API_URL)
    .then((res) => res.json())
    .then((json) => {
      const {
        name,
        address: { city, street, suite },
        email,
      } = json[0];

      $name.textContent = name;
      $email.textContent = email;
      $address.textContent = `${city} ${street} ${suite}`;
    })
    .catch((e) => console.log('error :', e));
}

fetchUser();

function init() {
  fetchUser();
}

init();
