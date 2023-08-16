import React from 'react'
import { disciplines } from '../../assets/changeData'
import ServicesItem from './ServicesItem'
import Title from '../utilComponents/Title'

const Services = () => {
  return (
    <div
      name="disciplines"
      className="py-5 bg-zinc-50 border-gray-100 border-t md:py-10"
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
