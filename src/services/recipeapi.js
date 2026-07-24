const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.spoonacular.com";

//function to return random recipes at start
export const getRandomRecipes = async () => {
  const url = `${BASE_URL}/recipes/random?apiKey=${API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.recipes;
  } catch (error) {
    console.error("Failed to fetch random recipes:", error);
  }
};

//function to return related recipes using recipe id
export const relatedRecipes = async (recipeId, number) => {
  const url = `${BASE_URL}/recipes/${recipeId}/similar?apiKey=${API_KEY}&number=${number}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data; // Returns an array of similar recipe objects containing id, title, readyInMinutes, servings, and sourceUrl
  } catch (error) {
    console.error("Failed to fetch related recipes:", error);
  }
};

//function to return recipes using filters and query name
export const fetchRecipes = async (filters = {}, number = 10) => {
  const apiParams = {
    apiKey: API_KEY,
    number: number,
  };

  // 1. Text Query
  if (filters.query) {
    apiParams.query = filters.query;
  }

  // 2. Meal Type (Map "Main Meal" -> "main course")
  if (filters.mealType && filters.mealType !== "(All Types)") {
    apiParams.type =
      filters.mealType === "Main Meal"
        ? "main course"
        : filters.mealType.toLowerCase();
  }

  // 3. Cuisine
  if (filters.cuisine && filters.cuisine !== "(All Cuisines)") {
    apiParams.cuisine = filters.cuisine;
  }

  // 4. Diet ("Gluten-Free" -> "gluten free")
  if (filters.diet && filters.diet !== "(All Diets)") {
    apiParams.diet = filters.diet.toLowerCase().replace("-", " ");
  }

  // 5. Cooking Time
  if (filters.cookingTime && filters.cookingTime !== "(Any Time)") {
    if (filters.cookingTime === "Below 20 Minutes") {
      apiParams.maxReadyTime = 20;
    } else if (filters.cookingTime === "20 - 45 Minutes") {
      apiParams.maxReadyTime = 45;
    } else if (filters.cookingTime === "Over 45 Minutes") {
      apiParams.minReadyTime = 45;
    }
  }

  const params = new URLSearchParams(apiParams);

  try {
    const response = await fetch(`${BASE_URL}/recipes/complexSearch?${params}`);

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error(error);
    return [];
  }
};
