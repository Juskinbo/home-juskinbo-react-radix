import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Theme } from '@radix-ui/themes'
import { BlurryGradient, COLORS } from 'react-blurry-gradient'
import NavBar from './components/NavBar'
import { ThemeContext } from './contexts/ThemeContext'
import { identifyTheme } from './utils/Theme'

const themes = ['default', 'light', 'dark']

export default function App() {
  const [theme, setTheme] = useState(
    themes.includes(localStorage.getItem('theme'))
      ? localStorage.getItem('theme')
      : 'default'
  )

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Theme
        appearance={identifyTheme(theme)}
        className='transition-all duration-1000 flex justify-center'
      >
        <NavBar className='fixed top-0 left-0 m-2 shadow w-[calc(100%-1rem)] lg:m-6 lg:w-[calc(100%-3rem)] z-10 animate__animated animate__fadeInDown' />
        <div className='max-w-[1536px] w-full flex justify-center items-center mt-28'>
          <Outlet />
        </div>
        <div className='fixed w-screen h-screen -z-10'>
          <BlurryGradient colors={COLORS.BLUE} blur='1000px' />
        </div>
      </Theme>
    </ThemeContext.Provider>
  )
}
