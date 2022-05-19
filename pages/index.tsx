import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../Components/Header'
import MainBanner from '../Components/MainBanner'
import { sanityClient } from '../sanity'
import Posts from '../Components/Posts'

const Home: NextPage = ({ posts }: { posts: [any] }) => {
  return (
    <div>
      <Head>
        <title>Medium Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="max-w-6xl mx-auto">
        <MainBanner />
      </div>
      <div className="max-w-6xl mx-auto">
        <Posts posts={posts} />
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = `*[_type=="post"]{
    _id,title,
    author->{
    name,image
  }, description,mainImage,slug
  }`

  const results = await sanityClient.fetch(query)
  // console.log('results:', results)
  return { props: { posts: results } }
}
export default Home
