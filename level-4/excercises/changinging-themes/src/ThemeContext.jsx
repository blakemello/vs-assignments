import {useState, createContext} from 'react';

const ThemeContext = createContext()

function ThemeContextProvider(props) {
    const [color, setColor] = useState('Default')

    const toggleTheme = () => {
        setColor(prevColor => prevColor === "Default" ? "Light" : "Default")
    }

    const handleTheme = (e) => {
        setColor(e.target.value)
    }

    return(
        <ThemeContext.Provider value={{
            color: color, 
            toggleTheme: toggleTheme,
            handleTheme: handleTheme
        }}>
           {props.children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeContextProvider}