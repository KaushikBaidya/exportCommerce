import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Language from "./Language";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const { t } = useTranslation(["common"]);

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
            "lg:flex flex-grow items-center" + (navbarOpen ? "flex" : " hidden")
          }
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="px-4 border-transparent border-b-4 hover:border-[#36B34B] py-2 text-md font-medium uppercase">
              <a href="/#seeHome" onClick={() => setNavbarOpen(!navbarOpen)}>
                {t("home")}
              </a>
            </li>
            <li className="px-4 border-transparent border-b-4 hover:border-[#36B34B] py-2 text-md font-medium uppercase">
              <a href="/#seeAbout" onClick={() => setNavbarOpen(!navbarOpen)}>
                {t("about")}
              </a>
            </li>
            <li className="px-4 border-transparent border-b-4 hover:border-[#36B34B] py-2 text-md font-medium uppercase">
              <a href="/#seeProduct" onClick={() => setNavbarOpen(!navbarOpen)}>
                {t("products")}
              </a>
            </li>

            <li className="px-4 border-transparent border-b-4 hover:border-[#36B34B] py-2 text-md font-medium uppercase">
              <a href="/#seeContact" onClick={() => setNavbarOpen(!navbarOpen)}>
                {t("contact")}
              </a>
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
