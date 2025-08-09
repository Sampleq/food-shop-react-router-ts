import { useNavigate, useParams } from 'react-router-dom';
import styles from './Recipe.module.scss';
import { useEffect, useState } from 'react';
import type { MealDetailedInfo, NumericString } from '@/types';
import { getMealById } from '@/api';
import { Preloader } from '@/components/Preloader';

interface RecipeProps {}

type RecipeParams = {
  mealId: NumericString;
};
export const Recipe = ({}: RecipeProps) => {
  const params = useParams<RecipeParams>();
  const { mealId } = params;

  const navigate = useNavigate();

  const [recipe, setRecipe] = useState<MealDetailedInfo>();

  const {
    strMealThumb,
    strMeal,
    strCategory,
    strArea,
    strInstructions,
    strYoutube,
  } = (recipe as MealDetailedInfo) || {};

  useEffect(() => {
    getMealById(mealId!).then((meal) => setRecipe(meal));
  }, [mealId]);

  return (
    <>
      {recipe ? (
        <div className={styles.recipe}>
          <img src={strMealThumb} alt={strMeal} />
          <h2>{strMeal}</h2>
          <h4>Category: {strCategory}</h4>
          {strArea && <h4>Area: {strArea}</h4>}
          <p>{strInstructions}</p>

          <table>
            <thead>
              <tr>
                <th>Ingredient</th>
                <th>Measure</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(recipe).map((key) => {
                if (key.includes('strIngredient') && recipe[key]) {
                  return (
                    <tr>
                      <td>{recipe[key]}</td>
                      <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                    </tr>
                  );
                }

                return null;
              })}
            </tbody>
          </table>

          {strYoutube && (
            <iframe
              title={strMeal}
              width='560'
              height='315'
              src={`https://www.youtube.com/embed/${strYoutube.slice(-11)}`}
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
              frameBorder='0'
            />
          )}
          {/* {JSON.stringify(recipe)} */}
        </div>
      ) : (
        <Preloader />
      )}

      <button className={styles.btn + ' btn'} onClick={() => navigate(-1)}>
        ← Go Back
      </button>
    </>
  );
};
