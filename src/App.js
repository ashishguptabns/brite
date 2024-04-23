import './App.css';
import { createContext } from 'react'
import { Home } from './pages/home/home';
import { useState } from 'react'

export const ThemeContext = createContext('light');

function App() {

  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }
  return (
    <ThemeContext.Provider value={theme}>
      <Home onToggleTheme={toggleTheme} />
    </ThemeContext.Provider>
  );
}

export default App;
