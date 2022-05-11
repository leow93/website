function once(fn) {
  let run = false;
  return function (...args) {
    if (run) {
      return;
    }
    const result = fn(...args);
    run = true;
    return result;
  };
}

function bootstrapTheme() {
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

once(bootstrapTheme)();
