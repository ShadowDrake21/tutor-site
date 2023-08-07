import React, { useState } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { links } from '../assets/changeData'

const NavBar = () => {
  const [nav, setNav] = useState(false)

  return (
    <div className="w-full bg-slate-200 fixed z-50">
      <div className="flex justify-between items-center max-w-screen-2xl h-14 m-auto text-black">
        <div className="text-2xl font-semibold ml-3 cursor-pointer">
          <Link to="home" smooth duration={500}>
            Крапив'янська
          </Link>
        </div>
        <ul className="hidden lg:flex">
          {links.map(({ id, link, name }) => (
            <li
              key={id}
              className="mx-2 cursor-pointer uppercase hover:scale-105 hover:text-gray-600 duration-200"
            >
              <Link to={link} smooth duration={500} className="p-4">
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <div
          className="cursor-pointer pr-4 z-10 lg:hidden"
          onClick={() => setNav(!nav)}
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-white to-slate-300">
            {links.map(({ id, link, name }) => (
              <li key={id} className="cursor-pointer uppercase py-4 text-2xl">
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                  className="px-4"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default NavBar
