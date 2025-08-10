import { API_URL } from './config';
import { mockCategories } from './mockdata';
import type { Category, Meal, MealDetailedInfo } from './types';

export { API_URL } from './config';

// Lookup full meal details by id
// www.themealdb.com/api/json/v1/1/lookup.php?i=52772
export async function getMealById(mealId: Category['idCategory']) {
  try {
    // const response = await fetch(API_URL + 'lookup.php?i=' + mealId); // NOT OK - пропустит URL без https://
    const response = await fetch(new URL('lookup.php?i=' + mealId, API_URL)); // OK
    const meal: MealDetailedInfo = (await response.json()).meals[0];
    return meal;
  } catch (error) {
    alert((error as Error).message);
    return;
  }
}

// List all meal categories
// www.themealdb.com/api/json/v1/1/categories.php
export async function getAllCathegories() {
  try {
    const response = await fetch(new URL('categories.php', API_URL).toString()); // OK

    const data = await response.json();
    const categories: Category[] = data.categories ?? [];

    return categories;
  } catch (error) {
    alert(
      `${
        (error as Error).message
      }\n\nTry again with VPN on.\n\n Using local mock-data.`
    );

    return mockCategories.categories;
  }
}

// Filter by Category
// www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
export async function getFilteredByCategory(
  categoryName: Category['strCategory']
) {
  try {
    const response = await fetch(
      new URL('filter.php?c=' + categoryName, API_URL).toString()
    ); // OK
    const data = await response.json();

    const filteredByCategory: Meal[] = data.meals ?? [];

    return filteredByCategory;
  } catch (error) {
    alert(`${(error as Error).message}\n\nTry again with VPN on.`);
    return [];
  }
}
