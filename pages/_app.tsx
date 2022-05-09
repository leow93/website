import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider, Theme } from '../hooks/useTheme';
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<Theme>('light');
  return (
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
  );
}

export default MyApp;
