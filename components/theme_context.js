import { useState, createContext } from "react";

export const ThemeContext = createContext({
    theme: '',
    setTheme: () => {},
})

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        const isCurrentLight = theme === 'light';
        setTheme(isCurrentLight ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={`theme-${theme} overflow-hidden`}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}