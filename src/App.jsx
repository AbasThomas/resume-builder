// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Stats from './Components/Stats/Stats';
import Features from './Components/Featured/Features';
import HowItWorks from './Components/HowItWorks/HowItWorks';
import Templates from './Components/Templates/Templates';
import Editor from './Components/Editor/Editor';
import Testimonials from './Components/Testimonials/Testimonials';
import Pricing from './Components/Pricing/Pricing';
import FAQ from './Components/FAQ/FAQ';
import CTA from './Components/CTA/CTA';
import Footer from './Components/Footer/Footer';
import SignUp from './Components/SignUp/SignUp';

// Temporary SignIn Component
const SignIn = () => <h2 className="p-6">Sign In Page</h2>;

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Stats />
              <Features />
              <HowItWorks />
              <Templates />
              <Editor />
              <Testimonials />
              <Pricing />
              <FAQ />
              <CTA />
      <Footer />

            </>
          }
        />
        <Route path="/templates" element={<Templates />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

    </Router>
  );
};

export default App;
