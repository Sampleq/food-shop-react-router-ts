import type { Category } from '@/types';
import styles from './CategoryList.module.scss';
import { CategoryItem } from '../CategoryItem';

interface CategoryListProps {
  catalog: Category[];
}

export const CategoryList = ({ catalog }: CategoryListProps) => {
  return (
    <>
      <div className={styles.categoryList}>
        {catalog.map((category) => (
          <CategoryItem key={category.idCategory} category={category} />
        ))}
      </div>
    </>
  );
};
