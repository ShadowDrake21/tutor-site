import React from 'react'
import Title from './Title'
import ReviewsItem from './ReviewsItem'
import Carousel from './Carousel'
import { reviews } from '../assets/changeData'

const Reviews = () => {
  return (
    <div
      name="reviews"
      className="max-w-xs py-10 px-2 mx-auto bg-white esm:max-w-md sm:max-w-xl md:py-16"
    >
      <Title text="Відгуки" />

      <Carousel>
        {reviews.map((review, index) => (
          <ReviewsItem key={index} {...review} />
        ))}
      </Carousel>
    </div>
  )
}

export default Reviews
