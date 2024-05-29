import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/ui/navigation-menu'

export const Root = () => {
  return (
    <div>
      <nav className='flex justify-center pt-10'>
        <Navbar />
      </nav>
      <Outlet />
    </div>
  )
}
