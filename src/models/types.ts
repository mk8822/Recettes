export interface Ingredient {
  name: string;
  value: number;
  image: string;
  unit?: string;
}
export interface Recette {
  ingredient: Ingredient[];
}
