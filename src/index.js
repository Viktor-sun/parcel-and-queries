import './style.scss';
import './js/axios';
import './js/scrollbar'

const BASE_URL = 'http://localhost:3000/';

function del(id) {
  const options = { method: 'DELETE' };
  fetch(`${BASE_URL}books/${id}`, options)
    .then(res => res.json())
    .then(console.log);
}

// =================================================

const body = {
  title: 'Новое издание',
  author: 'Абсолют',
  genres: ['JS', 'HTML', 'CSS', 'SCSS'],
  rating: 150,
};

function add(postToAdd) {
  const options = {
    method: 'POST',
    body: JSON.stringify(postToAdd),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  fetch(`${BASE_URL}books/`, options)
    .then(res => res.json())
    .then(console.log);
}

// ===========================================

const upd = {
  title: 'Я PUT',
  author: 'Шикардос',
  genres: ['JS'],
  rating: 4,
};

function update(postToUpdate, id) {
  const options = {
    method: 'PUT',
    body: JSON.stringify(postToUpdate),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  fetch(`${BASE_URL}books/${id}`, options)
    .then(res => res.json())
    .then(console.log);
}
