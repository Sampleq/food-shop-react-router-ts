import styles from './Footer.module.scss';

interface FooterProps {}

export const Footer = ({}: FooterProps) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.copy}>© {new Date().getFullYear()} Sampleq</div>
      <ul>
        <li>
          <a href='' target='_blank'>
            Repo
          </a>
        </li>
      </ul>
    </footer>
  );
};
