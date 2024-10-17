import Image from 'next/image';
import Imag from '../../../imgs/logo-devlinks-small.svg';
import styles from './Loading.module.css'; // Assuming you create a CSS module for styles

function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingAnimation}>
        <Image
          src={Imag}
          alt="loading"
          width={62}
          height={62}
        />
      </div>
    </div>
  );
}

export default Loading;
