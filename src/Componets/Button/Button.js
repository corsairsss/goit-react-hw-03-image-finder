import React from 'react';

import s from './Button.module.css';

export default function Button({ LoadMore }) {
  return (
    <div className={s.footer}>
      <button className={s.footer__btn} type="button" onClick={LoadMore}>
        Load more
      </button>
    </div>
  );
}
