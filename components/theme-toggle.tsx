import nightwind from 'nightwind/helper';

const toggleTheme = () => nightwind.toggle();

export const ThemeToggle = () => {
  return (
    <svg
      onClick={toggleTheme}
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 cursor-pointer stroke-blue-500 hover:stroke-blue-600 dark:stroke-neutral-200 dark:hover:stroke-neutral-50"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  );
};
