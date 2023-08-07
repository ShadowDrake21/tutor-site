import React from 'react'
import { Link } from 'react-scroll'
import { links } from '../assets/changeData'

const Footer = () => {
  return (
    <div className="bg-black text-white mt-10 pt-5 pb-2">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center mb-14">
        <div className="text-2xl font-semibold ml-3 cursor-pointer">
          <Link to="home" smooth duration={500}>
            Крапив'янська
          </Link>
        </div>
        <div>
          <ul className="flex">
            {links.map(({ id, link, name }) => (
              <li
                key={id}
                className="mx-2 cursor-pointer uppercase hover:scale-105 hover:text-gray-300 duration-200"
              >
                <Link to={link} smooth duration={500} className="p-4">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="text-base text-center hover:text-gray-400 duration-200">
        <a
          href="https://github.com/ShadowDrake21"
          target="_blank"
          rel="noreferrer"
        >
          © Created by Krapyvianskyi "Drake" Dmytro
        </a>
        <p className="mt-2">2023</p>
      </div>
    </div>
  )
}

export default Footer
