import React from 'react'

function ReadComments({ comments }: any) {
  return (
    <div>
      <h1 className="font-mono text-2xl font-bold text-yellow-500">Comments</h1>
      {comments?.length > 0 ? (
        comments.map((comment: any) => (
          <div className="p-4 m-2 border border-yellow-300 rounded">
            <h3 className="font-serif text-xl text-yellow-500">
              {comment.name}
            </h3>
            <p className="max-w-[90%]">{comment.comments}</p>
            <p className="relative float-right mb-5 italic font-bold text-green-400 bottom-2">
              verified
            </p>
          </div>
        ))
      ) : (
        <p>Be the First to Comment !!</p>
      )}
    </div>
  )
}

export default ReadComments
