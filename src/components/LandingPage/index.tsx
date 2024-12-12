import React from 'react';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { Features } from './Features';
import { Services } from './Services';
import { Contact } from './Contact';
import { Footer } from './Footer';

export function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}