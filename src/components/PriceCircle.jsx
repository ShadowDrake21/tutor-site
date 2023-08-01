import React from 'react'

const PriceCircle = ({ circleInfo, color = 'bg-gray-100' }) => {
  return (
    <div className="flex items-center text-center w-52 h-52 bg-gray-100 rounded-full drop-shadow-lg">
      <p className="text-black">
        <span className="inline-block w-full text-5xl font-bold">
          {circleInfo.main}
        </span>
        {circleInfo.text}
      </p>
    </div>
  )
}

export default PriceCircle
