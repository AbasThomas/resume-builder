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

// const Templates = () => <h2 className="p-6">Templates Page</h2>;
const SignIn = () => <h2 className="p-6">Sign In Page</h2>;
const GetStarted = () => <h2 className="p-6">Get Started Page</h2>;

const App = () => {
  return (
    <Router>
      <Navbar />
      <Hero/>
      <Stats/>
      <Features/>
      <HowItWorks/>
      <Templates/>
      <Editor/>
      <Testimonials/>
      <Pricing/>
      <FAQ/>
      <Routes>
        <Route path="/templates" element={<Templates />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/get-started" element={<GetStarted />} />
      </Routes>
    </Router>
  );
};

export default App;
