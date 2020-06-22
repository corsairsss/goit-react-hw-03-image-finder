const baseUrl = 'https://pixabay.com/api/';
const API_KEY = '16796853-8112350817a4bd9fba3110e85';

const fetchArticles = async (query, page) => {
  try {
    const requestParam = `?q=${query}&image_type=photo&orientation=horizontal&page=${page}&per_page=12&key=${API_KEY}`;
    const { hits } = await fetch(baseUrl + requestParam).then(data =>
      data.json(),
    );
    return hits;
  } catch (error) {
    throw error;
  }
};

export default fetchArticles;
