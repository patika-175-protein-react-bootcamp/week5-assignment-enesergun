import {useState, useEffect} from 'react'

const useTheme = () => {
    const [theme, setTheme] = useState('light');

    const ThemeSwitcher = (mode) => {
        if (mode === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
        
    }


    return [theme, ThemeSwitcher]
}


export default useTheme 