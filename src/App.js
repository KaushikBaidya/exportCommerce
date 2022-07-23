import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { FallbackLoading } from "./components/Loading";
import "./App.css";
const About = lazy(() => import("./components/frontend/pages/About"));
const Contact = lazy(() => import("./components/frontend/pages/Contact"));
const NotFound = lazy(() => import("./components/frontend/pages/NotFound"));
const Project = lazy(() => import("./components/frontend/pages/Project"));
const Service = lazy(() => import("./components/frontend/pages/Service"));
const Landing = lazy(() => import("./components/frontend/landing/Landing"));
const Layout = lazy(() => import("./components/frontend/layout/Layout"));
// import VideoProject from "./components/frontend/components/VideoProject";

function App() {
  return (
    <Suspense fallback={<FallbackLoading />}>
      <Routes>
        <Route element={<Layout />}>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/service" element={<Service />} />
          <Route exact path="/project" element={<Project />} />
          <Route exact path="/contact" element={<Contact />} />
          {/* <Route exact path="/video" element={<VideoProject />} /> */}
          {/* <Route exact path="/media" element={<Media />} /> */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
