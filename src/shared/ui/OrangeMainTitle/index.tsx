import styles from './index.module.scss';

interface OrangeMainTitleProps {
  children: String;
}

const OrangeMainTitle = ({ children }: OrangeMainTitleProps) => {
  return <span className={styles.orangeMainText}>{children}</span>;
};

export default OrangeMainTitle;
