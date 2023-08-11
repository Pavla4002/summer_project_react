import styles from './index.module.scss';

interface ButtonProps {
  children: String;
  width: Number;
  height: Number;
}

const RegularButton = ({ children, width, height }: ButtonProps) => {
  return (
    <button className={styles.regularBtn} style={{ width: `${width}px`, height: `${height}px` }}>
      {children}
    </button>
  );
};

export default RegularButton;
