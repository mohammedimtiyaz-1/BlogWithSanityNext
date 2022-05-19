// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import sanityClient from '@sanity/client'

type Data = {
  status: boolean
}

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_TOKEN,
}

const client = sanityClient(config)
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { _id, name, email, comments } = JSON.parse(req.body)

  try {
    await client.create({
      _type: 'comment',
      post: {
        _type: 'reference',
        _ref: _id,
      },
      name,
      email,
      comments,
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({ status: false })
  }
  res.status(200).json({ status: true })
}
