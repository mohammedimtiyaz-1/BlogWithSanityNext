import React from 'react'

function ReadComments({ comments }) {
  return (
    <div>
      <h1 className="font-mono text-2xl font-bold text-yellow-500">Comments</h1>
      {comments?.length > 0 ? (
        comments.map((comment) => (
          <div className="p-4 border border-yellow-300 rounded">
            <h3 className="font-serif text-xl text-yellow-500">
              {comment.name}
            </h3>
            <p>{comment.comments}</p>
            <p className="font-light right">verified</p>
          </div>
        ))
      ) : (
        <p>Be the First to Comment !!</p>
      )}
    </div>
  )
}

export default ReadComments
