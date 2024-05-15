import { useEffect } from 'react'
import { Flex } from '@radix-ui/themes'
import styles from '../styles/animation.module.css'
import PropTypes from 'prop-types'

export default function NavBar({ className }) {
  useEffect(() => {}, [])
  return (
    <Flex
      className={`h-14 items-center justify-center rounded-full p-4 backdrop-filter backdrop-blur-lg ${className}`}
    >
      <svg
        className={`${styles.logo} stroke-current`}
        width='107'
        height='39'
        viewBox='0 0 107 39'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M6.69445 22.2329C4.52778 20.7329 5.49445 14.8329 26.6944 3.23295C27.8944 -2.76705 23.5278 4.73295 21.1944 9.23295C17.3611 19.5663 8.29444 39.8329 2.69444 38.2329C-4.30556 36.2329 11.6944 17.7329 26.6944 20.2329C16.1944 37.2329 32.6944 24.7329 34.1944 18.7329C21.1944 35.2329 41.6944 30.2329 49.1944 17.2329C36.6944 19.2329 47 19.5 47.1944 21.2329C49.1944 27.2329 37.1944 32.2329 37.1944 25.2329C37.1944 19.6329 52.8611 13 60.6944 10L51.6944 28.5C51.746 24.5851 54.7011 17.1454 59.5 17.5C61.4556 17.6857 63.5737 18.9204 55 22.5C56.3737 29.23 59.9354 31.5719 69.1944 20.7329C58.1944 34.2329 75.6944 28.2329 76.6944 20.7329C74.2944 26.3329 73.2603 28.3333 73.0937 28.5C73.0937 22.4223 83.8992 16.6201 82.2307 21C79.0307 29.4 81.8315 29.2329 85.8315 26.2329C85.8315 26.7329 85.8944 28 86.6944 28C87.4944 28 92.8611 16.0663 95.6944 10.2329L86.6944 27.7329C87.5 23.5 95.4632 17.3679 95 22C94.5 27 90 28.5 87.5 28C92.1667 25.3333 101.1 20.0294 103.5 19.2294C96.7 25.6294 99.7082 28.4062 101.5 28C104.548 27.309 108.5 17 103 19.4239'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </Flex>
  )
}

NavBar.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
}
