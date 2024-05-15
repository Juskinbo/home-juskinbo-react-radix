import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'

export default function App() {
  return (
    <>
      <NavBar className='fixed m-2 w-[calc(100%-1rem)]' />
      <Outlet />
    </>
  )
}
