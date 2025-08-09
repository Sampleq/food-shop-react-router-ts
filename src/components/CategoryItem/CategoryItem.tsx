import type { Category } from '@/types';
import styles from './CategoryItem.module.scss';
import { Link } from 'react-router-dom';

interface CategoryItemProps {
  category: Category;
}

export const CategoryItem = ({ category }: CategoryItemProps) => {
  const { idCategory, strCategory, strCategoryDescription, strCategoryThumb } =
    category;
  return (
    <div className={styles.categoryItem}>
      <img
        src={
          !strCategoryThumb
            ? `https://images.placeholders.dev/?width=300&height=300&text=${name}&textWrap=true&fontSize=36`
            : strCategoryThumb
        }
        alt={strCategory}
      />

      <div className={styles.content}>
        <h4>{strCategory}</h4>

        <p className={styles.description}>
          {/* add fuction to trim text to 100chars with '...' in the end if longer */}
          {strCategoryDescription.slice(0, 90) + '...'}
        </p>

        <p className={styles.more}>
          <Link to={`category/${strCategory}`} className={styles.goToCategory}>
            Watch category
          </Link>
        </p>
      </div>
    </div>
  );
};
