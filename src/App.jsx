import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Membership from "./pages/Membership";
import About from "./pages/About";
import Leadership from "./pages/Leadership";
import Departments from "./pages/Departments";
import Events from "./pages/Events";
import Media from "./pages/Media";
import Partnership from "./pages/Partnership";
import Partner from "./pages/Partner";
import PartnerRegister from "./pages/PartnerRegister";
import PartnerGive from "./pages/PartnerGive";
import ProjectDetail from "./pages/ProjectDetail";
import Give from "./pages/Give";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Admin from "./pages/Admin";
import Footer from "./components/Footer";

// FIXES QUICK LINKS - Auto scroll to top on every page change
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
        <Route path="/partner" element={<Partner />} />
        <Route path="/partner/register" element={<PartnerRegister />} />
        {/* ✅ FIXED: /partner/give MUST be BEFORE /partner/:slug */}
        <Route path="/partner/give" element={<PartnerGive />} />
        <Route path="/partner/:slug" element={<ProjectDetail />} />
        <Route path="/give" element={<Give />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        {/* ✅ ADDED: Admin Dashboard */}
        <Route path="/admin" element={<Admin />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;