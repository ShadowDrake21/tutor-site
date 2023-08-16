import React from 'react'
import { Link } from 'react-scroll'
import { links } from '../../assets/changeData'

const Footer = () => {
  return (
    <div className="bg-black text-white mt-10 pt-5 pb-2">
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center flex-col mb-10 gap-y-5 lg:mb-14 lg:flex-row">
        <div className="text-2xl font-semibold ml-3 cursor-pointer">
          <Link to="home" smooth duration={500}>
            Крапив'янська
          </Link>
        </div>
        <div>
          <ul className="flex flex-col text-center gap-y-3 lg:flex-row lg:gap-y-0">
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
      <div className="text-sm text-center hover:text-gray-400 duration-200 esm:text-base">
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
