import type { ReactNode } from 'react';
import styles from './MainLayout.module.scss';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <main className={styles.mainLayout}>
      <div className={styles.wrapper}>{children}</div>
    </main>
  );
};
