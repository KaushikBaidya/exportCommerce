import React, { Fragment, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { HiOutlineChevronDown } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Language from './Language'
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

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
            <li className="px-4 border-transparent border-b-4 hover:border-[#36B34B] py-2 text-md font-medium uppercase">
              <a href="/#seeAbout" onClick={() => setNavbarOpen(!navbarOpen)}>
                {t('about')}
              </a>
            </li>
            {/* <li className="px-4 border-transparent border-b-4 hover:border-[#36B34B] py-2 text-md font-medium uppercase">
              <a href="/#seeProduct" onClick={() => setNavbarOpen(!navbarOpen)}>
                {t("products")}
              </a>
            </li> */}
            <li className="px-4 border-transparent border-b-4 hover:border-[#36B34B] py-2 text-md font-medium uppercase">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex w-full justify-center uppercase">
                    Products
                    <HiOutlineChevronDown
                      className="-mr-1 ml-2 h-5 w-5"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute left-0 z-10 mt-2 w-64 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/allProducts"
                            className={classNames(
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700',
                              'block px-4 py-2 text-sm',
                            )}
                          >
                            All Products
                          </Link>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/woodProducts"
                            className={classNames(
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700',
                              'block px-4 py-2 text-sm',
                            )}
                          >
                            Wood Products
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/mineralProducts"
                            className={classNames(
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700',
                              'block px-4 py-2 text-sm',
                            )}
                          >
                            Minerals Products
                          </Link>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
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
