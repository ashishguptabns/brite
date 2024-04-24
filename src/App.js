import './App.css';
import { createContext } from 'react'
import { Home } from './pages/home/home';
import { useTheme } from './hooks/use-theme';
import { createTheme, ThemeProvider } from '@mui/material';

export const ThemeContext = createContext('light');

function App() {

  const [theme, toggleTheme] = useTheme()
  const muiTheme = createTheme({
    palette: {
      mode: theme,
    },
  });
  return (
    <ThemeProvider theme={muiTheme}>
      <ThemeContext.Provider value={theme}>
        <Home onToggleTheme={toggleTheme} />
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
