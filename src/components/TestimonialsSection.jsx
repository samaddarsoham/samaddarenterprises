import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import '../styles/TestimonialsSection.css';

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const testimonialsRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      position: 'Property Owner',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      quote: 'SAMADDAR ENTERPRISES transformed my property beyond expectations. Their attention to detail and quality of work is exceptional. The team was professional, punctual, and delivered the project on time.'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      position: 'Interior Design Client',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      quote: 'I hired SAMADDAR ENTERPRISES for my home interior and I\'m extremely satisfied with the results. They understood my vision perfectly and executed it with precision. The craftsmanship is outstanding.'
    },
    {
      id: 3,
      name: 'Amit Banerjee',
      position: 'Commercial Project Developer',
      image: 'https://randomuser.me/api/portraits/men/62.jpg',
      quote: 'Working with SAMADDAR ENTERPRISES on our commercial building project was a great experience. Their team is knowledgeable, efficient, and committed to delivering high-quality results within budget.'
    },
    {
      id: 4,
      name: 'Sunita Patel',
      position: 'Residential Client',
      image: 'https://randomuser.me/api/portraits/women/58.jpg',
      quote: 'The team at SAMADDAR ENTERPRISES is exceptional. They handled our residential project with utmost care and professionalism. The quality of construction and finishing is impeccable.'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  useEffect(() => {
    if (isInView && testimonialsRef.current) {
      gsap.fromTo(
        '.testimonial-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power2.out'
        }
      );
    }
  }, [isInView]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="testimonials-section section" ref={sectionRef}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Client <span className="highlight">Testimonials</span>
        </motion.h2>

        <div className="testimonials-container" ref={testimonialsRef}>
          <div className="testimonials-wrapper" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className={`testimonial-card ${index === activeIndex ? 'active' : ''}`}>
                <div className="testimonial-content">
                  <div className="quote-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V216zm224 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H288c-35.3 0-64-28.7-64-64V216z"/>
                    </svg>
                  </div>
                  <p className="testimonial-quote">{testimonial.quote}</p>
                  <div className="testimonial-author">
                    <div className="author-image">
                      <img src={testimonial.image} alt={testimonial.name} />
                    </div>
                    <div className="author-info">
                      <h4 className="author-name">{testimonial.name}</h4>
                      <p className="author-position">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>

          <button
            className="testimonial-arrow prev"
            onClick={() => setActiveIndex(prevIndex => (prevIndex - 1 + testimonials.length) % testimonials.length)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
            </svg>
          </button>

          <button
            className="testimonial-arrow next"
            onClick={() => setActiveIndex(prevIndex => (prevIndex + 1) % testimonials.length)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
