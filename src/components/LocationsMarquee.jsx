import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import '../styles/LocationsMarquee.css';

const LocationsMarquee = () => {
  const marqueeRef = useRef(null);
  const textRef = useRef(null);
  const locations = [
    'Kalyani', 'Thakurpukur', 'Newtown', 'Patuli', 'Santragachi',
    'Howrah', 'Shibpur', 'Marshelin Society', 'Golf Green', 'Kolkata'
  ];

  useEffect(() => {
    const marquee = marqueeRef.current;
    const text = textRef.current;

    // Clone the text for seamless scrolling
    const textWidth = text.offsetWidth;
    const cloneText = text.cloneNode(true);
    marquee.appendChild(cloneText);

    // GSAP animation for infinite scrolling
    const tl = gsap.timeline({ repeat: -1 });

    tl.to(marquee.children, {
      x: -textWidth,
      duration: 20,
      ease: 'linear'
    });

    // Pause on hover
    marquee.addEventListener('mouseenter', () => {
      tl.pause();
    });

    marquee.addEventListener('mouseleave', () => {
      tl.play();
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="locations-marquee-container">
      <div className="locations-marquee" ref={marqueeRef}>
        <div className="locations-text" ref={textRef}>
          {locations.map((location, index) => (
            <span key={index} className="location-item">
              {location} <span className="separator">—</span>
            </span>
          ))}
          <span className="location-item">More...</span>
        </div>
      </div>


    </div>
  );
};

export default LocationsMarquee;
