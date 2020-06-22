import React, { Component } from 'react';

import SearchBar from './SearchBar/SearchBar.js';
import ImageGallery from './ImageGallery/ImageGallery.js';
import Button from './Button/Button.js';
import Modal from './Modal/Modal.js';
import Spinner from './Spinner/Spinner.js';

import crateArrayWithObjImg from '../Services/data.js';

export default class App extends Component {
  state = {
    gallery: [],
    page: 1,
    currentQuery: '',
    largeImgInModal: '',
    loader: false,
    heightToScroll: 0,
  };

  fetchArticles = async () => {
    this.setState({ loader: true });
    const { currentQuery, page } = this.state;
    const galleryImg = await crateArrayWithObjImg(currentQuery, page);
    this.setState(prevState => ({
      gallery: [...prevState.gallery, ...galleryImg],
      page: prevState.page + 1,
      loader: false,
      heightToScroll: document.body.scrollHeight - 56,
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    const { currentQuery, loader, heightToScroll } = this.state;
    if (prevState.currentQuery !== currentQuery && currentQuery !== '')
      this.fetchArticles();
    if (!loader) {
      window.scrollTo({
        top: heightToScroll,
        behavior: 'smooth',
      });
    }
  }

  handleChangeSubmit = query =>
    this.setState({
      currentQuery: query,
      gallery: [],
      page: 1,
      heightToScroll: 0,
    });

  GalleryClick = ({ target }) =>
    this.setState({ largeImgInModal: target.dataset.large });

  CloseModal = () => this.setState({ largeImgInModal: '' });

  LoadMore = () => this.fetchArticles();

  render() {
    const { largeImgInModal, gallery, loader } = this.state;
    const isShowBtnLoadMore = gallery.length > 0;
    const isShowGalary = gallery.length > 0;
    const isShowModalWindow = largeImgInModal !== '';
    return (
      <>
        {isShowModalWindow && (
          <Modal url={largeImgInModal} closeModal={this.CloseModal} />
        )}
        <SearchBar onSubmit={this.handleChangeSubmit} />
        {isShowGalary && (
          <ImageGallery onClick={this.GalleryClick} gallery={gallery} />
        )}

        {isShowBtnLoadMore && !loader && <Button LoadMore={this.LoadMore} />}
        {loader && <Spinner />}
      </>
    );
  }
}
