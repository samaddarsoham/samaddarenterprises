import { useEffect } from 'react';
import Hero from '../components/Hero';
import LocationsMarquee from '../components/LocationsMarquee';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import TeamSection from '../components/TeamSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    // Initialize GSAP animations
    const sections = document.querySelectorAll('.section');

    // Make sure all sections are visible initially
    gsap.set(sections, { opacity: 1, y: 0 });

    sections.forEach((section) => {
      // Create a timeline for each section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 80%', // Trigger when 20% of the section is visible
          end: 'top 50%',
          toggleActions: 'play none none reverse'
        }
      });

      // Add animations to the timeline
      tl.fromTo(section,
        { opacity: 0.5, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
      );
    });

    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="home-page">
      <Hero />
      <LocationsMarquee />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
};

export default Home;
