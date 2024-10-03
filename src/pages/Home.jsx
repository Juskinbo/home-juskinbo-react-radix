import { useEffect, useState } from 'react'
import axios from 'axios'
import { RoughNotation } from 'react-rough-notation'

import InfoBento from '../components/InfoBento'
import AppBento from '../components/AppBento'
import WeatherBento from '../components/WeatherBento'
import MottoBento from '../components/MottoBento'
import TimeBento from '../components/TimeBento'
import HangzhouDayImg from '../assets/hangzhou-day.webp'
import HangzhouNightImg from '../assets/hangzhou-night.webp'
import { appBentosProps } from '../config/site'

const Home = () => {
  const weatherApiUrl = import.meta.env.VITE_WEATHER_API_URL || ''
  const weatherApiKey = import.meta.env.VITE_WEATHER_API_KEY || ''
  const weatherApiLocation =
    import.meta.env.VITE_WEATHER_API_LOCATION || '101210101'
  const weatherApiLang = import.meta.env.VITE_WEATHER_API_LANG || 'en'
  const [weatherProps, setWeatherProps] = useState({
    feelsLike: '26',
    icon: '100',
    location:
      import.meta.env.VITE_WEATHER_API_LOCATION_NAME || 'Hangzhou, China',
    temperature: '26',
    weather: 'Sunny',
  })
  const [underline, setUnderline] = useState(false)

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await axios.get(weatherApiUrl, {
          params: {
            key: weatherApiKey,
            lang: weatherApiLang,
            location: weatherApiLocation,
          },
        })
        const { now } = response.data
        setWeatherProps(prev => ({
          ...prev,
          feelsLike: now.feelsLike,
          icon: now.icon,
          temperature: now.temp,
          weather: now.text,
        }))
      } catch (err) {
        console.log(err)
      }
    }
    fetchWeather()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className='pb-6 flex flex-col lg:flex-row items-center justify-center lg:space-x-12 space-y-12 lg:space-y-0 animate__animated animate__fadeInUp'>
      <InfoBento className='self-start' />
      <div className='space-y-12 animate__animated animate__fadeInUp'>
        <div className='space-y-4'>
          <span className='font-bold text-xl ml-4'>🙋‍♂️ About me</span>
          <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
            <MottoBento
              className='row-span-2'
              content={
                <p>
                  Life is like a box of chocolate,{' '}
                  <RoughNotation
                    animationDuration={1500}
                    color='#a52a2a'
                    type='underline'
                    multiline={true}
                    show={underline}
                  >
                    you never know what you&apos;re going to get.
                  </RoughNotation>
                </p>
              }
              onClick={() => {
                setUnderline(prev => (prev ? prev : !prev))
              }}
              source='Winston Groom'
              style={{
                width: '21.5rem',
                height: '21.5rem',
              }}
            />
            <TimeBento
              className='h-40'
              style={{
                width: '21.5rem',
              }}
            />
            <WeatherBento
              dayBgImg={HangzhouDayImg}
              nightBgImg={HangzhouNightImg}
              className='h-40'
              style={{
                width: '21.5rem',
              }}
              {...weatherProps}
            />
          </div>
        </div>
        <div className='space-y-4'>
          <span className='font-bold text-xl ml-4'>Where you can find me</span>
          <div className='grid grid-cols-2 xl:grid-cols-4 gap-6'>
            {appBentosProps.map((appBentoProps, index) => (
              <AppBento key={index} {...appBentoProps} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
