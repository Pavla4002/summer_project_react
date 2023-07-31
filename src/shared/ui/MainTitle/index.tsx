import styles from './index.module.scss';

interface MainTitleProps {
  children?: String | JSX.Element | (String | JSX.Element)[];
}

const MainTitle = ({ children }: MainTitleProps) => {
  return <span className={styles.mainTitle}>{children}</span>;
};

export default MainTitle;
