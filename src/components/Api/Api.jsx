const BASE_URL = 'https://pixabay.com/api/';
const KEY = '34120611-46827ad0b05a895652458b8c4';

const getImages = (query, page) => {
  return fetch(
    `${BASE_URL}?key=${KEY}&page=${page}&q=${query}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error('Not found. Try to change name'));
  });
};

export default getImages;
