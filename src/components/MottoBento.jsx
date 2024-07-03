import { useContext } from 'react'
import PropTypes from 'prop-types'
import { identifyTheme } from '../utils/Theme'
import { ThemeContext } from '../contexts/ThemeContext'

export default function MottoBento({
  className,
  content,
  onClick,
  source,
  style,
}) {
  const { theme } = useContext(ThemeContext)

  return (
    <div
      className={`flex flex-col items-left border rounded-2xl p-4 w-fit bg-orange-50 transition-[background,border] duration-1000 font-serif whitespace-normal ${className}`}
      onClick={() => {
        if (typeof onClick === 'function') {
          onClick()
        }
      }}
      style={{
        backgroundColor: identifyTheme(theme) === 'dark' && '#252525',
        borderColor: identifyTheme(theme) === 'dark' && '#2d2d2d',
        ...style,
      }}
    >
      <span className='!text-5xl font-bold'>{'"'}</span>
      <span className='text-3xl'>{content}</span>
      <span className='text-2xl text-gray-500 mt-auto'>{`― ${source}`}</span>
    </div>
  )
}

MottoBento.propTypes = {
  className: PropTypes.string,
  content: PropTypes.node,
  onClick: PropTypes.func,
  source: PropTypes.string,
  style: PropTypes.object,
}
