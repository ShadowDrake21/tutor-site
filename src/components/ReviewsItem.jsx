import React from 'react'
import ReviewRate from './ReviewRate'

const ReviewsItem = (reviewObj) => {
  const { pupil, starsCount, date, subjectTitle, reviewText } = reviewObj
  return (
    <div className="max-w-xl w-full bg-zinc-50 border-gray-100 border p-3 rounded-2xl">
      <div className="flex flex-col gap-x-6 esm:flex-row">
        <div className="flex flex-col items-center mb-4 esm:block esm:mb-0">
          <p className="text-base mb-2 font-bold sm:text-lg">{pupil}</p>
          <div className="mb-2 w-28">
            {<ReviewRate starsCount={starsCount} />}
          </div>
          <span>{date}</span>
        </div>
        <div className="text-center esm:text-left">
          <p className="text-base mb-2 font-bold sm:text-lg">{subjectTitle}</p>
          <p className="text-sm sm:text-lg">{reviewText}</p>
        </div>
      </div>
    </div>
  )
}

export default ReviewsItem
