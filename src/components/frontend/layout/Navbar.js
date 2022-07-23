import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Language from "./Language";

export default function Navbar({ fixed }) {
  const { t } = useTranslation(["common"]);
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <div className="fixed w-full xl:max-w-screen-3xl mx-auto flex flex-wrap items-center justify-between z-10 bg-[#bd2727f8] py-2 shadow-md">
        <div className="w-full flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link to="/">
            <div>
              <img src="/images/logo.png" alt="" className="h-10" />
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
            <li className="px-4 text-white border-transparent border-b-4 hover:border-white hover:text-white py-2 text-md font-medium uppercase">
              <Link to="/" onClick={() => setNavbarOpen(!navbarOpen)}>
                {t("home")}
              </Link>
            </li>
            <li className="px-4 text-white border-transparent border-b-4 hover:border-white hover:text-white py-2 text-md font-medium uppercase">
              <Link to="/about" onClick={() => setNavbarOpen(!navbarOpen)}>
                {t("about")}
              </Link>
            </li>
            <li className="px-4 text-white border-transparent border-b-4 hover:border-white hover:text-white py-2 text-md font-medium uppercase">
              <Link to="/project" onClick={() => setNavbarOpen(!navbarOpen)}>
                Products
              </Link>
            </li>
            <li className="px-4 text-white border-transparent border-b-4 hover:border-white hover:text-white py-2 text-md font-medium uppercase">
              <Link to="/service" onClick={() => setNavbarOpen(!navbarOpen)}>
                {t("services")}
              </Link>
            </li>
            <li className="px-4 text-white border-transparent border-b-4 hover:border-white hover:text-white py-2 text-md font-medium uppercase">
              <Link to="/contact" onClick={() => setNavbarOpen(!navbarOpen)}>
                {t("contact")}
              </Link>
            </li>
            <li onClick={() => setNavbarOpen(!navbarOpen)}>
              <Language />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
