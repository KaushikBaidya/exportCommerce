import React, { Suspense, lazy, useLayoutEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { FallbackLoading } from "./components/Loading";
import "./App.css";

import { Toaster } from "react-hot-toast";
// import Landmark from "./components/frontend/components/Landmark";
import SingleProduct from "./components/frontend/components/SingleProduct";
// import Login from "./components/frontend/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";
// import Register from "./components/frontend/auth/Register";
// import PrivateRoute from "./components/frontend/auth/Protected";

const NotFound = lazy(() => import("./components/frontend/pages/NotFound"));
const Landing = lazy(() => import("./components/frontend/landing/Landing"));
const Layout = lazy(() => import("./components/frontend/layout/Layout"));

function App() {
  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };
  return (
    <Suspense fallback={<FallbackLoading />}>
      <Toaster position="top-right" reverseOrder={false} />
      <Wrapper>
        <Routes>
          <Route element={<Layout />}>
            <Route exact path="/" element={<Landing />} />
            {/* <Route exact path="/#seeAbout" element={<Landmark />} /> */}
            <Route exact path="/:id" element={<SingleProduct />} />
            {/* <Route exact path="/login" element={<Login />} /> */}
            {/* <Route exact path="/register" element={<Register />} /> */}
          </Route>
            <Route exact path="*" element={<NotFound />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Wrapper>
    </Suspense>
  );
}

export default App;
