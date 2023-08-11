import styles from './index.module.scss';

interface MainTitleProps {
  children?: String | JSX.Element | (String | JSX.Element)[];
  level?: Number;
  color?: '#FE5B18' | '#B2ADAA' | '#000000';
  transform?: 'capitalize' | 'uppercase' | 'none';
}

const Title = ({ children, level = 1, color, transform = 'capitalize' }: MainTitleProps) => {
  return (
    <span
      className={styles[`h${level}`]}
      style={{ color: `${color}`, textTransform: `${transform}` }}
    >
      {children}
    </span>
  );
};

export default Title;
