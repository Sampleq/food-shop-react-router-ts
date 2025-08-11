import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
  return (
    <header className={styles.header}>
      <h1>
        <Link to={'/'}>Food Shop</Link>
      </h1>
      <ul>
        {/* 
        <li>
          <Link to={'units/23'}>Unit23</Link>
        </li>
        */}
        <li>
          <Link to={'broken'}>404</Link>
        </li>
        <li>
          <Link to={'contacts'}>Contacts</Link>
        </li>
        <li>
          <Link to={'about'}>About</Link>
        </li>

        <li>
          <a
            href='https://github.com/Sampleq/food-shop-react-router-ts'
            target='_blank'
          >
            Repo
          </a>
        </li>
      </ul>
    </header>
  );
};
