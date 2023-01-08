import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { SearchBar } from 'components/Searchbar/Searchbar';
import { Component } from 'react';
import css from '../App/App.module.css';
import { fetchImages } from '../../utils/fetchImages';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import Notiflix from 'notiflix';

export class App extends Component {
  state = {
    searchName: '',
    page: 1,
    images: [],
    isLoading: false,
  };

  handleFormSubmit = searchName => {
    this.setState({
      searchName,
      page: 1,
      images: [],
      isLoading: true,
    });
  };

  componentDidUpdate(_, prevState) {
    if (
      this.state.searchName === prevState.searchName &&
      this.state.page === prevState.page
    ) {
      return;
    }

    const { searchName, page } = this.state;

    fetchImages(searchName, page)
      .then(data => {
        if (data.hits.length === 0) {
          Notiflix.Notify.failure(`Images not found!`);
        } else {
          this.setState(prevState => ({
            images: [...prevState.images, ...data.hits],
          }));
        }
      })
      .catch(err => Notiflix.Notify.failure(err.message))
      .finally(() => this.setState({ isLoading: false }));
  }

  onLoadMore = () =>
    this.setState(prevState => ({ page: prevState.page + 1, isLoading: true }));

  render() {
    return (
      <div className={css.App}>
        <SearchBar handleFormSubmit={this.handleFormSubmit} />
        <ImageGallery images={this.state.images} />
        <Loader isLoading={this.state.isLoading} />
        {this.state.images.length > 0 && <Button loadMore={this.onLoadMore} />}
      </div>
    );
  }
}
