const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.spoonacular.com";

// function to return random recipes at start
export const getRandomRecipes = async (number = 10) => {
  const url = `${BASE_URL}/recipes/random?apiKey=${API_KEY}&number=${number}`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    return data.recipes || [];
  } catch (error) {
    console.error("Failed to fetch random recipes:", error);
    return [];
  }
};

// function to return related recipes using recipe id
export const relatedRecipes = async (recipeId, number = 3) => {
  const url = `${BASE_URL}/recipes/${recipeId}/similar?apiKey=${API_KEY}&number=${number}`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch related recipes:", error);
    return [];
  }
};

// function to return recipes using filters and query name
export const fetchRecipes = async (filters = {}, number = 10) => {
  const apiParams = {
    apiKey: API_KEY,
    number: number,
  };

  if (filters.query) apiParams.query = filters.query;

  if (filters.mealType && filters.mealType !== "All Types") {
    apiParams.type =
      filters.mealType === "Main Meal"
        ? "main course"
        : filters.mealType.toLowerCase();
  }

  if (filters.cuisine && filters.cuisine !== "All Cuisines")
    apiParams.cuisine = filters.cuisine;

  if (filters.diet && filters.diet !== "All Diets")
    apiParams.diet = filters.diet.toLowerCase().replace("-", " ");

  if (filters.cookingTime && filters.cookingTime !== "Any Time") {
    if (filters.cookingTime === "Below 20 Minutes") apiParams.maxReadyTime = 20;
    else if (filters.cookingTime === "20 - 45 Minutes") apiParams.maxReadyTime = 45;
    else if (filters.cookingTime === "Over 45 Minutes") apiParams.minReadyTime = 45;
  }

  const params = new URLSearchParams(apiParams);
  try {
    const response = await fetch(`${BASE_URL}/recipes/complexSearch?${params}`);
    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Failed to fetch recipes:", error);
    return [];
  }
};

export const recipeDetail = async (recipeId) => {
  const url = `${BASE_URL}/recipes/${recipeId}/information?includeNutrition=true&apiKey=${API_KEY}`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch recipe details:", error);
    return null;
  }
};
