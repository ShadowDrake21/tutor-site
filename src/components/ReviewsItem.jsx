import React from 'react'
import ReviewRate from './ReviewRate'

const ReviewsItem = (reviewObj) => {
  const { pupil, starsCount, date, subjectTitle, reviewText } = reviewObj
  return (
    <div className="max-w-xl w-full bg-zinc-50 border-gray-100 border p-3 rounded-2xl">
      <div className="flex gap-x-6">
        <div>
          <p className="text-lg mb-2 font-bold">{pupil}</p>
          <div className="mb-2 w-28">
            {<ReviewRate starsCount={starsCount} />}
          </div>
          <span>{date}</span>
        </div>
        <div>
          <p className="text-lg mb-2 font-bold">{subjectTitle}</p>
          <p>{reviewText}</p>
        </div>
      </div>
    </div>
  )
}

export default ReviewsItem
