const baseUrl = 'https://pixabay.com/api/';

export default {
  API_KEY: '16796853-8112350817a4bd9fba3110e85',

  async fetchArticles(query, page) {
    try {
      const requestParam = `?q=${query}&image_type=photo&orientation=horizontal&page=${page}&per_page=12&key=${this.API_KEY}`;
      const response = await fetch(baseUrl + requestParam);
      const data = await response.json();
      const arrayImg = await data.hits;
      return arrayImg;
    } catch (error) {
      throw error;
    }
  },
};
