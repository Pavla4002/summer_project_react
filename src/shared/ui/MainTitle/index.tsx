import styles from './index.module.scss';

interface MainTitleProps {
  children?: String | JSX.Element | (String | JSX.Element)[];
}

const MainTitle = ({ children }: MainTitleProps) => {
  return <div className={styles.mainTitle}>{children}</div>;
};

export default MainTitle;
