import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DestinationsPage from './pages/DestinationsPage';
import LandingPage from './pages/LandingPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        
        {/* Legacy Support Redirects */}
        <Route path="/hostelrel.html" element={<Navigate to="/" replace />} />
        <Route path="/index.html" element={<Navigate to="/destinations" replace />} />
        <Route path="/login.html" element={<Navigate to="/contact" replace />} />
        <Route path="/login" element={<Navigate to="/contact" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;