// import { Audio } from 'react-loader-spinner';

// export const Loader = () => {
//   return (
//     <Audio
//       height="80"
//       width="80"
//       radius="9"
//       color="blue"
//       ariaLabel="loading"
//       wrapperStyle
//       wrapperClass
//     />
//   );
// };

import { Dna } from 'react-loader-spinner';
import css from '../Loader/Loader.module.css';

export const Loader = ({isLoading}) => {
  if (isLoading){
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
