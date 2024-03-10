import React, { useEffect, useState } from "react"; // Import React (pokud používáte React 17 nebo novější a nepoužíváte JSX v souboru, tento import není nutný)
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import Sortiment from "./components/Sortiment";
import Kontakt from "./components/Kontakt";
import Aktualne from "./components/Aktualne";
import About from "./components/About";
import Services from "./components/Services";
import CategoryPage from "./components/CategoryPage";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";

// Komponenta pro resetování posouvání
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div>
      <Router basename="/">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sortiment" element={<Sortiment />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/aktualne" element={<Aktualne />} />
          <Route path="/o-nas" element={<About />} />
          <Route path="/nase-sluzby" element={<Services />} />
          <Route path="/sortiment/:categoryName" element={<CategoryPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
