import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { SearchBar } from 'components/Searchbar/Searchbar';
import css from '../App/App.module.css';
import { fetchImages } from '../../utils/fetchImages';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import Notiflix from 'notiflix';
import { useState, useEffect } from 'react';

export const App = () => {
  const [searchName, setSearchName] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = searchName => {
    setSearchName(searchName);
    setPage(1);
    setImages([]);
    setIsLoading(true);
  };

  useEffect(() => {
    if (searchName === '') return;

    fetchImages(searchName, page)
      .then(data => {
        if (data.hits.length === 0) {
          Notiflix.Notify.failure(`Images not found!`);
        } else {
          setImages(prevImages => [...prevImages, ...data.hits]);
        }
      })
      .catch(err => Notiflix.Notify.failure(err.message))
      .finally(() => setIsLoading(false));
  }, [searchName, page]);

  const onLoadMore = () => {
    setPage(page => page + 1);
    setIsLoading(true);
  };

  return (
    <div className={css.App}>
      <SearchBar handleFormSubmit={handleFormSubmit} />
      <ImageGallery images={images} />
      <Loader isLoading={isLoading} />
      {images.length > 0 && <Button loadMore={onLoadMore} />}
    </div>
  );
};
