import { Flex } from '@radix-ui/themes'
import InfoCard from '../components/InfoCard'

const Home = () => {
  return (
    <Flex className='h-screen'>
      <Flex className='items-center justify-center'>
        <InfoCard className='mx-4 sm:mx-16' />
      </Flex>
    </Flex>
  )
}

export default Home
