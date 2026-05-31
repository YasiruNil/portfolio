import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full py-12 bg-color-surface-container-lowest border-t border-color-outline-variant/20" aria-label="Footer">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop space-y-8 md:space-y-0">
        <div className="flex flex-col items-center md:items-start">
          <span className="font-label-mono text-label-mono text-color-primary-fixed-dim mb-2 uppercase tracking-widest">Yasiru Nilanga</span>
          <p className="font-body-md text-body-md text-color-on-surface-variant text-center md:text-left">© 2024. Architected with technical precision.</p>
        </div>
        <div className="flex space-x-10">
          {['LINKEDIN', 'GITHUB', 'TWITTER', 'STACKOVERFLOW'].map(social => (
            <a key={social} className="font-label-mono text-[13px] text-color-on-surface-variant hover:text-color-primary-fixed-dim transition-all focus:outline-2 focus:outline-color-primary-fixed-dim" href="#" tabIndex={0} aria-label={social}>
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
