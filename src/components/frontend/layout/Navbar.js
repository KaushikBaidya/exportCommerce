import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Language from "./Language";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [bgColor, setBgColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 70) {
      setBgColor(true);
    } else {
      setBgColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  const { t } = useTranslation(["common"]);

  return (
    <>
      <div
        className={
          "fixed w-full xl:max-w-screen-3xl mx-auto flex flex-wrap items-center justify-between z-10 py-2 " +
          (bgColor
            ? "bg-[#f42525f5] text-white shadow-md"
            : "bg-red-600 lg:bg-transparent ")
        }
      >
        <div className="w-full flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link to="/">
            <div>
              <img src="/images/logo.png" alt="" className="h-14 ml-5" />
            </div>
          </Link>
          <button
            className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <FaBars size={25} className="mr-3" />
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center" + (navbarOpen ? "flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="px-4 border-transparent border-b-4 hover:border-yellow-500 py-2 text-md font-medium uppercase">
              <a href="#seeHome" onClick={() => setNavbarOpen(!navbarOpen)}>
                HOME
              </a>
            </li>
            <li className="px-4 border-transparent border-b-4 hover:border-yellow-500 py-2 text-md font-medium uppercase">
              <a href="#seeAbout" onClick={() => setNavbarOpen(!navbarOpen)}>
                ABOUT
              </a>
            </li>
            <li className="px-4 border-transparent border-b-4 hover:border-yellow-500 py-2 text-md font-medium uppercase">
              <a href="#seeProduct" onClick={() => setNavbarOpen(!navbarOpen)}>
                PRODUCTS
              </a>
            </li>
            <li className="px-4 border-transparent border-b-4 hover:border-yellow-500 py-2 text-md font-medium uppercase">
              <a href="#seeBlog" onClick={() => setNavbarOpen(!navbarOpen)}>
                BLOGS
              </a>
            </li>
            <li className="px-4 border-transparent border-b-4 hover:border-yellow-500 py-2 text-md font-medium uppercase">
              <a href="#seeContact" onClick={() => setNavbarOpen(!navbarOpen)}>
                CONTACT
              </a>
            </li>
            {/* <li onClick={() => setNavbarOpen(!navbarOpen)}>
              <Language />
            </li> */}
          </ul>
        </div>
      </div>
    </>
  );
}
