import React from 'react'
import Title from './Title'
import { disciplines } from '../assets/changeData'
import ServicesItem from './ServicesItem'

const Services = () => {
  return (
    <div
      name="disciplines"
      className="py-10 bg-zinc-50 border-gray-100 border-t border-b md:py-16"
    >
      <Title text="Дисципліни" />
      <div className="flex flex-col items-center gap-y-5 sm:gap-y-8">
        {disciplines.map((discipline, index) => (
          <ServicesItem key={index} {...discipline} />
        ))}
      </div>
    </div>
  )
}

export default Services
