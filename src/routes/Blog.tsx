import { useParams } from 'react-router-dom'
import { blogs } from '../data'

export const Blog = () => {
  const { id: currentId } = useParams()
  const blog = blogs.find(({ id }) => currentId === id)
  if (!blog) {
    throw new Response('', {
      status: 404,
      statusText: 'Not Found',
    })
  }
  return (
    <main className='flex justify-center'>
      <section className='mt-10 w-7/12 h-fit bg-[#181a1b] rounded-xl text-white p-5 text-center'>
        <h1 className='text-[#7360BF] text-3xl'>{blog.title}</h1>
        <p className='p-2 mt-4 text-lg text-left leading-8'>{blog.content}</p>
      </section>
    </main>
  )
}
