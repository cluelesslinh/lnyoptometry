import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import Home from './pages';
import Services from './pages/services';
import PaymentOptions from './pages/payment-options';
import Contact from './pages/contact';
import OurDoctors from './pages/our-doctors';
import Gallery from './pages/gallery';
import Reviews from './pages/reviews';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' exact element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/payment-options' element={<PaymentOptions />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/our-doctors' element={<OurDoctors />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='Reviews' element={<Reviews />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
