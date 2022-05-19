import Link from 'next/link'
import React from 'react'
import { urlFor } from '../sanity'

function Posts({ posts }: { posts: [any] }) {
  return (
    <div className="grid grid-cols-1 gap-5 p-10 md:grid-cols-3">
      {posts.map((post) => (
        <div className="overflow-hidden border rounded-lg cursor-pointer">
          <Link key={post._id} href={`/post/${post.slug.current}`}>
            <div className="group">
              <img
                className="h-40 transition ease-out w-50 group-hover:scale-105 "
                width={400}
                height={300}
                src={urlFor(post.mainImage).url()}
                alt=""
              />

              <div className="flex items-center justify-between px-2 py-1 row">
                <div>
                  <p className="font-bold ">{post.title}</p>
                  <p className="text-sm italic">
                    {post.description} by{' '}
                    <span className="font-bold">{post.author.name}</span>
                  </p>
                </div>
                <div>
                  <img
                    className="object-contain w-20 h-20 rounded-full"
                    src={urlFor(post.author.image).url()}
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Posts
