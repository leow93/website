import { useState, useCallback, useEffect } from 'react';

type StoredTheme = 'light' | 'dark' | string | undefined;
type Theme = 'light' | 'dark';

const useTheme = () => {
  const [theme, _setTheme] = useState<Theme>();
  const updateTheme = useCallback(
    (t: Theme) => {
      if (theme === 'light' && t === 'dark') {
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add('dark');
      }

      if (theme === 'dark' && t === 'light') {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
      }

      _setTheme(t);
      localStorage.theme = t;
    },
    [theme],
  );

  useEffect(() => {
    const initialTheme: StoredTheme = localStorage.theme;
    switch (initialTheme) {
      case 'dark':
        return updateTheme('dark');
      case 'light':
      case undefined:
        return updateTheme('light');
    }
  }, []);

  return [theme, updateTheme] as const;
};

export const ThemeToggle = () => {
  const [theme, setTheme] = useTheme();

  return theme === 'light' || theme === undefined ? (
    <svg
      onClick={() => setTheme('dark')}
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 cursor-pointer"
      fill="none"
      viewBox="0 0 24 24"
      stroke="#2563EB"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  ) : (
    <svg
      onClick={() => setTheme('light')}
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 cursor-pointer"
      fill="none"
      viewBox="0 0 24 24"
      stroke="white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      />
    </svg>
  );
};
