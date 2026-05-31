import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackgroundSparkles from '../components/BackgroundSparkles';

export default function ContactPage() {
  return (
    <div className="bg-color-background flex-1 flex flex-col relative">
      <BackgroundSparkles />
      <div className="relative z-10 flex flex-col flex-1">
      <Navbar />
      <main className="pt-32 pb-section-gap flex-1" id="main-content" tabIndex="-1">
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-24" aria-labelledby="contact-heading">
          <h1 id="contact-heading" className="font-display-lg text-display-lg text-color-on-surface mb-6 leading-tight">Contact</h1>
          <p className="font-body-lg text-body-lg text-color-on-surface-variant max-w-2xl">Contact form coming soon.</p>
        </section>
      </main>
      <Footer />
      </div>
    </div>
  );
}
