import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Root } from '@/routes/Root'
import { useMemo } from 'react'
import NotFound from './routes/NotFound'
import { BlogPage } from './routes/Blog'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { blogLoader } from './loaders/blog.loader'

const queryClient = new QueryClient()

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
              element: <BlogPage />,
              loader: (params) => blogLoader(params, queryClient),
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
    <QueryClientProvider client={queryClient}>
      <div className='h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500'>
        <RouterProvider router={router} />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
