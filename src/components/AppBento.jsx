import { useContext } from 'react'
import { Button, Popover } from '@radix-ui/themes'
import PropTypes from 'prop-types'
import { identifyTheme } from '../utils/Theme'
import { ThemeContext } from '../contexts/ThemeContext'

export default function AppBento({
  buttonColor,
  buttonText,
  className,
  codeSrc,
  content,
  icon,
  link,
  title,
  type = 'link', // 'link' or 'code', defaults to 'link'
}) {
  const { theme } = useContext(ThemeContext)

  return (
    <div
      className={`flex flex-col p-4 rounded-2xl border space-y-2 hover:scale-105 transition-[background,border,transform] duration-[1000ms,1000ms,500ms] ${className}`}
      style={{
        backgroundColor: identifyTheme(theme) === 'dark' && '#1a1a1a',
        borderColor: identifyTheme(theme) === 'dark' && '#2d2d2d',
      }}
    >
      <img src={icon} alt='icon' className='size-10' />
      <div className='flex flex-col'>
        <span>{title}</span>
        <span className='text-xs text-gray-500'>{content}</span>
      </div>
      {type === 'link' ? (
        <Button
          radius='full'
          className='!mt-auto !w-fit'
          style={{
            backgroundColor: buttonColor,
          }}
          onClick={() => window.open(link)}
        >
          {buttonText}
        </Button>
      ) : (
        <Popover.Root>
          <Popover.Trigger>
            <Button
              radius='full'
              className='!mt-auto !w-fit'
              style={{
                backgroundColor: buttonColor,
              }}
            >
              {buttonText}
            </Button>
          </Popover.Trigger>
          <Popover.Content>
            <img src={codeSrc} className='w-32' />
          </Popover.Content>
        </Popover.Root>
      )}
    </div>
  )
}

AppBento.propTypes = {
  buttonColor: PropTypes.string,
  buttonText: PropTypes.string,
  className: PropTypes.string,
  codeSrc: PropTypes.string,
  content: PropTypes.string,
  icon: PropTypes.string,
  link: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.oneOf(['link', 'code']),
}
