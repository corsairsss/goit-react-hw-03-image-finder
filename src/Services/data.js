import fetchArticlesApi from './apiServicePixabay.js';
import notyfOptions from '../Config/notyf-options.js';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

const notyf = new Notyf(notyfOptions);

const crateArrayWithObjImg = async (currentQuery, page) => {
  try {
    const hits = await fetchArticlesApi(currentQuery, page);
    const galleryImg = hits.map(hit => {
      return {
        id: hit.id,
        webImgUrl: hit.webformatURL,
        largeImageURL: hit.largeImageURL,
        webformatWidth: hit.webformatWidth,
        webformatHeight: hit.webformatHeight,
        tags: hit.tags,
      };
    });
    return galleryImg;
  } catch (error) {
    console.log('MY ERROR:', error);
    notyf.error({ type: 'badRequest' });
    return [];
  }
};
export default crateArrayWithObjImg;
