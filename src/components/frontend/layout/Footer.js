import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation(["common"]);
  return (
    <div>
      {/* <div className="max-w-screen-2xl xl:max-w-screen-3xl mx-auto"> */}
      <div className="bg-gray-100 p-5">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="w-30 h-full text-center">
            <img
              className="w-96 mx-auto p-5 my-2"
              src="/images/logo.png"
              alt=""
            />
            <h3>{t("address")}</h3>
          </div>
          <div className="w-30 h-full text-center">
            <h5 className="text-xl font-semibold uppercase my-2">
              {t("links")}
            </h5>
            <div className="mb-2">
              <div className="mt-2">
                <ul>
                  <li>
                    <Link to="/">
                      <span>{t("home")} </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/about">
                      <span>{t("about")}</span>
                    </Link>
                  </li>

                  <li>
                    <Link to="/service">
                      <span>{t("services")}</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact">
                      <span>{t("contact")}</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-30 h-full text-center">
            <h5 className="text-xl font-semibold uppercase my-2">
              {t("contact")}
            </h5>
            <div className="mb-2">
              <div className="align-text-top">
                <span className="font-semibold">{t("email")}</span>
              </div>
              <div className="mt-2">
                <ul>
                  <li>
                    <a
                      href="#a"
                      className="inline-flex space-x-2 items-center pl-5"
                    >
                      <span>info@orangegroup.life</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:a.salam@orangegroup.life"
                      className="inline-flex space-x-2 items-center pl-5"
                    >
                      <span>a.salam@orangegroup.life</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mb-2">
              <div className="align-text-top">
                <span className="font-semibold">{t("mobile")}</span>
              </div>
              <div className="mt-2">
                <ul>
                  <li>
                    <a
                      className="inline-flex space-x-2 items-center pl-5"
                      href="tel:+8801324244720"
                    >
                      <span>01324244720</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="inline-flex space-x-2 items-center pl-5"
                      href="tel:+8801324244721"
                    >
                      <span>01324244721</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center pb-16 md:pb-0 bg-gray-700">
        <p className="text-uppercase font-bold text-gray-200">
          ©{new Date().getFullYear()}
          <span className="ml-2">
            Orange Properties LTD. All rights reserved
          </span>
        </p>
        <p className="text-uppercase text-gray-200">
          Developed By
          <a
            href="https://chimbukit.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold ml-2"
          >
            <span className="text-green-500">Chimbuk IT</span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
