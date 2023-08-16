import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const ReviewRate = ({ starsCount }) => {
  const setStars = (count) => {
    let stars = []
    for (let i = 0; i < count; i++) {
      stars = [
        ...stars,
        <FontAwesomeIcon key={i} icon={faStar} style={{ color: '#ffbf00' }} />,
      ]
    }
    return stars
  }

  return (
    <div className="w-full bg-white px-2 py-1 rounded-lg text-center">
      {setStars(starsCount)}
    </div>
  )
}

export default ReviewRate
