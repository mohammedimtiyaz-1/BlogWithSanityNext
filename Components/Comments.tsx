import React, { useState } from 'react'
import { useForm, SubmitHandler, set } from 'react-hook-form'
import ReadComments from './ReadComments'

interface IFormInput {
  _id: string
  name: string
  email: string
  comments: string
}

function Comments({ post }: any) {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>()

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const response = await fetch('/api/createComment', {
      method: 'POST',
      body: JSON.stringify(data),
    })
    if (response.status) {
      console.log('success: comment submitted')
      setSubmitted(true)
    } else {
      console.error(response)
      setSubmitted(true)
    }
  }

  return (
    <div className="max-w-2xl mx-auto my-5">
      <hr className="mb-4 border-yellow-500" />

      {submitted ? (
        <div className="p-4 font-mono font-bold text-white bg-yellow-500">
          <h2 className="text-xl">Thank you for submitted your comment!</h2>
          <p>Once it is approved, it will be visible</p>
        </div>
      ) : (
        <>
          <h3 className="font-mono font-light text-yellow-500">
            Enjoyed this article ?
          </h3>
          <h2 className="font-serif text-2xl font-bold">
            Leave a comment below
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
            <input
              {...register('_id')}
              type="hidden"
              value={post._id}
              name="_id"
            ></input>
            <label>Name</label>

            <input
              {...register('name', { required: true })}
              className="p-2 my-1 mb-4 border border-gray-400 rounded-lg outline-none ring-yellow-400 focus:border-0 focus:ring"
              placeholder="John doe"
              type="text"
            ></input>
            <label>Email</label>
            <input
              {...register('email', { required: true })}
              className="p-2 my-1 mb-4 border border-gray-400 rounded-lg outline-none ring-yellow-400 focus:border-0 focus:ring"
              placeholder="abc@xyz.com"
              type="email"
            ></input>
            <label>Comments</label>
            <textarea
              {...register('comments', { required: true })}
              className="h-40 p-2 my-1 mb-4 border border-gray-400 rounded-lg outline-none ring-yellow-400 focus:border-0 focus:ring"
            ></textarea>
            <div className="p-5 font-mono text-red-600">
              {errors.name && <p>! Name field is required</p>}
              {errors.email && <p>! Email field is required</p>}
              {errors.comments && <p>! Comments field is required</p>}
            </div>
            <input
              type="submit"
              value="submit"
              className="max-w-xs py-2 font-mono text-xl font-bold text-white bg-yellow-500 rounded-full focus:shadow-outline hover:bg-yellow-400 focus:outline-none"
            />
          </form>
        </>
      )}
      <ReadComments comments={post.comments} />
    </div>
  )
}

export default Comments
