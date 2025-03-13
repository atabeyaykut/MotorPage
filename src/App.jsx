import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import UnderConstruction from './pages/UnderConstruction';
import HomeSlider from './components/HomeSlider';
import AboutSection from './components/AboutSection';
import ServiceFeatures from './components/ServiceFeatures';
import DucatiPage from './pages/brands/Ducati';
import BrandsPage from './pages/brands';
import Footer from './components/Footer';
import ScramblerDucatiPage from './pages/brands/ScramblerDucati';
import TriumphPage from './pages/brands/Triumph';
import MotoMoriniPage from './pages/brands/MotoMorini';
import ItaljetPage from './pages/brands/Italjet';
import RoyalAlloyPage from './pages/brands/RoyalAlloy';
import KamaxPage from './pages/brands/Kamax';
import ElectricMotionPage from './pages/brands/ElectricMotion';
import MotorcycleDetailPage from './pages/motorcycle/MotorcycleDetailPage';
import FanticPage from './pages/brands/Fantic';
import TeamPage from './pages/team';
import About from './pages/About';

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
            <Route path="/markalar" element={<BrandsPage />} />
            <Route path="/markalar/ducati" element={<DucatiPage />} />
            <Route path="/markalar/triumph" element={<TriumphPage />} />
            <Route path="/markalar/moto-morini" element={<MotoMoriniPage />} />
            <Route path="/markalar/scrambler-ducati" element={<ScramblerDucatiPage />} />
            <Route path="/markalar/italjet" element={<ItaljetPage />} />
            <Route path="/markalar/fantic" element={<FanticPage />} />
            <Route path="/markalar/royal-alloy" element={<RoyalAlloyPage />} />
            <Route path="/markalar/kamax" element={<KamaxPage />} />
            <Route path="/markalar/electric-motion" element={<ElectricMotionPage />} />
            <Route path="/markalar/:brand/:model" element={<MotorcycleDetailPage />} />
            <Route path="/markalar/*" element={<UnderConstruction />} />
            <Route path="/kurumsal/ekibimiz" element={<TeamPage />} />
            <Route path="/kurumsal/hakkimizda" element={<About />} />
            <Route path="/kurumsal" element={<TeamPage />} />
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
