import React, { useEffect } from 'react';
import Lenis from 'lenis';
import CanvasBackground from './components/CanvasBackground';
import Entry from './components/Entry';
import Intro from './components/Intro';
import Story from './components/Story';
import WorkCards from './components/WorkCards';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import BotanicalDecoration from './components/BotanicalDecoration';

function App() {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Initial clean up for Vite's strict mode during dev
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <CustomCursor />
      <div className="noise-overlay"></div>
      <CanvasBackground />

      <main className="relative z-10" style={{ overflow: 'hidden' }}>
        {/* Global Floating Botanicals positioned relative to the entire page scroll path */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none', zIndex: 0, height: '700vh', overflow: 'hidden' }}>
            <BotanicalDecoration style={{ top: '150vh', left: '-50px' }} flipHorizontal scale={1.5} type={2} />
            <BotanicalDecoration style={{ top: '280vh', right: '-100px' }} scale={2} type={1} />
            <BotanicalDecoration style={{ top: '420vh', left: '-80px' }} flipHorizontal flipVertical scale={1.2} type={2} />
            <BotanicalDecoration style={{ top: '580vh', right: '-50px' }} scale={1.8} type={1} />
        </div>

        <Entry />
        <Intro />
        <Story />
        <WorkCards />
        <Philosophy />
        <Services />
        <Contact />
      </main>
    </>
  );
}

export default App;
