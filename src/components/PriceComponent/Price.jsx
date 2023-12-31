import React from 'react'
import Title from '../utilComponents/Title'
import { priceCirclesInfo, priceFeatures } from '../../assets/changeData'
import PriceFeature from './PriceFeature'
import PriceCircle from './PriceCircle'

const Price = () => {
  return (
    <div
      name="price"
      className="py-10 px-2 bg-zinc-50 border-gray-100 border-b md:py-16"
    >
      <Title text="Заняття та ціна" />
      <div className="flex flex-col justify-center items-center">
        <div className="rounded-2xl bg-white max-w-screen-lg border-gray-100 border w-full p-5 md:p-8">
          <div className="text-center">
            {priceFeatures.map((feature, index) => (
              <PriceFeature key={index} text={feature} />
            ))}
          </div>
          <div className="flex items-center justify-center gap-x-10 mt-5">
            <h3 className="font-bold text-lg">Ціна</h3>
            <div className="text-base sm:text-lg">
              <span className="mr-4">1 заняття</span>
              <span>200 грн</span>
            </div>
          </div>
          <div className="flex justify-around flex-wrap gap-3 mt-7 mb-3 md:mt-10 md:mb-5">
            {priceCirclesInfo.map((circleInfo, index) => (
              <PriceCircle key={index} circleInfo={circleInfo} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Price
