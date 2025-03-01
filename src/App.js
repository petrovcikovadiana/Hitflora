import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";

import Home from "./components/pages/Home";
import Sortiment from "./components/pages/Sortiment";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import CategoryPage from "./components/pages/CategoryPage";
import CookieBanner from "./components/pages/CookieBanner";
import News from "./components/pages/News";
import Contact from "./components/pages/Contact";
import { Link } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full pt-24 px-5 w-full">
      <img
        src={process.env.PUBLIC_URL + "/assets/svg/krtek.svg"}
        alt="krtek"
        className="w-56 pb-2"
      />
      <h1 className="text-3xl text-center pb-2 ">
        404 - Ups, někde se stala chyba!
      </h1>
      <p className="pb-5 text-center">
        Omlouvám se, ale stránka, kterou hledáte, neexistuje.
      </p>
      <Link to="/">
        <button className="bg-headerGreen items-center text-white px-3 py-3 rounded-xl">
          Vrátit se do zahrady
        </button>
      </Link>
    </div>
  );
};

function App() {
  return (
    <>
      <Router>
        <CookieBanner />
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/sortiment" element={<Sortiment />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/aktualne" element={<News />} />
          <Route path="/o-nas" element={<About />} />
          <Route path="/nase-sluzby" element={<Services />} />
          <Route
            path="/sortiment/:categoryName"
            element={<CategoryPage />}
          />{" "}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
