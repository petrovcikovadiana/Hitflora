import "./App.css";
import Home from "./components/Home";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Sortiment from "./components/Sortiment";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sortiment" element={<Sortiment />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
