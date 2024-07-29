const { createContext, useState, useContext, useEffect } = require("react");

const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');
  
  useEffect(() => {
    document.body.classList.add(theme);
    window.localStorage.setItem("theme", theme);

    return () => document.body.classList.remove(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const themeContext = useContext(ThemeContext);
  if(!themeContext) throw new Error('Context 내부에서 사용해야 합니다.');
  return themeContext;
}