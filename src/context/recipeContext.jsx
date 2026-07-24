import { useState, useContext, createContext, useEffect, Children } from "react";


export const ThemeProvider = ({Children}) => {
  <ThemeContext.Provider value = {theme}>
    {Children}
  </ThemeContext.Provider>
}