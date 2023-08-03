import React from 'react'
import Title from './Title'
import ReviewsItem from './ReviewsItem'
import Carousel from './Carousel'
import { reviews } from '../assets/changeData'

const Reviews = () => {
  return (
    <div
      name="reviews"
      className="max-w-xl py-10 px-2 mx-auto bg-white md:py-16"
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
