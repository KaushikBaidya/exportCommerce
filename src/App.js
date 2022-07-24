import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { FallbackLoading } from "./components/Loading";
import "./App.css";

const NotFound = lazy(() => import("./components/frontend/pages/NotFound"));
const Landing = lazy(() => import("./components/frontend/landing/Landing"));
const Layout = lazy(() => import("./components/frontend/layout/Layout"));

function App() {
  return (
    <Suspense fallback={<FallbackLoading />}>
      <Routes>
        <Route element={<Layout />}>
          <Route exact path="/" element={<Landing />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
