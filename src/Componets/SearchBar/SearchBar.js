import React, { Component } from 'react';

import s from './SearchBar.module.css';

export default class SearchBar extends Component {
  state = {
    value: '',
  };

  handleChangeValue = ({ target }) => this.setState({ value: target.value });

  //  В МЕНЕ НЕ ВИХОДИТЬ ДЕСТРУКТИЗУВАТИ, ЯК ВИ ПОКАЗУВАЛИ
  //  ({preventDefault})  ТОМУ ЗНОВУ onHandleSubmit = e => {

  onHandleSubmit = e => {
    const { value } = this.state;
    e.preventDefault();
    this.props.onSubmit(value);
    if (value === '') return;
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;
    return (
      <>
        <header className={s.header}>
          <form onSubmit={this.onHandleSubmit} className={s.form}>
            <input
              type="text"
              value={value}
              placeholder="search image..."
              autoFocus
              className={s.header__input}
              onChange={this.handleChangeValue}
            />
            <button type="submit" className={s.header__btn}>
              Search
            </button>
          </form>
        </header>
      </>
    );
  }
}
