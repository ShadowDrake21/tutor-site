import React from 'react'

const About = ({ texts, photo }) => {
  return (
    <div name="about" className="pt-8 md:pt-10 lg:pt-14">
      <div className="max-w-screen-lg px-3 mx-auto">
        <h3 className="text-center text-2xl uppercase mb-4 md:mb-6 md:text-3xl lg:mb-8">
          Про мене
        </h3>
        <div className="flex flex-col justify-between items-center lg:flex-row lg:items-start">
          <div className="max-w-full text-center text-sm md:text-base lg:max-w-lg lg:text-left">
            {texts.map((text, index) => (
              <p key={index} className="mb-4 md:mb-7 lg:mb-10">
                {text}
              </p>
            ))}
          </div>
          <img
            className="object-cover w-48 rounded-xl esm:w-72 md:w-96"
            src={photo}
            alt="my_photo"
          />
        </div>
      </div>
    </div>
  )
}

export default About
