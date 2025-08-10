import { useNavigate, useParams } from 'react-router-dom';
import styles from './CategoryDetailed.module.scss';
import { useEffect, useState } from 'react';
import type { Meal } from '@/types';
import { getFilteredByCategory } from '@/api';
import { Preloader } from '@/components/Preloader';
import { MealList } from '@/components/MealList';

interface CategoryDetailedProps {}

type CatDetParams = {
  categoryName: string;
};

export const CategoryDetailed = ({}: CategoryDetailedProps) => {
  const params = useParams<CatDetParams>();
  const { categoryName } = params;

  const [meals, setMeals] = useState<Meal[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    getFilteredByCategory(categoryName!).then((meals) => setMeals(meals));
  }, [categoryName]);

  return (
    <div className={styles.categoryDetailed}>
      <button className={styles.btn + ' btn'} onClick={() => navigate(-1)}>
        ← Go Back
      </button>
      {meals.length ? <MealList meals={meals} /> : <Preloader />}
    </div>
  );
};

export default CategoryDetailed;
