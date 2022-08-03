import React from "react";
import { FiFacebook, FiTwitter, FiYoutube, FiLinkedin } from "react-icons/fi";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="w-full grid grid-cols-1 justify-items-center py-10 bg-white">
        <div className="flex justify-center items-center">
          <img src="/images/logo.png" alt="" className="h-16 ml-5" />
          <h1 className="text-[#585858] font-semibold text-lg lg:text-2xl">
            TVC Vietnam
          </h1>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 justify-items-center gap-y-2 py-2 mt-2">
          <div>
            <p className="text-sm lg:text-lg text-[#201A59] font-semibold font-sans text-center px-5 ">
              Address:
              <span className="font-normal">Haiphong, Vietnam</span>
            </p>
            <p className="text-sm lg:text-lg text-[#201A59] font-semibold font-sans text-center px-5 ">
              Email:
              <span className="font-normal"> info@tvcvietnam.com</span>
            </p>
            {/* <p className="text-lg text-[#201A59] font-semibold font-sans text-center px-5 ">
              Contact Number
            </p>
            <p className="text-sm lg:text-lg text-[#201A59] font-normal font-sans text-center px-5 ">
              +4407983241778
            </p>
            <p className="text-sm lg:text-lg text-[#201A59] font-normal font-sans text-center px-5 ">
              +4407848938273
            </p> */}
          </div>

          <div>
            <p className="text-lg text-[#201A59] font-semibold font-sans text-center px-5 ">
              Quick Links
            </p>
            <div className="text-[#201A59] grid grid-cols-1 justify-items-center">
              <p>
                <a href="#seeHero">Home</a>
              </p>
              <p>
                <a href="#seeAbout">About</a>
              </p>
              <p>
                <a href="#seeCourse">Course</a>
              </p>
              <p>
                <a href="#seeService">Service</a>
              </p>
            </div>
          </div>
          <div className="">
            <div className="grid grid-cols-1 justify-items-center">
              <h1 className="text-[12px] lg:text-[16px] text-[#201A59] font-semibold sm:mt-2 text-center px-5 uppercase">
                stay connected
              </h1>
              <hr className="h-[2px] w-[100px] bg-[#201A59]" />
            </div>
            <div className="w-full flex flex-wrap gap-4 justify-center py-3">
              <div className="w-10 h-10 flex bg-[#201A59] justify-center items-center drop-shadow-xl rounded-lg text-white hover:bg-[#4c40b5]">
                <a href="#f">
                  <FiFacebook size={26} />
                </a>
              </div>
              <div className="w-10 h-10 flex bg-[#201A59] justify-center items-center drop-shadow-xl rounded-lg text-white hover:bg-[#4c40b5]">
                <a href="#f">
                  <FiTwitter size={26} />
                </a>
              </div>
              <div className="w-10 h-10 flex bg-[#201A59] justify-center items-center drop-shadow-xl rounded-lg text-white hover:bg-[#4c40b5]">
                <a href="#f">
                  <FiYoutube size={26} />
                </a>
              </div>
              <div className="w-10 h-10 flex bg-[#201A59] justify-center items-center drop-shadow-xl rounded-lg text-white hover:bg-[#4c40b5]">
                <a href="#f">
                  <FiLinkedin size={26} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center pb-16 md:pb-0 bg-[#201A59] py-1">
        <p className="text-uppercase font-bold text-gray-200">
          ©{new Date().getFullYear()}
          <span className="ml-2">TVC Trading Company All rights reserved</span>
        </p>
        <p className="text-uppercase text-gray-200">
          Developed By
          <a
            href="https://chimbukit.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold ml-2"
          >
            <span className="">Chimbuk IT</span>
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
