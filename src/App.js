import logo from "./logo.svg";
import "./App.css";
import UserNav from "./UserNav";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ArtPage from "./ArtPage";
import Contact from "./Contact";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Router>
        <UserNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/art" element={<ArtPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
