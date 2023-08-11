import styles from './index.module.scss';

interface textProps {
  children: string;
  type?: string;
}

const Text = ({ children, type = 'regular' }: textProps) => {
  return <span className={styles[type]}>{children}</span>;
};

export default Text;
