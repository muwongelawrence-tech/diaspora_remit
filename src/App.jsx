import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import LoadingScreen from "./components/LoadingScreen";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

const Home = Loadable(lazy(() => import("./pages/Home")));
const About = Loadable(lazy(() => import("./pages/About")));
const CommingSoon = Loadable(lazy(() => import("./pages/ComingSoon")));
const NotFound = Loadable(lazy(() => import("./pages/NotFound")));

function App() {
  return (
    <div className="w-full h-screen">
      <Toaster position="top-right" />
      <>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/coming" exact element={<CommingSoon />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
