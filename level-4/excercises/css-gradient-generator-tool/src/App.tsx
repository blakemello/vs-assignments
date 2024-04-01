import React, { useState, useLayoutEffect } from 'react';
import Header from '@components/Header';
import { ThemeMode, themeModeLocalStorageKey } from '@shared/constants';

const App: React.FC = () => {
  const [activeThemeMode, setActiveThemeMode] = useState<ThemeMode | null>(null);

  useLayoutEffect(() => {
    const themeFromLocalStorage = localStorage.getItem(
      themeModeLocalStorageKey
    );
    /* ... */
    setThemeMode(themeFromLocalStorage || themeFromSystemPreference);
  }, []);

  useLayoutEffect(() => {
    /* ... */
    const themeFromSystemPreference = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches
      ? ThemeMode.DARK
      : ThemeMode.LIGHT;
    /* ... */
  }, []);

  const setThemeMode = (modeName) => {
    document.documentElement.setAttribute('data-theme', modeName);
    localStorage.setItem(themeModeLocalStorageKey, modeName);

    setActiveThemeMode(modeName);
  };
 /* ... */
  const toggleThemeMode = () => {
    return setThemeMode(
      document.documentElement.getAttribute('data-theme') === ThemeMode.LIGHT
        ? ThemeMode.DARK
        : ThemeMode.LIGHT
    );
  };

  return (
    <main>
      <Header
        activeThemeMode={activeThemeMode}
        toggleThemeMode={toggleThemeMode}
      />
    </main>
  );
};

export default App;