import PropTypes from 'prop-types';
import css from '../Searchbar/Searchbar.module.css';
import Notiflix from 'notiflix';
import { useState } from 'react';

export const SearchBar = ({ handleFormSubmit }) => {
  const [searchName, setSearchName] = useState('');

  const handleChange = e => {
    const inputValue = e.target.value;
    setSearchName(inputValue);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const searchName = e.currentTarget.input.value;
    if (searchName === '') {
      Notiflix.Notify.failure(`Enter a query!`);
      return;
    }

    handleFormSubmit(searchName);
    setSearchName('');
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.SearchFormButton}>
          <span className={css.SearchFormButtonLabel}>Search</span>
        </button>
        <input
          className={css.SearchFormInput}
          name="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

SearchBar.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
};
