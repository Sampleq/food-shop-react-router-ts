export type NumericString = `${number}`;
// const ns: NumericString = '3'; // OK
// const ns: NumericString = 3; // Error - Type '3' is not assignable to type '`${number}`'.
// const ns: NumericString = 'sdf'; // Error - Type '"sdf"' is not assignable to type '`${number}`'.

export interface Category {
  idCategory: NumericString;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

export interface Meal {
  strMeal: string;
  strMealThumb: string;
  idMeal: NumericString;
}

export interface MealDetailedInfo {
  idMeal: NumericString;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string;
  strYoutube: string;
  dateModified: null;

  [key: string]: string | null;
}
