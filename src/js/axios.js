import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/';

// axios.get('books/').then(({ data }) => console.log(data));
// axios.delete('books/25').then(({ data }) => console.log(data));

const body = {
  title: 'Любитель пива',
  author: 'Пивоваров',
  genres: ['ужасы', 'гавнужосы'],
  rating: 5.2,
};
// axios.post('books/', body).then(({ data }) => console.log(data));

const data = { title: 'Любитель водки' };
// axios.patch('books/29', data).then(({ data }) => console.log(data));
