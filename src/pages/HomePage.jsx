import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackgroundSparkles from '../components/BackgroundSparkles';

export default function HomePage() {
  return (
    <div className="bg-color-background flex-1 flex flex-col">
      <Navbar />
      <main id="main-content" tabIndex="-1" className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-screen pt-32 flex items-center overflow-hidden" aria-labelledby="hero-heading">
          <div className="absolute inset-0 hero-pattern pointer-events-none opacity-40" aria-hidden="true"></div>
          <BackgroundSparkles />
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter items-center relative z-10">
            <div className="md:col-span-7 flex flex-col gap-8">
              <span className="inline-block border border-color-accent-cyan/30 bg-color-accent-cyan/5 text-color-accent-cyan font-label-mono text-xs py-2 px-5 rounded-full self-start tracking-widest" id="status-badge">
                SYSTEM STATUS: OPEN_FOR_HIRE
              </span>
              <h1 id="hero-heading" className="font-display-lg text-5xl md:text-7xl text-color-on-surface leading-[1.05] tracking-tighter">
                Yasiru Nilanga Damboragama <br />
                <span className="text-color-accent-cyan opacity-90">Digital Architect</span>
              </h1>
              <p className="font-body-lg text-lg text-color-on-surface-variant max-w-xl leading-relaxed">
                Engineering high-performance distributed systems with over 6 years of technical mastery. Specializing in cloud-native scaling and architectural integrity.
              </p>
              <div className="flex flex-wrap gap-5 mt-4">
                <a href="#projects" className="bg-color-accent-cyan text-color-on-primary-fixed px-10 py-5 rounded-sm font-headline-md text-sm uppercase tracking-widest flex items-center gap-3 focus:outline-2 focus:outline-color-accent-cyan" aria-label="View Projects Matrix">
                  View Matrixs
                  <span className="material-symbols-outlined text-base" aria-hidden="true">arrow_right_alt</span>
                </a>
                <a href="#contact" className="border border-white/20 bg-white/5 px-10 py-5 rounded-sm font-headline-md text-sm uppercase tracking-widest text-color-on-surface hover:bg-white/10 transition-all focus:outline-2 focus:outline-color-accent-cyan" aria-label="Initialize Contact">
                  Initialize Contact
                </a>
              </div>
            </div>
            <div className="md:col-span-5 relative mt-12 md:mt-0">
              <div className="relative w-full aspect-4/5 rounded-xl overflow-hidden shadow-2xl neon-border" aria-hidden="true">
                <img alt="Portrait of Yasiru Nilanga, Senior Systems Architect" className="w-full h-full object-cover grayscale-[0.2]" src={`${import.meta.env.BASE_URL}profile.jpg`} />
              </div>
              <div className="absolute -bottom-8 -left-8 glass-dark backdrop-blur-xl p-8 rounded-lg shadow-2xl flex items-center gap-5 animate-bounce-slow border border-color-accent-cyan/20" aria-hidden="true">
                <div className="bg-color-accent-cyan text-color-on-primary-fixed w-14 h-14 rounded-sm flex items-center justify-center shadow-[0_0_15px_rgba(0,242,255,0.4)]">
                  <span className="material-symbols-outlined font-bold">terminal</span>
                </div>
                <div>
                  <p className="font-label-mono text-[10px] uppercase tracking-[0.2em] text-color-on-surface-variant">LIFETIME_XP</p>
                  <p className="font-headline-md text-2xl text-color-accent-cyan font-bold">6+ Years</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Technical Stack Section */}
        <section className="py-24 bg-color-surface-container-lowest border-y border-white/5" aria-labelledby="stack-heading">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
            <p className="font-label-mono text-xs text-color-accent-cyan uppercase tracking-[0.3em] mb-16" id="stack-heading">Core Protocol Stack</p>
            <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24" role="list">
              {['hub', 'javascript', 'cloud', 'grid_view', 'data_object'].map((icon, i) => (
                <div key={i} className="flex flex-col items-center gap-5 group cursor-default" role="listitem">
                  <div className="w-20 h-20 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-color-accent-cyan/50 group-hover:bg-color-accent-cyan/10 transition-all duration-300" aria-hidden="true">
                    <span className="material-symbols-outlined text-color-accent-cyan text-5xl">{icon}</span>
                  </div>
                  <span className="font-label-mono text-xs uppercase tracking-widest text-color-on-surface-variant group-hover:text-color-accent-cyan transition-colors">
                    {['React', 'Node.js', 'AWS', 'K8S', 'Python'][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
