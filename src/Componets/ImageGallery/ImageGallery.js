import React from 'react';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem.js';

import s from './ImageGallery.module.css';

export default function ImageGallery({ gallery, onClick }) {
  return (
    <ul className={s.list} onClick={onClick}>
       {gallery.map(elem=><ImageGalleryItem {...elem} />)}
    </ul>
  );
}
