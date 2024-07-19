import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './globals.css'
import {Switch} from "@/components/ui/switch.tsx";

const Switcher = () => {
    type Themes = "dark" | "light"
    const [theme, setTheme] = useState<Themes>()
    const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
        document.documentElement.classList.toggle('light', theme === 'light');
    }, [theme]);

    return (
        <Switch onClick={toggleTheme}>Toggle Theme</Switch>
    );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Switcher/>
      <div className={'w-full flex h-full justify-center items-center'}>
          <App/>
      </div>
  </React.StrictMode>,
)
