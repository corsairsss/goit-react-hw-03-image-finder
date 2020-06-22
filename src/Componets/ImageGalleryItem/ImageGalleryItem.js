import React from 'react';

import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({id,webImgUrl,webformatWidth,webformatHeight,largeImageURL,tags }) {
  return (
    
       <li key={id}>
          <img
            src={webImgUrl}
            width={webformatWidth}
            height={webformatHeight}
            data-large={largeImageURL}
            className={s.listItem__img}
            alt={tags}
          />
        </li>
      
   
  );
}
