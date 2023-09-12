import styles from './index.module.scss';

interface LimitProps {
  children: JSX.Element | JSX.Element[];
  position?: 'vertically' | 'horizontally';
}

const Limit = ({ children, position = 'vertically' }: LimitProps) => {
  return <div className={styles[position]}>{children}</div>;
};

export default Limit;
