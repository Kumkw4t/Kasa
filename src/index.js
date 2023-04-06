import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Home from './pages/Home'
import APropos from './pages/APropos'
import FicheLogement from './pages/FicheLogement'
import Header from './components/Header'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <main>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fiche_logement/:logementId" element={<FicheLogement />} />
      <Route path="/a_propos" element={<APropos />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </main>
    <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
