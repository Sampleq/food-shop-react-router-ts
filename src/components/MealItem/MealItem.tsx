import type { Meal } from '@/types';
import styles from './MealItem.module.scss';
import { Link } from 'react-router-dom';
import type path from 'path';

interface MealItemProps {
  meal: Meal;
}

export const MealItem = ({ meal }: MealItemProps) => {
  const { idMeal, strMeal, strMealThumb } = meal;

  return (
    <div className={styles.mealItem}>
      <img
        src={
          !strMealThumb
            ? `https://images.placeholders.dev/?width=300&height=300&text=${strMeal}&textWrap=true&fontSize=36`
            : strMealThumb
        }
        alt={strMeal}
      />

      <div className={styles.content}>
        <h4 className={styles.title}>{strMeal}</h4>

        <p className={styles.more}>
          <Link to={`/recipe/${idMeal}`} className={styles.goToCategory}>
            Watch recipe
          </Link>
        </p>
      </div>
    </div>
  );
};
