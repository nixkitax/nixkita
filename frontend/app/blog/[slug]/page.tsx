import { getAllPosts, getAllProjects, getPageContentBySlug, getPostBySlug } from '@/lib/api'
import markdownToHtml from '@/lib/markdownToHtml'
import Head from 'next/head'

export async function generateStaticParams() {
    const slugs = getAllPosts(['slug'])

    return slugs.map((post) => ({
        slug: post.slug
    }))
}

const getContent: any = async (slug: string) => {
  const post = getPostBySlug(slug, [
    'title',
    'slug',
    'content'
  ])

  const content = await markdownToHtml(post.content || '')

  return {      
    ...post,
    content
  }
}

const Post = async ({ params }: {params: {slug: string}}) => {
  const post = await getContent(params.slug)

  return (
    <div className='max-w-2xl m-auto mt-12'>
      <div className='text-4xl font-mono font-bold'>{post.title} </div>
      <hr className='my-4' />
      <div
        className='prose text-black mt-10 font-mono'
        dangerouslySetInnerHTML={{__html: post.content}}
      />
    </div>
   
  )
}

export default Post