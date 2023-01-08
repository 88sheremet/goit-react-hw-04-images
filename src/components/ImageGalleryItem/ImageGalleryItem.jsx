import PropTypes from 'prop-types';
import { Component } from 'react';
import css from '../ImageGalleryItem/ImageGalleryItem.module.css';
import { Modal } from '../Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };

  render() {
    return (
      <>
        <li className={css.ImageGalleryItem} onClick={this.toggleModal}>
          <img
            className={css.ImageGalleryItemImage}
            src={this.props.image.webformatURL}
            name={this.props.image.largeImageURL}
            alt={this.props.image.tags}
          />
        </li>

        {this.state.isModalOpen ? (
          <Modal
            srcModal={this.props.image.webformatURL}
            altModal={this.props.image.tags}
            onCloseModal={this.toggleModal}
          />
        ) : null}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
};
