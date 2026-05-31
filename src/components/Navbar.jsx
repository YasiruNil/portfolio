import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/experience#skills' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-color-surface/95 py-2' : 'bg-color-surface/80 py-4'} backdrop-blur-lg border-b border-color-outline-variant/20 shadow-lg`} aria-label="Main Navigation">
      <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <Link to="/" className="font-headline-md text-[20px] font-bold tracking-tight text-color-on-surface" aria-label="Home">
          YASIRU N. <span className="text-color-primary-fixed-dim">| ARCHITECT</span>
        </Link>
        <div className="hidden md:flex items-center space-x-10" role="menubar">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-body-md transition-colors ${location.pathname === link.path ? 'text-color-primary-fixed-dim border-b-2 border-color-primary-fixed-dim pb-1' : 'text-color-on-surface-variant hover:text-color-primary-fixed-dim'}`}
              role="menuitem"
              tabIndex={0}
              aria-current={location.pathname === link.path ? 'page' : undefined}
            >
              {link.name}
            </Link>
          ))}
          <button onClick={() => navigate('/contact')} className="bg-color-primary-fixed-dim text-color-on-primary-fixed px-6 py-2.5 rounded font-label-mono text-label-mono hover:opacity-90 transition-all shadow-lg shadow-color-primary-fixed-dim/20 focus:outline-2 focus:outline-color-primary-fixed-dim" aria-label="Hire Me">Hire Me</button>
        </div>
        <button className="md:hidden text-color-primary-fixed-dim" aria-label="Open menu">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  );
}
