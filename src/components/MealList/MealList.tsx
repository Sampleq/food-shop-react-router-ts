import type { Meal } from '@/types';
import styles from './MealList.module.scss';
import { MealItem } from '../MealItem';
import { useNavigate } from 'react-router-dom';

interface MealListProps {
  meals: Meal[];
}

export const MealList = ({ meals }: MealListProps) => {
  const navigate = useNavigate();
  return (
    <>
      <button className={styles.btn + ' btn'} onClick={() => navigate(-1)}>
        ← Go Back
      </button>
      <div className={styles.mealList}>
        {meals.map((meal) => (
          <MealItem key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </>
  );
};
