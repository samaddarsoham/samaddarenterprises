import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import '../styles/Preloader.css';

const Preloader = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);
  const preloaderRef = useRef(null);
  const samaddarRef = useRef(null);
  const enterprisesRef = useRef(null);
  const progressBarRef = useRef(null);
  const progressTextRef = useRef(null);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.floor(Math.random() * 10);
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 150);

    // GSAP animation for the preloader
    const tl = gsap.timeline();
    
    // Initial animation
    tl.fromTo(
      samaddarRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    )
    .fromTo(
      enterprisesRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.4"
    );

    return () => {
      clearInterval(interval);
      tl.kill();
    };
  }, []);

  // Handle completion
  useEffect(() => {
    if (progress === 100) {
      const tl = gsap.timeline();
      
      // Fade out animation
      tl.to(preloaderRef.current, { 
        opacity: 0, 
        duration: 0.5, 
        delay: 0.5,
        onComplete: () => {
          if (onLoadComplete) onLoadComplete();
        }
      });
    }
  }, [progress, onLoadComplete]);

  return (
    <div className="preloader" ref={preloaderRef}>
      <div className="preloader-content">
        <div className="preloader-logo">
          <motion.div 
            className="preloader-samaddar"
            ref={samaddarRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            SAMADDAR
          </motion.div>
          <motion.div 
            className="preloader-enterprises"
            ref={enterprisesRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            ENTERPRISES
          </motion.div>
        </div>
        
        <div className="preloader-progress-container">
          <div className="preloader-progress-bar" ref={progressBarRef}>
            <div 
              className="preloader-progress-fill" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="preloader-progress-text" ref={progressTextRef}>
            {progress}%
          </div>
        </div>
      </div>
      <div className="preloader-grid"></div>
      <div className="preloader-glow"></div>
    </div>
  );
};

export default Preloader;
