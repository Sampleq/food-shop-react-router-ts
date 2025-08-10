import styles from './MainLayout.module.scss';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <>
      <Header />
      <main className={styles.mainLayout}>
        <div className={styles.wrapper}>
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};
