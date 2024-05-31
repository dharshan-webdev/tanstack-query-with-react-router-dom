import axios from 'axios'
import { Blog } from '../types/blog.types'

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const fetchBlogs = async (): Promise<Blog[]> => {
  const response = await axios.get('/api/blogs')
  return response.data
}

export const fetchBlogById = async (id?: string): Promise<Blog> => {
  await delay(2000) // to simulate slow network
  if (!id) {
    throw new Error('Not found')
  }
  const response = await axios.get(`/api/blogs/${id}`)
  return response.data
}
