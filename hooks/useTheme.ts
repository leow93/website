import React, { useState } from 'react';

type Theme = 'light' | 'dark';
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
  return useState<Theme>('light');
};
