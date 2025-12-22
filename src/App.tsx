import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import InvestorPortalSettings from './pages/InvestorPortalSettings';
import MobileLogin from './pages/MobileLogin';
import './App.css';

function App() {
  return (
    <BrowserRouter basename="/investment-tracking-app">
      <Routes>
        <Route path="/" element={<Navigate to="/settings" replace />} />
        <Route path="/settings" element={<InvestorPortalSettings />} />
        <Route path="/mobile-login" element={<MobileLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
