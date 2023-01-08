import PropTypes from 'prop-types';
import { Component } from 'react';
import css from '../Searchbar/Searchbar.module.css';
import Notiflix from 'notiflix';

export class SearchBar extends Component {
  state = {
    searchName: '',
  };

  handleChange = e => {
    const inputValue = e.target.value;
    this.setState({ searchName: inputValue });
  };

  handleSubmit = e => {
    e.preventDefault();

    const searchName = e.currentTarget.input.value;
    if (searchName === '') {
      Notiflix.Notify.failure(`Enter a query!`);
      return;
    }

    if (this.state.searchName === '') return;

    this.props.handleFormSubmit(searchName);
    this.setState({
      searchName: '',
    });
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
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
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

SearchBar.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
};
