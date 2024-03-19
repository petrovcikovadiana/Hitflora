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

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <>
      <Router>
        <CookieBanner />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sortiment" element={<Sortiment />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/aktualne" element={<News />} />
          <Route path="/o-nas" element={<About />} />
          <Route path="/nase-sluzby" element={<Services />} />
          <Route path="/sortiment/:categoryName" element={<CategoryPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
