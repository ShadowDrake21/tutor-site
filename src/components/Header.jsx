import React from 'react'
import { Link } from 'react-scroll'

const Header = ({ link }) => {
  return (
    <div
      name="home"
      className="relative pt-14 bg-[url('/src/assets/header_photo.jpg')] bg-center bg-cover"
    >
      <div className="relative text-white max-w-screen-2xl mx-auto px-3 text-center pt-10 pb-8 z-20 md:pt-16 md:pb-14 esm:pt-12 esm:pb-10">
        <div className="font-['Open_Sans']">
          <h1 className="text-2xl mb-3 font-bold esm:mb-4 md:text-4xl md:mb-7">
            Репетитор природичих наук
          </h1>
          <h2 className="font-light uppercase text-lg mb-2 esm:mb-4 esm:text-xl md:text-3xl md:mb-7">
            Крапив'янська Аліна Сергіївна
          </h2>
          <p className="font-light text-base mb-6 md:text-xl md:mb-8">
            Професійна та якісна підготовка учнів шкіл з біології і хімії,
            зокрема, до ЗНО.
          </p>
        </div>
        <span className="uppercase text-base pt-2 pb-3 px-7 border-white border rounded-lg cursor-pointer hover:bg-slate-50 hover:text-black duration-300 md:px-10  md:pt-3 md:pb-4">
          <Link to={link} smooth duration={500}>
            Відгуки
          </Link>
        </span>
      </div>
      <div className="absolute bg-black w-full h-full top-0 z-10 opacity-50"></div>
    </div>
  )
}

export default Header
