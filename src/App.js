import "./App.css";
import Home from "./components/Home";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Sortiment from "./components/Sortiment";
import Kontakt from "./components/Kontakt";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sortiment" element={<Sortiment />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
