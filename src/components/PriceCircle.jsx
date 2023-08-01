import React from 'react'

const PriceCircle = ({ circleInfo }) => {
  return (
    <div className="flex items-center text-center p-2 w-44 h-44 bg-gray-100 rounded-full drop-shadow-lg md:w-52 md:h-52">
      <p className="text-black">
        <span className="inline-block w-full text-3xl font-bold md:text-5xl">
          {circleInfo.main}
        </span>
        {circleInfo.text}
      </p>
    </div>
  )
}

export default PriceCircle
