import React from 'react'

const ServicesItem = (discipline) => {
  return (
    <div className="max-w-screen-lg bg-white px-2 py-4 rounded-2xl border-gray-100 border md:px-4 md:py-8">
      <div className="flex items-center flex-col gap-x-5 sm:flex-row">
        <div>
          <div className="w-[325px] h-[325px] mb-3 sm:w-[250px] sm:h-[350px] sm:mb-0 xl:w-[350px] xl:h-[450px]">
            <img
              src={discipline.img}
              alt=""
              className="object-cover w-full h-full rounded-2xl"
            />
          </div>
        </div>
        <div className="text-center sm:text-left">
          <h3 className="uppercase text-xl mb-1 font-semibold sm:mb-2 md:mb-3 xl:text-2xl">
            {discipline.name}
          </h3>
          <div className="mb-2 md:mb-3 xl:mb-5">
            <h6 className="text-base mb-1 font-semibold xl:text-lg">
              Розділи:
            </h6>
            <p>{discipline.topics}</p>
          </div>
          <div>
            <h6 className="text-base mb-2 font-semibold xl:text-lg xl:mb-3">
              Категорії учнів та мета занять:
            </h6>
            <ul>
              {discipline.studentTypes.map((type, index) => (
                <li key={index} className="text-left list-disc ml-7 my-3">
                  {type}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesItem
