import {useState, createContext} from 'react'

const ThemeContext = createContext()

function ThemeContextProvider(props) {
    const [color, setColor] = useState('dark')

    const toggleTheme = () => {
        setColor(prevColor => prevColor === "dark" ? "light" : "dark")
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