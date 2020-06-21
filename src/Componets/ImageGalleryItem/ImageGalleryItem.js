import React from 'react';

import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ gallery }) {
  return (
    <>
      {gallery.map(item => (
        <li key={item.id}>
          <img
            src={item.webImgUrl}
            width={item.webformatWidth}
            height={item.webformatHeight}
            data-large={item.largeImageURL}
            className={s.listItem__img}
            alt={item.tags}
          />
        </li>
      ))}
    </>
  );
}
