/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import Testimonials from "./pages/Testimonials";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import ContactSection from "./components/ContactSection";
import ExperienceSection from "./components/ExperienceSection";
import PageTransition from "./components/PageTransition";
import LoadingOverlay from "./components/LoadingOverlay";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Layout for sub-pages to give them a consistent header
function PageLayout({ children, title, subtitle }: { children: React.ReactNode, title: string, subtitle: string }) {
  return (
    <div className="pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent font-bold tracking-[0.4em] text-xs uppercase mb-4 block">{subtitle}</span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-gray-950 dark:text-white leading-[0.9]">
            {title}
          </h1>
        </motion.div>
      </div>
      {children}
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <PageTransition key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/about" element={
            <PageLayout title="About Me" subtitle="The Analyst Behind the Data">
              <AboutSection />
            </PageLayout>
          } />
          <Route path="/experience" element={
            <PageLayout title="Career Journey" subtitle="Professional Experience">
              <ExperienceSection />
            </PageLayout>
          } />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/portfolio" element={
            <PageLayout title="Work Portfolio" subtitle="Project Showcase">
              <PortfolioSection />
            </PageLayout>
          } />
          <Route path="/services" element={
            <PageLayout title="My Services" subtitle="What I Deliver">
              <ServicesSection />
            </PageLayout>
          } />
          <Route path="/contact" element={
            <PageLayout title="Let's Connect" subtitle="Contact Information">
              <ContactSection />
            </PageLayout>
          } />
        </Routes>
      </PageTransition>
    </AnimatePresence>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {loading && <LoadingOverlay key="loader" />}
      </AnimatePresence>
      <ScrollToTop />
      <CustomCursor />
      <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-white selection:bg-accent/30 selection:text-current overflow-hidden relative font-sans">
        {/* Global Background */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-white dark:bg-[#0a0a0a]" />
          <div className="absolute bottom-0 left-0 w-full h-[60%] bg-[radial-gradient(ellipse_at_bottom,_#bef264_0%,_transparent_70%)] dark:bg-[radial-gradient(ellipse_at_bottom,_#1a2608_0%,_transparent_70%)] opacity-20 dark:opacity-40 blur-3xl" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[70%] h-[50%] bg-[radial-gradient(circle,_#bef264_0%,_transparent_60%)] dark:bg-[radial-gradient(circle,_#121d05_0%,_transparent_60%)] opacity-10 dark:opacity-30 blur-3xl" />
        </div>

        <Navbar />

        <div className="relative z-10">
          <AnimatedRoutes />
        </div>

        <Footer />
      </div>
    </Router>
  );
}
