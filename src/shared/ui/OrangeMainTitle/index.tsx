import styles from './index.module.scss';

interface OrangeMainTitleProps {
  children: String;
}

const OrangeMainTitle = ({ children }: OrangeMainTitleProps) => {
  return <div className={styles.orangeMainText}>{children}</div>;
};

export default OrangeMainTitle;
