import { defer, LoaderFunctionArgs } from 'react-router-dom'
import { fetchBlogById } from '../services/blog.service'
import { QueryClient } from '@tanstack/react-query'

export const blogLoader = async (
  { params }: LoaderFunctionArgs,
  queryClient: QueryClient
) => {
  const { id } = params

  if (!id) {
    throw new Error('ID is required')
  }

  return defer({
    blog: queryClient.fetchQuery({
      queryKey: ['blogs', id],
      queryFn: () => fetchBlogById(id),
    }),
  })
}
