import { Outlet } from 'react-router-dom';
import styles from './index.module.scss';

const PublicLayout = () => {
  return (
    <div>
      <div className={styles.container}>
        <Outlet />
      </div>
    </div>
  );
};

export default PublicLayout;
