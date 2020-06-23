import fetchArticlesApi from './apiServicePixabay.js';
import notyfOptions from '../Config/notyf-options.js';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

const notyf = new Notyf(notyfOptions);

const FetchData = async (appThis) => {
  try {
    appThis.setState({ loader: true });
    const { currentQuery, page } = appThis.state;

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

    appThis.setState(prevState => ({
        gallery: [...prevState.gallery, ...galleryImg],
        page: prevState.page + 1,
        loader: false,
        heightToScroll: document.body.scrollHeight - 56,
      }));
  } catch (error) {
    console.log('MY ERROR:', error);
    notyf.error({ type: 'badRequest' });
    return [];
  }
};
export default FetchData;
