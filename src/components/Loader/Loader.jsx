import { Dna } from 'react-loader-spinner';
import css from '../Loader/Loader.module.css';

export const Loader = ({ isLoading }) => {
  if (isLoading) {
    return (
      <Dna
        className={css.Loader}
        visible={true}
        color="blue"
        width="1400"
        height="80"
        wrapperClass=""
        wrapperStyle={{}}
        ariaLabel="dna-loading"
      />
    );
  }
};
