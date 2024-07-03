import { useContext, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import APlayer from 'aplayer'
import { identifyTheme } from '../utils/Theme'
import { ThemeContext } from '../contexts/ThemeContext'
import 'APlayer/dist/APlayer.min.css'
import '../styles/aplayer.css'

export default function PlayerBento({ audioList, className, style }) {
  const { theme } = useContext(ThemeContext)
  const audioRef = useRef(null)

  useEffect(() => {
    new APlayer({
      container: audioRef.current,
      audio: audioList,
    })
  }, [audioList])

  return (
    <div
      className={`flex flex-col items-left border rounded-2xl m-0 p-4 w-fit bg-orange-50 transition-[background,border] duration-1000 font-serif whitespace-normal shadow-none ${className}`}
      ref={audioRef}
      style={{
        backgroundColor: identifyTheme(theme) === 'dark' && '#252525',
        borderColor: identifyTheme(theme) === 'dark' && '#2d2d2d',
        ...style,
      }}
    ></div>
  )
}

PlayerBento.propTypes = {
  audioList: PropTypes.array,
  className: PropTypes.string,
  style: PropTypes.object,
}
