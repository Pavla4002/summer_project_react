import styles from './index.module.scss';

interface SmallGrayTextProps {
  children: String;
}

const SmallGrayText = ({ children }: SmallGrayTextProps) => {
  return <div className={styles.smallGrayText}>{children}</div>;
};

export default SmallGrayText;
