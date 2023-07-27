import React, { useState } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'
import { Link } from 'react-scroll'

const NavBar = () => {
  const [nav, setNav] = useState(false)
  const links = [
    {
      id: 1,
      link: 'home',
      name: 'Головна',
    },
    {
      id: 2,
      link: 'about',
      name: 'Про мене',
    },
    {
      id: 3,
      link: 'disciplines',
      name: 'Дисципліни',
    },
    {
      id: 4,
      link: 'price',
      name: 'Ціна',
    },
    {
      id: 5,
      link: 'reviews',
      name: 'Відгуки',
    },
    {
      id: 6,
      link: 'contacts',
      name: 'Контакти',
    },
  ]
  return (
    <div className="w-full bg-slate-200 fixed z-50">
      <div className="flex justify-between items-center max-w-screen-2xl h-14 m-auto text-black">
        <div className="text-2xl font-semibold ml-3 cursor-pointer">
          <Link to="#" smooth duration={500}>
            Крапив'янська
          </Link>
        </div>
        <ul className="hidden lg:flex">
          {links.map(({ id, link, name }) => (
            <li
              key={id}
              className="p-4 mx-2 cursor-pointer uppercase hover:scale-105 hover:text-gray-600 duration-200"
            >
              <Link to={link} smooth duration={500}>
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
              <li
                key={id}
                className="px-4 cursor-pointer uppercase py-4 text-3xl"
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
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
