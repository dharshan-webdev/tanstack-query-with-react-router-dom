import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Root } from '@/routes/Root'
import { useMemo } from 'react'
import NotFound from './routes/NotFound'
import { Blog } from './routes/Blog'

function App() {
  const router = useMemo(
    () =>
      createBrowserRouter([
        {
          path: '/',
          element: <Root />,
          children: [
            {
              path: '/:id',
              element: <Blog />,
            },
          ],
          errorElement: (
            <NotFound message='Sorry, blog with give ID not found!' />
          ),
        },
        {
          path: '*',
          element: <NotFound />,
        },
      ]),
    []
  )
  return (
    <div className='h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
