import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import UnderConstruction from './pages/UnderConstruction';
import HomeSlider from './components/HomeSlider';
import AboutSection from './components/AboutSection';
import ServiceFeatures from './components/ServiceFeatures';
import DucatiPage from './pages/brands/Ducati';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen ">
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
            <Route path="/markalar/ducati" element={<DucatiPage />} />
            <Route path="/markalar/*" element={<UnderConstruction />} />
            <Route path="/kurumsal/*" element={<UnderConstruction />} />
            <Route path="/bayilerimiz/*" element={<UnderConstruction />} />
            <Route path="/fiyat-listeleri" element={<UnderConstruction />} />
            <Route path="/kampanyalar" element={<UnderConstruction />} />
            <Route path="/iletisim" element={<UnderConstruction />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
