import { createContext, useContext, useEffect, useState } from "react";

const RecentContext = createContext();

export const useRecent = () => useContext(RecentContext);

export const RecentProvider = ({ children }) => {
  const [recents, setRecents] = useState(() => {
    const storedRecs = localStorage.getItem("recents");
    return storedRecs ? JSON.parse(storedRecs) : [];
  });

  useEffect(() => {
    localStorage.setItem("recents", JSON.stringify(recents));
  }, [recents]);

  const addRecent = (recipe) => {
    setRecents((prev) => {
      const filtered = prev.filter((item) => item.id !== recipe.id);
      return [recipe, ...filtered].slice(0, 10);
    });
  };

  const clearAll = () => {
    setRecents([]);
  };

  return (
    <RecentContext.Provider
      value={{
        recents,
        addRecent,
        clearAll,
      }}
    >
      {children}
    </RecentContext.Provider>
  );
};
