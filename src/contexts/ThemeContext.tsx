import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';
export type AccentColor = 'blue' | 'red' | 'emerald' | 'amber' | 'violet';
export type AppScale = 1 | 2 | 3 | 4 | 5;

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  accentColor: AccentColor;
  setAccentColor: (color: AccentColor) => void;
  appScale: AppScale;
  setAppScale: (scale: AppScale) => void;
  borderRadius: number;
  setBorderRadius: (radius: number) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [accentColor, setAccentColor] = useState<AccentColor>('blue');
  const [appScale, setAppScaleInternal] = useState<AppScale>(3);
  const [borderRadius, setBorderRadiusInternal] = useState<number>(16);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    if (storedTheme) {
      setTheme(storedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      setTheme('light');
    }

    const storedAccent = localStorage.getItem('accent') as AccentColor | null;
    if (storedAccent) {
      setAccentColor(storedAccent);
    }

    const storedScale = localStorage.getItem('appScale');
    if (storedScale) {
      setAppScaleInternal(Number(storedScale) as AppScale);
    }

    const storedRadius = localStorage.getItem('borderRadius');
    if (storedRadius) {
      setBorderRadiusInternal(Number(storedRadius));
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('data-accent', accentColor);
    localStorage.setItem('accent', accentColor);
  }, [accentColor]);

  useEffect(() => {
    const sizes = { 1: '12.8px', 2: '14.4px', 3: '16px', 4: '17.6px', 5: '19.2px' };
    document.documentElement.style.fontSize = sizes[appScale];
    localStorage.setItem('appScale', appScale.toString());
  }, [appScale]);

  useEffect(() => {
    document.documentElement.style.setProperty('--radius-base', `${borderRadius}px`);
    localStorage.setItem('borderRadius', borderRadius.toString());
  }, [borderRadius]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      toggleTheme, 
      accentColor, 
      setAccentColor, 
      appScale, 
      setAppScale: setAppScaleInternal,
      borderRadius,
      setBorderRadius: setBorderRadiusInternal
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
