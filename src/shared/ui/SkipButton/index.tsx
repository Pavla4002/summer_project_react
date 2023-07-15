import styles from 'shared/ui/SkipButton/index.module.scss';
import { ArrowRight } from 'shared/ui/index';

const SkipButton = () => {
  return (
    <div className={styles.btn}>
      <span className={styles.orange}>Пропустить</span>
      <button className={styles.circle}>
        <ArrowRight />
      </button>
    </div>
  );
};

export default SkipButton;
