import { useContext } from 'react'
import { Text, Avatar, Link as RadixLink, Em } from '@radix-ui/themes'
import PropTypes from 'prop-types'
import { ThemeContext } from '../contexts/ThemeContext'
import { identifyTheme } from '../utils/Theme'
import avatar from '../assets/avatar.png'
import styles from '../styles/backgroundAnimation.module.css'

export default function InfoBento({ className }) {
  const { theme } = useContext(ThemeContext)
  return (
    <>
      <div
        className={`${
          identifyTheme(theme) === 'light'
            ? styles['info-card']
            : styles['dark-info-card']
        } h-fit rounded-2xl flex items-center justify-center px-4 py-8 w-[21.5rem] lg:px-8 lg:py-12 lg:w-fit transition-[padding,background] duration-1000 drop-shadow ${className}`}
      >
        <div className='flex flex-col space-y-4 lg:space-y-8'>
          <Avatar
            src={avatar}
            radius='full'
            className='!size-32 lg:!size-44'
          ></Avatar>
          <div className='flex flex-col text-3xl lg:text-5xl space-y-2 lg:space-y-4'>
            <Text weight='bold'>Juskinbo 💻</Text>
            <div className='flex flex-col text-base lg:text-xl'>
              <Text>Front-end Developer</Text>
              <Text>Studying in 🏫 HZNU</Text>
            </div>
            <div className='flex flex-col text-base lg:text-xl'>
              <Text>Crazy about Music 🎧 Food 🍲 & Traveling 🌊</Text>
            </div>
            <div className='flex text-base lg:text-xl space-x-2'>
              <Text>📬 Contact me: </Text>
              <RadixLink
                href='mailto:hi@juskinbo.dev'
                highContrast
                underline='hover'
              >
                <Em>hi@juskinbo.dev</Em>
              </RadixLink>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

InfoBento.propTypes = {
  className: PropTypes.string,
}
