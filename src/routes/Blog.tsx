import { Await, useLoaderData } from 'react-router-dom'
import { ServerCrash } from 'lucide-react'
import { Blog } from '../types/blog.types'
import { Suspense } from 'react'
import { Spinner } from '../components/ui/Spinner'

export const BlogPage = () => {
  const data = useLoaderData() as { blog: Promise<Blog> }

  return (
    <main className='flex justify-center'>
      <section className='mt-10 w-7/12 h-fit bg-[#181a1b] rounded-xl text-white p-5 text-center'>
        <Suspense fallback={<Spinner />}>
          <Await
            resolve={data.blog}
            errorElement={<ServerCrash />}
            children={(resolvedBlog: Blog) => (
              <>
                <h1 className='text-[#7360BF] text-3xl'>
                  {resolvedBlog.title}
                </h1>
                <p className='p-2 mt-4 text-lg text-left leading-8'>
                  {resolvedBlog.content}
                </p>
              </>
            )}
          />
        </Suspense>
      </section>
    </main>
  )
}
