import { useState, useContext, createContext, useEffect } from "react";

const FavContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites");
    if (storedFavs) setFavorites(JSON.parse(storedFavs));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (recipe) => {
    setFavorites((prev) => {
      const exists = prev.some((item) => item.id === recipe.id);

      if (exists) return prev;

      return [recipe, ...prev];
    });
  };

  const removeFromFavorites = (recipeId) => {
    setFavorites((prev) => prev.filter((recipe) => recipe.id !== recipeId));
  };

  const isFavorite = (recipeId) => {
    return favorites.some((recipe) => recipe.id === recipeId);
  };

  const clearAll = () => {
    setFavorites([]);
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    clearAll,
  };

  return <FavContext.Provider value={value}>{children}</FavContext.Provider>;
};

export const useFavorite = () => {
  return useContext(FavContext);
};
