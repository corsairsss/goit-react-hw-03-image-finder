import React, { Component } from 'react';

import s from './Modal.module.css';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = ({ code }) => {
    if (code === 'Escape') {
      this.props.closeModal();
    }
  };

  render() {
    const { closeModal, url } = this.props;
    return (
      <div className={s.container} onClick={closeModal}>
        <div>
          <img src={url} alt="someImage" />
        </div>
      </div>
    );
  }
}
