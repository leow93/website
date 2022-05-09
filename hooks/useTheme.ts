import React, { useContext, useState } from 'react';

export type Theme = 'light' | 'dark';
interface ThemeContext {
  theme: Theme;
  setTheme: (t: Theme) => void;
}

const initialValue: ThemeContext = {
  theme: 'light',
  setTheme: () => {},
};

export const ThemeContext = React.createContext(initialValue);
export const ThemeProvider = ThemeContext.Provider;
export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return [theme, setTheme] as const;
};
