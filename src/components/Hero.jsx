import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import '../styles/Hero.css';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

const Hero = () => {
  const heroRef = useRef(null);
  const counterRefs = useRef([]);
  const bgRef = useRef(null);
  const samaddarRef = useRef(null);
  const enterprisesRef = useRef(null);
  const taglineRef = useRef(null);
  const descriptionRef = useRef(null);
  const statsRef = useRef(null);
  const experienceRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  // Animation for the hero section - simplified to avoid issues
  useEffect(() => {
    // Only animate the counters, no other animations to avoid content disappearing
    counterRefs.current.forEach((counter, index) => {
      const targetValue = parseInt(counter.getAttribute('data-target'));

      // Set initial value
      counter.innerHTML = "0";

      // Simple counter animation
      gsap.to({
        value: 0
      }, {
        value: targetValue,
        duration: 2,
        delay: 0.5 + (index * 0.2),
        ease: "power1.inOut",
        onUpdate: function() {
          const value = Math.round(this.targets()[0].value);
          counter.innerHTML = value;
        }
      });
    });

    // Simple scroll parallax for background
    gsap.to(bgRef.current, {
      y: '20%',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-background" ref={bgRef}>
        <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Construction background" className="hero-image" />
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-grid-highlight"></div>

      <div className="hero-container">
        <div className="hero-main-content">
          <div className="hero-tagline-container">
            <h2 className="hero-tagline" ref={taglineRef}>
              We Build, You Stay
            </h2>
          </div>

          <div className="hero-title-container" ref={samaddarRef}>
            <h1 className="hero-title">
              <span className="hero-title-samaddar">SAMADDAR</span>
              <span className="hero-title-enterprises" ref={enterprisesRef}>ENTERPRISES</span>
            </h1>
          </div>

          <div className="hero-buttons">
            <Link to="/projects" className="btn btn-primary">
              <div className="tech-icon"></div>
              View Our Projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link to="/contact" className="btn">
              <div className="tech-icon"></div>
              Contact Us
            </Link>
          </div>

          <div className="stats-section" ref={statsRef}>
            <div className="experience-badge" ref={experienceRef}>
              <div className="experience-years">15+</div>
              <div className="experience-text">Years Experience</div>
            </div>

            <div className="achievements">
              <div className="achievement-item">
                <div className="achievement-number">
                  <span ref={el => counterRefs.current[0] = el} data-target="75">0</span>+
                </div>
                <div className="achievement-label">Extension Projects</div>
              </div>

              <div className="achievement-item">
                <div className="achievement-number">
                  <span ref={el => counterRefs.current[1] = el} data-target="299">0</span>+
                </div>
                <div className="achievement-label">Interior Projects</div>
              </div>

              <div className="achievement-item">
                <div className="achievement-number">
                  <span ref={el => counterRefs.current[2] = el} data-target="5">0</span>+
                </div>
                <div className="achievement-label">Children Parks</div>
              </div>

              <div className="achievement-item">
                <div className="achievement-number">₹<span ref={el => counterRefs.current[3] = el} data-target="50">0</span> Cr+</div>
                <div className="achievement-label">Government Projects</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator" ref={scrollIndicatorRef}>
          <div className="scroll-text">Scroll Down</div>
          <div className="scroll-icon"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
