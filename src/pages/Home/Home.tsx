import { getAllCathegories } from '@/api';

import styles from './Home.module.scss';
import { useEffect, useState } from 'react';
import type { Category } from '@/types';
import { CategoryList } from '@/components/CategoryList';
import { Preloader } from '@/components/Preloader';
import { Search } from '@/components/Search';
import { useLocation, useNavigate } from 'react-router-dom';

interface HomeProps {}

export const Home = ({}: HomeProps) => {
  const [catalog, setCatalog] = useState<Category[]>([]);
  console.log('catalog', catalog);

  const [filteredCatalog, setFilterdCatalog] = useState<Category[]>([]);

  const { pathname, search } = useLocation();
  console.log('pathname, search', pathname, search);

  const navigate = useNavigate();

  function handleSearch(prompt: string) {
    console.log('handleSearch()');

    setFilterdCatalog(
      catalog.filter((category) =>
        category.strCategory.toLowerCase().includes(prompt.toLowerCase())
      )
    );

    navigate(pathname + `?search=${prompt}`);
  }

  useEffect(() => {
    getAllCathegories().then((categories) => {
      setCatalog(categories);

      setFilterdCatalog(
        search
          ? categories.filter(
              (category) =>
                category.strCategory
                  .toLowerCase()
                  .includes(search.split('=')[1].toLowerCase())
              // if many get params, use: npm i query-string
            )
          : categories
      );
    });
  }, [search]);

  return (
    <div className={styles.home}>
      <Search cb={handleSearch} />

      {catalog.length ? (
        <CategoryList catalog={filteredCatalog} />
      ) : (
        <Preloader />
      )}
    </div>
  );
};
