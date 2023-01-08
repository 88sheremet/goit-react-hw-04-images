import PropTypes from 'prop-types';
import css from '../Button/Button.module.css';

export const Button = ({ loadMore }) => {
  return (
    <button type="button" className={css.Button} onClick={loadMore}>
      Load more
    </button>
  );
};

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
