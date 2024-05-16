'use client'
 
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState(
    typeof window !== 'undefined' && localStorage.theme ? localStorage.theme : 'dark'
  )

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    localStorage.setItem('theme', theme);
  }, [theme])

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

  return (
    <button onClick={toggleTheme}>
      <Image src="/theme_icon.svg" alt="theme" width={40} height={40} className="invert dark:invert-0"/>
    </button>
  )
}
