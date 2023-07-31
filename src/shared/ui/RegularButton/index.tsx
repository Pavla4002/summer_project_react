import styles from './index.module.scss';

interface ButtonProps {
  children: String;
  width: String;
  height: String;
}

const RegularButton = ({ children, width, height }: ButtonProps) => {
  return (
    <button className={styles.regularBtn} style={{ width: `${width}`, height: `${height}` }}>
      {children}
    </button>
  );
};

export default RegularButton;
