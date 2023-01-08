import PropTypes from 'prop-types';
import { useState } from 'react';
import css from '../ImageGalleryItem/ImageGalleryItem.module.css';
import { Modal } from '../Modal/Modal';

export const ImageGalleryItem = ({ image }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <li className={css.ImageGalleryItem} onClick={toggleModal}>
        <img
          className={css.ImageGalleryItemImage}
          src={image.webformatURL}
          name={image.largeImageURL}
          alt={image.tags}
        />
      </li>

      {isModalOpen ? (
        <Modal
          srcModal={image.webformatURL}
          altModal={image.tags}
          onCloseModal={toggleModal}
        />
      ) : null}
    </>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
};
