import React, { useState, useEffect } from 'react';
import Switch from '@mui/material/Switch';
import SunIcon from '@mui/icons-material/WbSunny';
import MoonIcon from '@mui/icons-material/NightsStay';

export function DarkmodeSwitch() {
 const [isDarkMode, setIsDarkMode] = useState(false);

 useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      setIsDarkMode(true);
    }
 }, []);

 const handleThemeChange = () => {
    if (isDarkMode) {
      localStorage.setItem('theme', 'light');
      window.document.documentElement.classList.remove('dark');
    } else {
      localStorage.setItem('theme', 'dark');
      window.document.documentElement.classList.add('dark');
    }
    setIsDarkMode(!isDarkMode);
 };

 return (
    <Switch
      checked={isDarkMode}
      onChange={handleThemeChange}
      checkedIcon={<MoonIcon sx={{color:'black', background:'grey', borderRadius:'50%'}} />}
      icon={<SunIcon  sx={{color:'orange', background:'white', borderRadius:'50%'}} />}
      edge="end"
    />
 );
}