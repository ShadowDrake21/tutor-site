import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './carousel.css'

const Carousel = ({ children: reviewsItem }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return <Slider {...settings}>{reviewsItem}</Slider>
}

export default Carousel
