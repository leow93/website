import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider, Theme } from '../hooks/useTheme';
import Script from 'next/script';
import { useState, useCallback, useEffect } from 'react';

const useLocalStorageTheme = () => {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    if (window.localStorage.theme) {
      setTheme(window.localStorage.theme);
    }
  }, []);

  const updateTheme = useCallback((theme: Theme) => {
    localStorage.theme = theme;
    setTheme(theme);
  }, []);

  return [theme, updateTheme] as const;
};

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useLocalStorageTheme();
  return (
    <>
      <Script strategy="beforeInteractive" src="scripts/theme.js" />
      <ThemeProvider
        value={{
          theme,
          setTheme,
        }}
      >
        <div className={theme}>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
