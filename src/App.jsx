import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";

import Home from "./sections/src/pages/Home";
import Membership from "./sections/src/pages/Membership";
import About from "./sections/src/pages/About";
import Leadership from "./sections/src/pages/Leadership";
import Departments from "./sections/src/pages/Departments";
import Events from "./sections/src/pages/Events";
import Media from "./sections/src/pages/Media";
import Partnership from "./sections/src/pages/Partnership";
import Give from "./sections/src/pages/Give";
import Contact from "./sections/src/pages/Contact";
import Footer from "./components/Footer";

// THIS FIXES QUICK LINKS - Auto scroll to top on every page change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/events" element={<Events />} />
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