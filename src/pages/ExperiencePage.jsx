import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackgroundSparkles from '../components/BackgroundSparkles';

export default function ExperiencePage() {
  return (
    <div className="bg-color-background flex-1 flex flex-col relative">
      <BackgroundSparkles />
      <div className="relative z-10 flex flex-col flex-1">
      <Navbar />
      <main className="pt-32 pb-section-gap flex-1" id="main-content" tabIndex="-1">
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-24" aria-labelledby="exp-hero-heading">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            <div className="md:col-span-8">
              <span className="font-label-mono text-label-mono text-color-primary-fixed-dim mb-4 block">SYSTEM ARCHITECTURE & ENGINEERING</span>
              <h1 id="exp-hero-heading" className="font-display-lg text-display-lg text-color-on-surface mb-6 leading-tight">
                Engineering digital <br /> <span className="text-color-primary-container">resilience & scale.</span>
              </h1>
              <p className="font-body-lg text-body-lg text-color-on-surface-variant max-w-2xl">
                A Senior Software Engineer specializing in distributed systems and high-performance cloud architecture. I bridge the gap between technical robustness and elegant user experience.
              </p>
            </div>
          </div>
        </section>
        {/* Add more experience/timeline/skills sections as needed, with proper aria-labels and roles */}
      </main>
      <Footer />
      </div>
    </div>
  );
}
