import React from 'react'
import { Link } from 'react-scroll'

const Header = ({ link }) => {
  return (
    <div
      name="home"
      className="relative pt-14 bg-[url('/src/assets/header_photo.jpg')] bg-center bg-cover"
    >
      <div className="relative text-white max-w-screen-2xl mx-auto px-3 text-center pt-16 pb-14 z-20">
        <div className="font-['Open_Sans']">
          <h1 className="font-bold text-4xl mb-7">Репетитор природичих наук</h1>
          <h2 className="font-light uppercase text-3xl mb-7">
            Крапив'янська Аліна Сергіївна
          </h2>
          <p className="font-light text-xl mb-8">
            Професійна та якісна підготовка учнів шкіл з біології і хімії,
            зокрема, до ЗНО.
          </p>
        </div>
        <span className="uppercase text-base pt-3 pb-4 px-10 border-white border rounded-lg cursor-pointer hover:bg-slate-50 hover:text-black duration-300">
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
