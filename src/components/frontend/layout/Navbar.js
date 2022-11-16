import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Language from './Language'

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const { t } = useTranslation(['common'])

  return (
    <>
      <div className="fixed w-full xl:max-w-screen-3xl mx-auto flex flex-wrap items-center justify-between z-10 py-2 bg-white backdrop-blur-sm text-black shadow-sm transition duration-200 ease-in">
        <div className="w-full flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link to="/">
            <div>
              <img src="/images/logo.png" alt="" className="h-16 ml-5" />
            </div>
          </Link>
          <button
            className="text-[#36B34B] cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <FaBars size={25} className="mr-3" />
          </button>
        </div>
        <div
          className={
            'lg:flex flex-grow items-center' + (navbarOpen ? 'flex' : ' hidden')
          }
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="px-4 border-transparent border-b-4 hover:border-[#36B34B] py-2 text-md font-medium uppercase">
              <a href="/#seeHome" onClick={() => setNavbarOpen(!navbarOpen)}>
                {t('home')}
              </a>
            </li>

            <li className="px-4 border-transparent border-b-4 py-2 text-md ">
              <div className="group inline-block">
                <button
                  aria-haspopup="true"
                  aria-controls="menu"
                  className="outline-none focus:outline-none bg-white rounded-sm flex items-center w-32"
                >
                  <span className="pr-1 font-medium uppercase flex-1">
                    Products
                  </span>
                  <span>
                    <svg
                      className="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </span>
                </button>
                <ul
                  id="menu"
                  aria-hidden="true"
                  className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-32"
                >
                  <Link to="/allProducts">
                    <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                      All Products
                    </li>
                  </Link>

                  <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                    <button
                      aria-haspopup="true"
                      aria-controls="menu-lang"
                      className="w-full text-left flex items-center outline-none focus:outline-none"
                    >
                      <Link
                        to="/mineralProducts"
                        className="w-full flex justify-around"
                      >
                        <span className="pr-1 flex-1">Minerals</span>
                        <span className="mr-auto">
                          <svg
                            className="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </span>
                      </Link>
                    </button>

                    <ul
                      id="menu-lang"
                      aria-hidden="true"
                      className="bg-white border rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left w-44"
                    >
                      <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                        Quick Lime
                      </li>
                      <li className="px-3 py-1 hover:bg-gray-100">
                        Burnt Dolomite
                      </li>
                      <li className="px-3 py-1 hover:bg-gray-100">
                        Hydrated Lime
                      </li>
                      <li className="px-3 py-1 hover:bg-gray-100">
                        White Limestone
                      </li>
                      <li className="px-3 py-1 hover:bg-gray-100">
                        Clay/ Kaolin
                      </li>
                    </ul>
                  </li>
                  <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                    <button
                      aria-haspopup="true"
                      aria-controls="menu-lang"
                      className="w-full text-left flex items-center outline-none focus:outline-none"
                    >
                      <Link
                        to="/biomass"
                        className="w-full flex justify-around"
                      >
                        <span className="pr-1 flex-1">Biomass</span>
                        <span className="mr-auto">
                          <svg
                            className="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </span>
                      </Link>
                    </button>

                    <ul
                      id="menu-lang"
                      aria-hidden="true"
                      className="bg-white border rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left w-44"
                    >
                      <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                        Wood Pellets
                      </li>
                      <li className="px-3 py-1 hover:bg-gray-100">
                        Wood Pallets
                      </li>
                      <li className="px-3 py-1 hover:bg-gray-100">Charcoal</li>
                      <li className="px-3 py-1 hover:bg-gray-100">
                        Chip Block
                      </li>
                      <li className="px-3 py-1 hover:bg-gray-100">
                        Wood Chips
                      </li>
                    </ul>
                  </li>
                  <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                    <button
                      aria-haspopup="true"
                      aria-controls="menu-lang"
                      className="w-full text-left flex items-center outline-none focus:outline-none"
                    >
                      <span className="pr-1 flex-1">
                        Self-Biological Products
                      </span>
                      <span className="mr-auto">
                        <svg
                          className="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </span>
                    </button>
                    <ul
                      id="menu-lang"
                      aria-hidden="true"
                      className="bg-white border rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left w-44"
                    >
                      <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                        Straws
                      </li>
                      <li className="px-3 py-1 hover:bg-gray-100">
                        Box From Sugar-Cane
                      </li>

                      <li className="px-3 py-1 hover:bg-gray-100">Wooden</li>
                    </ul>
                  </li>
                  {/* <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                    <button
                      aria-haspopup="true"
                      aria-controls="menu-lang"
                      className="w-full text-left flex items-center outline-none focus:outline-none"
                    >
                      <span className="pr-1 flex-1">Langauges</span>
                      <span className="mr-auto">
                        <svg
                          className="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </span>
                    </button>
                    <ul
                      id="menu-lang"
                      aria-hidden="true"
                      className="bg-white border rounded-sm absolute top-0 right-0 
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  "
                    >
                      <li className="px-3 py-1 hover:bg-gray-100">
                        Javascript
                      </li>
                      <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                        <button
                          aria-haspopup="true"
                          aria-controls="menu-lang-python"
                          className="w-full text-left flex items-center outline-none focus:outline-none"
                        >
                          <span className="pr-1 flex-1">Python</span>
                          <span className="mr-auto">
                            <svg
                              className="fill-current h-4 w-4
                transition duration-150 ease-in-out"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                          </span>
                        </button>
                        <ul
                          id="menu-lang-python"
                          aria-hidden="true"
                          className="bg-white border rounded-sm absolute top-0 right-0 
      transition duration-150 ease-in-out origin-top-left
      min-w-32
      "
                        >
                          <li className="px-3 py-1 hover:bg-gray-100">2.7</li>
                          <li className="px-3 py-1 hover:bg-gray-100">3+</li>
                        </ul>
                      </li>
                      <li className="px-3 py-1 hover:bg-gray-100">Go</li>
                      <li className="px-3 py-1 hover:bg-gray-100">Rust</li>
                    </ul>
                  </li> */}
                  <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                    Spoon/Plate/Chopsticks/Bowl
                  </li>
                </ul>
              </div>
            </li>
            <li className="px-4 border-transparent border-b-4 hover:border-[#36B34B] py-2 text-md font-medium uppercase">
              <a href="/#seeAbout" onClick={() => setNavbarOpen(!navbarOpen)}>
                {t('about')}
              </a>
            </li>

            <li className="px-4 border-transparent border-b-4 hover:border-[#36B34B] py-2 text-md font-medium uppercase">
              <a href="/#seeContact" onClick={() => setNavbarOpen(!navbarOpen)}>
                {t('contact')}
              </a>
            </li>
            <li onClick={() => setNavbarOpen(!navbarOpen)}>
              <Language />
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
