import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider, useTheme } from '../hooks/useTheme';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useTheme();
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
