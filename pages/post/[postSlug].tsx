import Link from 'next/link'
import React from 'react'
import PortableText from 'react-portable-text'
import Header from '../../Components/Header'
import Comments from '../../Components/Comments'
import { sanityClient, urlFor } from '../../sanity'
import ReadComments from '../../Components/ReadComments'

function Post({ post }: any) {
  return (
    <div>
      <Header />
      <div className="max-w-6xl p-4 mx-auto">
        <img
          className="w-full h-40"
          src={urlFor(post.mainImage).url()}
          alt={post.title}
        />
        <article className="max-w-3xl mx-auto">
          <h1 className="mt-10 mb-3 text-3xl font-bold">{post.title}</h1>
          <h2 className='"font-gray-500 mb-3 font-light'>{post.description}</h2>
          <span className="inline-flex items-center space-x-5 font-light row">
            <img
              className="w-20 h-20 bg-white rounded-full"
              src={urlFor(post.author.image).url()}
              alt=""
            />
            <h3>
              BLOG BY{' '}
              <span className="font-serif font-bold text-2l">
                {' '}
                {post.author.name}
              </span>
            </h3>
            <h3>
              Published At{' '}
              <span className="font-sans font-bold">
                {new Date(post._createdAt).toDateString()}
              </span>
            </h3>
          </span>
          <div>
            <PortableText
              // Pass in block content straight from Sanity.io
              content={post.body}
              projectId={process.env.SANITY_PROJECT_ID}
              dataset={process.env.SANITY_DATASET}
              // Optionally override marks, decorators, blocks, etc. in a flat
              // structure without doing any gymnastics
              serializers={{
                h1: (props: any) => (
                  <h1 className="my-5 text-2xl font-bold" {...props} />
                ),
                h2: (props: any) => (
                  <h2 className="my-5 text-2xl font-bold" {...props} />
                ),
                h3: (props: any) => (
                  <h3 className="my-5 text-2xl font-bold" {...props} />
                ),
                h5: (props: any) => (
                  <h5 className="my-5 text-2xl font-bold" {...props} />
                ),
                li: ({ children }: any) => (
                  <li className="my-4 ml-4 list-disc">{children}</li>
                ),
                link: ({ href, children }: any) => (
                  <a href={href} className="text-blue-500 hover:underline">
                    {children}
                  </a>
                ),
              }}
            />
          </div>
        </article>

        <div className="max-w-3xl mx-auto">
          <Comments post={post} />
        </div>
      </div>
    </div>
  )
}

// export const getServerSideProps = (ctx) => {
//   console.log(ctx)
// }

export const getStaticProps = async ({ params }) => {
  console.log(params)
  const query = `*[_type=="post" && slug.current==$postSlug][0]{
    _id,_createdAt,title,
    author->{
    name,image
  }, 'comments' : *[_type=="comment" && post._ref==^._id && approved==true],description,mainImage,slug,body
  }`
  const post = await sanityClient.fetch(query, { postSlug: params.postSlug })
  if (!post) {
    return { notFound: true }
  }
  return { props: { post }, revalidate: 60 }
}

export const getStaticPaths = async () => {
  const query = `*[_type=="post"]{
    _id,
    slug{
    current
  }
  }`
  const posts = await sanityClient.fetch(query)
  const paths = posts.map((post) => ({
    params: { postSlug: post.slug.current },
  }))

  return { paths, fallback: 'blocking' }
}
export default Post
