
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPageAlex from './pages/LandingPageAlex';
import LandingPageSophie from './pages/LandingPageSophie';
import LandingPageMartin from './pages/LandingPageMartin';
import ThankYouPage from './pages/ThankYouPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/offre" element={<LandingPageAlex />} />
        <Route path="/bilan" element={<LandingPageSophie />} />
        <Route path="/pneus" element={<LandingPageMartin />} />
        <Route path="/merci" element={<ThankYouPage />} />
        <Route path="/" element={<Navigate to="/offre" replace />} />
        <Route path="*" element={<Navigate to="/offre" replace />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
