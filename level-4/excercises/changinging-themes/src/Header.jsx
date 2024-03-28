import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export default function Header(props) {

    const {color} = useContext(ThemeContext)

    return(
        <div className={`${color}-Header`}>
            <h1>Home</h1>
            <h1>About</h1>
            <h1>Nav</h1>
        </div>
    )
}