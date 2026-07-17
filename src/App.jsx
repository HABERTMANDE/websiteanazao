import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Leadership from "./pages/Leadership";
import Departments from "./pages/Departments";
import Events from "./pages/Events";
import Media from "./pages/Media";
import Partnership from "./pages/Partnership";
import Give from "./pages/Give";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/media" element={<Media />} />
        <Route path="/partnership" element={<Partnership />} />
        <Route path="/give" element={<Give />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

     <Footer />
    </BrowserRouter>
  );
}

export default App;