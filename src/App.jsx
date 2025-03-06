import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import UnderConstruction from './pages/UnderConstruction';
import HomeSlider from './components/HomeSlider';
import AboutSection from './components/AboutSection';
import ServiceFeatures from './components/ServiceFeatures';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-[#1C1F26]">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <HomeSlider />
                <AboutSection />
                <ServiceFeatures />
              </>
            } />
            <Route path="/markalar/*" element={<UnderConstruction />} />
            <Route path="/kurumsal/*" element={<UnderConstruction />} />
            <Route path="/bayilerimiz/*" element={<UnderConstruction />} />
            <Route path="/fiyat-listeleri" element={<UnderConstruction />} />
            <Route path="/kampanyalar" element={<UnderConstruction />} />
            <Route path="/iletisim" element={<UnderConstruction />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
