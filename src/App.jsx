import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Theme, ThemePanel } from '@radix-ui/themes'
import NavBar from './components/NavBar'
import { ThemeContext } from './contexts/ThemeContext'

const themes = ['default', 'light', 'dark']

export default function App() {
  const [theme, setTheme] = useState(
    themes.includes(localStorage.getItem('theme'))
      ? localStorage.getItem('theme')
      : 'default'
  )

  const identifyTheme = (theme) => {
    if (theme === 'default') {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)')
      return isDark.matches ? 'dark' : 'light'
    } else {
      return theme
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Theme appearance={identifyTheme(theme)}>
        <NavBar className='fixed mx-6 my-4 w-[calc(100%-3rem)] z-10' />
        <Outlet />
      </Theme>
      {/* <ThemePanel /> */}
    </ThemeContext.Provider>
  )
}
