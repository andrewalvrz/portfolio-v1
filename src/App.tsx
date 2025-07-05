// App.tsx

import { useState, useEffect } from 'react';
import { useTrail, animated } from '@react-spring/web';
import './index.css';

import ParticleBackground from './components/ParticleBackground';
// Direct imports instead of lazy loading
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import DevBlog from './pages/DevBlog';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');
  const [showDevBlog, setShowDevBlog] = useState(false);  useEffect(() => {
    const sections = ['home', 'projects', 'about', 'contact'];
    const observers = sections.map(section => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setCurrentSection(section);
            }
          });
        },
        { threshold: 0.2,
          rootMargin: '0px 0px -20% 0px'
         }
      );

      const element = document.querySelector(`#${section}`);
      if (element) observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) {
        setMenuOpen(false);
      }
    };

    const handleTouch = () => {
      if (menuOpen) {
        setMenuOpen(false);
      }
    };

    const handleWheel = () => {
      if (menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('touchmove', handleTouch, { passive: true });
    window.addEventListener('wheel', handleWheel, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchmove', handleTouch);
      window.removeEventListener('wheel', handleWheel);
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };
  const handleRocketClick = () => {
    setShowDevBlog(!showDevBlog);
  };

  const items = [
    {
      href: '#home',
      label: 'Home',
      bg: 'bg-red-500/20',
      border: 'border-red-500/30',
      text: 'text-red-300',
      hover: 'hover:text-red-200',
    },
    {
      href: '#projects',
      label: 'Projects',
      bg: 'bg-yellow-500/20',
      border: 'border-yellow-500/30',
      text: 'text-yellow-300',
      hover: 'hover:text-yellow-200',
    },
    {
      href: '#about',
      label: 'About',
      bg: 'bg-green-500/20',
      border: 'border-green-500/30',
      text: 'text-green-300',
      hover: 'hover:text-green-200',
    },
    {
      href: '#contact',
      label: 'Contact',
      bg: 'bg-blue-500/20',
      border: 'border-blue-500/30',
      text: 'text-blue-300',
      hover: 'hover:text-blue-200',
    },
  ];

  const trail = useTrail(items.length, {
    transform: menuOpen ? 'translateY(0)' : 'translateY(-10px)',
    opacity: menuOpen ? 1 : 0,
    config: { duration: 100, tension: 200, friction: 20 },
    delay: menuOpen ? 100 : 0,
  });

  const getCurrentColors = () => {
    const colorMap = {
      home: 'bg-red-500/20 border-red-500/30',
      projects: 'bg-yellow-500/20 border-yellow-500/30',
      about: 'bg-green-500/20 border-green-500/30',
      contact: 'bg-blue-500/20 border-blue-500/30'
    };
    return colorMap[currentSection as keyof typeof colorMap] || colorMap.home;
  };  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <div className="fixed inset-0 w-full h-full">
        <ParticleBackground />
      </div>      {/* Main Portfolio Container */}
      <div className={`absolute inset-0 w-full min-h-screen transition-transform duration-700 ease-in-out ${showDevBlog ? '-translate-x-full' : 'translate-x-0'} overflow-y-auto`}>
        {/* Portfolio Navigation - stays within portfolio container */}
        <nav className="sticky top-4 left-4 z-50 float-left ml-4">
          <button
            onClick={toggleMenu}
            className={`backdrop-blur-md border p-2 rounded-md shadow-lg hover:bg-white/30 transition-all duration-300 ${getCurrentColors()}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
          <div className="mt-2 p-4">
            <ul className="space-y-2">
              {trail.map((style, index) => (
                <animated.li key={index} style={style}>
                  <a
                    href={items[index].href}
                    onClick={(e) => handleClick(e, items[index].href)}
                    className={`
                      block
                      ${items[index].bg}
                      backdrop-blur-sm
                      border
                      ${items[index].border}
                      p-2
                      rounded-md 
                      shadow-lg
                      ${items[index].text}
                      ${items[index].hover}
                      transition-all
                      duration-300
                      text-center
                    `}
                  >
                    {items[index].label}
                  </a>
                </animated.li>
              ))}
            </ul>
          </div>
        </nav>        {/* Portfolio Rocket Button */}
        <div className="sticky top-4 float-right mr-4 z-50">
          <button
            onClick={handleRocketClick}
            className="backdrop-blur-md border p-2 rounded-md shadow-lg transition-all duration-300 bg-gradient-to-r from-purple-500/20 via-pink-500/20 via-red-500/20 via-orange-500/20 via-yellow-500/20 via-green-500/20 via-blue-500/20 to-indigo-500/20 animate-pulse hover:animate-none hover:bg-gradient-to-r hover:from-purple-400/30 hover:via-pink-400/30 hover:via-red-400/30 hover:via-orange-400/30 hover:via-yellow-400/30 hover:via-green-400/30 hover:via-blue-400/30 hover:to-indigo-400/30 border-white/30"
            style={{
              background: 'linear-gradient(45deg, rgba(147, 51, 234, 0.2), rgba(219, 39, 119, 0.2), rgba(239, 68, 68, 0.2), rgba(245, 101, 101, 0.2), rgba(251, 191, 36, 0.2), rgba(34, 197, 94, 0.2), rgba(59, 130, 246, 0.2), rgba(99, 102, 241, 0.2))',
              backgroundSize: '400% 400%',
              animation: 'tiedye 3s ease-in-out infinite'
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-gray-300">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
            </svg>
          </button>
        </div>

        <main className="relative z-10">
          <Home />
          <Projects />
          <About />
          <Contact />
        </main>
      </div>      {/* Dev Blog Side Panel */}
      <div className={`absolute inset-0 w-full h-full transition-transform duration-700 ease-in-out ${showDevBlog ? 'translate-x-0' : 'translate-x-full'} overflow-y-auto`}>
        {/* Dev Blog Back Button */}
        <div className="sticky top-4 float-left ml-4 z-50">
          <button
            onClick={handleRocketClick}
            className="backdrop-blur-md border border-white/30 p-2 rounded-md shadow-lg hover:bg-white/30 transition-all duration-300 bg-gray-800/20"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-gray-300">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </button>
        </div>
        
        <DevBlog />
      </div>
    </div>
  );
}

export default App;
