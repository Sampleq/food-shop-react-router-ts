import type { Meal } from '@/types';
import styles from './MealList.module.scss';
import { MealItem } from '../MealItem';

interface MealListProps {
  meals: Meal[];
}

export const MealList = ({ meals }: MealListProps) => {
  return (
    <>
      <div className={styles.mealList}>
        {meals.map((meal) => (
          <MealItem key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </>
  );
};
