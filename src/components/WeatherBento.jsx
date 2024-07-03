import { useContext } from 'react'
import PropTypes from 'prop-types'
import { identifyTheme } from '../utils/Theme'
import { ThemeContext } from '../contexts/ThemeContext'

export default function WeatherBento({
  className,
  dayBgImg,
  feelsLike,
  icon,
  location,
  nightBgImg,
  style,
  temperature,
  weather,
}) {
  const { theme } = useContext(ThemeContext)

  return (
    <div
      className={`flex items-center border rounded-2xl p-4 space-x-8 w-fit bg-cover bg-no-repeat bg-center transition-[background,border] duration-1000 bg-amber-50 ${className}`}
      style={{
        backgroundImage: `url(${
          identifyTheme(theme) === 'light' ? dayBgImg : nightBgImg
        })`,
        backgroundColor: identifyTheme(theme) === 'dark' && '#1a1a1a',
        borderColor: identifyTheme(theme) === 'dark' && '#2d2d2d',
        ...style,
      }}
    >
      <div className='flex flex-col items-center justify-center space-y-2'>
        <i className={`text-7xl qi-${icon}`} />
        <span className='font-bold'>{weather}</span>
      </div>
      <div className='flex flex-col space-y-2'>
        <span className='text-3xl font-bold'>{temperature}°C</span>
        <span className='text-lg font-bold'>feels link: {feelsLike}°C</span>
        <span className='text-lg truncate'>{location}</span>
      </div>
    </div>
  )
}

WeatherBento.propTypes = {
  className: PropTypes.string,
  dayBgImg: PropTypes.string,
  feelsLike: PropTypes.string,
  icon: PropTypes.string,
  location: PropTypes.string,
  nightBgImg: PropTypes.string,
  style: PropTypes.object,
  temperature: PropTypes.string,
  weather: PropTypes.string,
}
