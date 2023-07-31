import styles from './index.module.scss';

interface SmallGrayTextProps {
  children: String;
}

const SmallGrayText = ({ children }: SmallGrayTextProps) => {
  return <span className={styles.smallGrayText}>{children}</span>;
};

export default SmallGrayText;
