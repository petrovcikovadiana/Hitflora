import "./App.css";
import Home from "./components/Home";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Sortiment from "./components/Sortiment";
import Kontakt from "./components/Kontakt";
import Aktualne from "./components/Aktualne";
import About from "./components/About";
import { Link } from "react-router-dom";
import CategoryPage from "./components/CategoryPage";
import Services from "./components/Services";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sortiment" element={<Sortiment />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/aktualne" element={<Aktualne />} />
          <Route path="/o_nas" element={<About />} />
          <Route path="/nase_sluzby" element={<Services />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
