import { useState, useEffect } from 'react'
import { useMediaQuery } from "react-responsive";

export const useTheme = () => {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        if (theme === 'dark') {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [theme]);
    useMediaQuery(
        {
            query: "(prefers-color-scheme: dark)",
        },
        undefined,
        (isSystemDark) => setTheme(_ => isSystemDark ? 'dark' : 'light')
    );

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return [theme, toggleTheme]
}