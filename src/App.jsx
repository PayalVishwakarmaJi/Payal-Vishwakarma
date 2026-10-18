import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { lenisRef } from './lenis';
import Preloader from './components/Preloader';
import Cursor from './components/Cursor';
import Header from './components/Header';
import Hero from './components/Hero';
import Studio from './components/Studio';
import Works from './components/Works';
import Approach from './components/Approach';
import Process from './components/Process';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  // One smooth-scroll loop, skipped for visitors who prefer reduced motion.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    lenisRef.current = lenis;
    let raf;
    const loop = (t) => { lenis.raf(t); raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); lenis.destroy(); lenisRef.current = null; };
  }, []);

  return (
    <>
      <Preloader onDone={() => setLoaded(true)} />
      <Cursor />
      <Header />

      <div className="grain" aria-hidden="true" />
      <div className="cols" aria-hidden="true"><span /><span /><span /><span /></div>

      <main>
        <Hero go={loaded} />
        <Studio />
        <Works />
        <Approach />
        <Process />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
