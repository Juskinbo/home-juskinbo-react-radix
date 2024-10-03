import { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { identifyTheme } from '../utils/Theme'
import { ThemeContext } from '../contexts/ThemeContext'

const options = { timeZone: 'Asia/Shanghai', hour12: true }

export default function TimeBento({ className, style }) {
  const [time, setTime] = useState(new Date())
  const { theme } = useContext(ThemeContext)

  const dayOrNight = () =>
    new Date().getHours() > 6 && new Date().getHours() < 18

  const getDayWithSuffix = time => {
    const beforeDay = time.split(' ').slice(0, 2).join(' ')
    const day = parseInt(time.split(' ')[2])
    if (day > 3 && day < 21) return `${beforeDay} ${day}th` // 11th to 19th
    switch (day % 10) {
      case 1:
        return `${beforeDay} ${day}st`
      case 2:
        return `${beforeDay} ${day}nd`
      case 3:
        return `${beforeDay} ${day}rd`
      default:
        return `${beforeDay} ${day}th`
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div
      className={`group border rounded-2xl p-4 w-fit flex text-white justify-center relative flex-col transition-all duration-1000 bg-[${
        dayOrNight() ? '#fde6a5' : '#110486'
      }] bg-gradient-to-r from-[${dayOrNight() ? '#e9ba6c' : '#141e30'}] to-[${
        dayOrNight() ? '#f7cf7c' : '#243b55'
      }] ${className}`}
      style={{
        borderColor: identifyTheme(theme) === 'dark' && '#2d2d2d',
        ...style,
      }}
    >
      <p className='text-5xl font-semibold'>
        <span>
          {
            time
              .toLocaleString('en-US', {
                ...options,
                hour: '2-digit',
                minute: '2-digit',
              })
              .split(' ')[0]
          }
        </span>
        <span className='text-base ml-1'>
          {
            time
              .toLocaleString('en-US', {
                ...options,
                hour: '2-digit',
                minute: '2-digit',
              })
              .split(' ')[1]
          }
        </span>
      </p>
      <p className='text-lg font-medium'>
        {getDayWithSuffix(
          time.toLocaleString('en-US', {
            ...options,
            month: 'short',
            day: 'numeric',
            weekday: 'long',
          })
        )}
      </p>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        width='1em'
        height='1em'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='text-xl absolute right-4 top-4 transition-all duration-300 ease-in-out group-hover:text-2xl'
      >
        {dayOrNight() ? (
          <>
            <circle cx='12' cy='12' r='4' />
            <path d='M12 2v2' />
            <path d='M12 20v2' />
            <path d='m4.93 4.93 1.41 1.41' />
            <path d='m17.66 17.66 1.41 1.41' />
            <path d='M2 12h2' />
            <path d='M20 12h2' />
            <path d='m6.34 17.66-1.41 1.41' />
            <path d='m19.07 4.93-1.41 1.41' />
          </>
        ) : (
          <>
            <path d='M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9' />
            <path d='M20 3v4' />
            <path d='M22 5h-4' />
          </>
        )}
      </svg>
    </div>
  )
}

TimeBento.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
}
