"use client";

import { motion, AnimatePresence, useScroll, useSpring, useMotionValue, useMotionTemplate } from "motion/react";
import { Menu, X, Linkedin, Github, Mail, Sparkles } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'light' || saved === 'dark') return saved;
    }
    return 'dark';
  });

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem('theme', theme);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const handleMouseMove = ({ currentTarget, clientX, clientY }: React.MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Experience", href: "/experience" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname !== "/") return false;
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        onMouseMove={handleMouseMove}
        className={`fixed top-4 left-4 right-4 z-50 transition-colors duration-500 rounded-full group overflow-hidden ${
          scrolled 
            ? "bg-white/80 dark:bg-black/40 backdrop-blur-3xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] border border-gray-200/50 dark:border-white/10 py-3" 
            : "bg-white/5 dark:bg-transparent py-4"
        }`}
      >
        {/* Interactive Background Layer */}
        <motion.div 
          className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: useMotionTemplate`radial-gradient(150px circle at ${mouseX}px ${mouseY}px, rgba(var(--accent-rgb, 212, 163, 115), 0.15), transparent 80%)`
          }}
        />

        {/* Floating Animated Particles */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-24 h-24 bg-accent/5 rounded-full blur-3xl"
              animate={{
                x: [0, 50, 0],
                y: [0, 20, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                left: `${20 + i * 30}%`,
                top: `-20%`,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 flex items-center relative z-10">
          <Link to="/" className="flex items-center gap-0 flex-1">
            <span className="text-3xl md:text-4xl font-black tracking-tighter text-accent">A</span>
            <span className="text-3xl md:text-4xl font-black tracking-tighter text-gray-900 dark:text-white">S</span>
          </Link>

          <div className="hidden lg:flex items-center justify-center gap-1 flex-2 relative" onMouseLeave={() => setHoveredIndex(null)}>
            {navLinks.map((link, i) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  onMouseEnter={() => setHoveredIndex(i)}
                  className={`relative px-4 py-2 text-[15px] font-semibold transition-colors ${active ? "text-accent" : "text-gray-500 dark:text-white/40 hover:text-gray-900 dark:hover:text-white"}`}
                >
                  {hoveredIndex === i && (
                    <motion.div
                      layoutId="nav-hover"
                      className="absolute inset-0 bg-gray-100 dark:bg-white/10 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {active && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute left-4 right-4 -bottom-1 h-0.5 bg-accent rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center justify-end gap-6 flex-1">
            <button 
              onClick={toggleTheme}
              className="flex items-center border border-gray-200 dark:border-white/10 p-1 rounded-full w-16 md:w-20 h-8 md:h-10 relative transition-all bg-gray-100 dark:bg-white/5 cursor-pointer group"
            >
               <div className="flex items-center justify-between w-full px-1.5 md:px-2">
                 <svg className="w-3 md:w-3.5 h-3 md:h-3.5 text-yellow-500 fill-current" viewBox="0 0 24 24"><path d="M12 7a5 5 0 100 10 5 5 0 000-10z" /></svg>
                 <svg className="w-3 md:w-3.5 h-3 md:h-3.5 text-gray-400 dark:text-white/40 fill-current" viewBox="0 0 24 24"><path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
               </div>
               <motion.div 
                 animate={{ x: theme === 'dark' ? (isMobile ? 32 : 44) : 0 }}
                 transition={{ type: "spring", stiffness: 400, damping: 30 }}
                 className="absolute left-1 w-6 md:w-8 h-6 md:h-8 bg-black dark:bg-white rounded-full flex items-center justify-center shadow-lg"
               >
                 {theme === 'dark' ? (
                   <svg className="w-2.5 md:w-3.5 h-2.5 md:h-3.5 text-gray-900 fill-current" viewBox="0 0 24 24"><path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                 ) : (
                   <svg className="w-2.5 md:w-3.5 h-2.5 md:h-3.5 text-yellow-500 fill-current" viewBox="0 0 24 24"><path d="M12 7a5 5 0 100 10 5 5 0 000-10z" /></svg>
                 )}
               </motion.div>
            </button>

            <button 
              className="lg:hidden p-2 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-8 h-8 text-gray-900 dark:text-white" />
              ) : (
                <Menu className="w-8 h-8 text-gray-900 dark:text-white" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-white dark:bg-black/95 backdrop-blur-3xl p-8 pt-32 lg:hidden flex flex-col items-center justify-start overflow-y-auto"
          >
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-8 text-gray-950 dark:text-white p-2"
            >
              <X className="w-10 h-10" />
            </button>
            <div className="flex flex-col gap-10 text-center">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    to={link.href}
                    className={`text-4xl font-black italic uppercase tracking-tighter transition-colors ${isActive(link.href) ? "text-accent" : "text-gray-900 dark:text-white hover:text-accent"}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
