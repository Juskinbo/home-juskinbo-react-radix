import { Text, Flex, Avatar, Link as RadixLink, Em } from '@radix-ui/themes'
import PropTypes from 'prop-types'
import avatar from '../assets/avatar.png'

export default function InfoCard({ className }) {
  return (
    <>
      <Flex
        className={`h-fit rounded-2xl items-center justify-center px-6 py-10 sm:px-8 sm:py-12 ${className}`}
        style={{
          // backgroundImage:
          //   'linear-gradient(45deg, #b7efff, #b1f3fc, #aef7f6, #b0fbed, #b7fde3, #c2ffd7, #d0ffca, #e2ffbf)',
          backgroundImage:
            'linear-gradient(45deg, #31558a, #005f92, #006994, #007290, #007987, #00807a, #00866b, #2b8a5a)',
        }}
      >
        <Flex direction='column' className='space-y-4 sm:space-y-8'>
          <Avatar
            src={avatar}
            radius='full'
            className='!size-32 sm:!size-44'
          ></Avatar>
          <Flex
            direction='column'
            className='text-3xl sm:text-5xl space-y-2 sm:space-y-4 truncate'
          >
            <Text weight='bold'>Juskinbo 💻</Text>
            <Flex direction='column' className='text-base sm:text-xl'>
              <Text>Front-end Developer</Text>
              <Text>Studying in 🏫 HZNU</Text>
            </Flex>
            <Flex direction='column' className='text-base sm:text-xl'>
              <Text>Crazy about Music 🎧 Food 🍲 & Traveling 🌊</Text>
            </Flex>
            <Flex className='text-base sm:text-xl space-x-2'>
              <Text>📬 Contact me: </Text>
              <RadixLink
                href='mailto:juskinbo@outlook.com'
                highContrast
                underline='hover'
              >
                <Em>juskinbo@outlook.com</Em>
              </RadixLink>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

InfoCard.propTypes = {
  className: PropTypes.string,
}
