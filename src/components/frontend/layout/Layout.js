import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
// import SocialBar from "./SocialBar";

const Layout = () => {
  return (
    <div className="max-w-screen-2xl xl:max-w-screen-3xl mx-auto">
      <Navbar />
      {/* <SocialBar /> */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
