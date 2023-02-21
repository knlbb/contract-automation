import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import CreateAccount from './pages/CreateAccount';
import PlanAndPrice from './pages/Planandpricing';
import Errorr from './pages/Errorr';
import Features from './pages/Features';
import Demo from './pages/Demo';
import PrivacyPolicy from './pages/PrivacyPolicy';
import LegalNotice from './pages/LegalNotice';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create-account" element={<CreateAccount/>}/>
        <Route path="/features" element={<Features/>}/>
        <Route path="/request-a-demo" element={<Demo/>}/>
        <Route path="/plans-and-pricing" element={<PlanAndPrice/>}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
        <Route path="/legal-notice" element={<LegalNotice/>}/>
        <Route path="*" element={<Errorr/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
