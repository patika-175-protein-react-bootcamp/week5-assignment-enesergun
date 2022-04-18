import {useState, useEffect} from 'react'

const useTheme = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    const ThemeSwitcher = (mode) => {
        if (mode === 'light') {
            localStorage.setItem('theme', 'dark');
            setTheme('dark');
            
        } else {
            localStorage.setItem('theme', 'light');
            setTheme('light');            
            
        }
         
    }


    return [theme, ThemeSwitcher]
}


export default useTheme 