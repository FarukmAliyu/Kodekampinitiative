import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/navbar';
import Footer from './Components/footer';

import Homepage from './pages/homepage';
import OurStory from './pages/Our Story';
import OurApproach from './pages/Our Approach';
import Team from './pages/Team';
import ImpactFramework from './pages/Impact framework';
import EarlyChildhood from './pages/Earlychildhood';
import Stories from './pages/Stories';
import Opportunities from './pages/Opportunities';
import Funding from './pages/Funding';
import Volunteering from './pages/Volunteering';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ourstory" element={<OurStory />} />
        <Route path="/our-approach" element={<OurApproach />} />
        <Route path="/team" element={<Team />} />
        <Route path="/impact-framework" element={<ImpactFramework />} />
        <Route path="/early-childhood" element={<EarlyChildhood />} /> {/* ✅ FIXED */}
        <Route path="/stories" element={<Stories />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/funding" element={<Funding />} />
        <Route path="/volunteering" element={<Volunteering />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
