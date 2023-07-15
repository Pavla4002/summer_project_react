import styles from './index.module.scss';

interface ButtonProps {
  children: String;
}

const RegularButton = ({ children }: ButtonProps) => {
  return <button className={styles.regularBtn}>{children}</button>;
};

export default RegularButton;
