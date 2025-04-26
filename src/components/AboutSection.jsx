import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/AboutSection.css';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const milestones = [
    { year: '2004', title: 'Company Founded', description: 'SAMADDAR ENTERPRISES was established in Kolkata.', icon: '🏗️' },
    { year: '2008', title: 'First Major Project', description: 'Completed our first ₹1 Cr+ government project.', icon: '🏢' },
    { year: '2012', title: 'Expansion', description: 'Expanded services to include interior decoration and land development.', icon: '🏛️' },
    { year: '2016', title: 'Major Milestone', description: 'Crossed ₹25 Cr in total project value.', icon: '💰' },
    { year: '2020', title: 'Industry Recognition', description: 'Recognized as a leading contracting company in Eastern India.', icon: '🏆' }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const timeline = timelineRef.current;

    if (section && timeline) {
      // Animate the timeline on scroll
      gsap.to('.timeline-progress', {
        height: '100%',
        scrollTrigger: {
          trigger: timeline,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: true
        }
      });

      // Animate each milestone
      gsap.utils.toArray('.timeline-item').forEach((item, i) => {
        gsap.fromTo(item,
          { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
          {
            opacity: 1,
            x: 0,
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          }
        );
      });
    }
  }, []);

  return (
    <section className="about-section section" ref={sectionRef}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About <span className="highlight">Us</span>
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>SAMADDAR ENTERPRISES</h3>
            <p>
              SAMADDAR ENTERPRISES is a leading contracting company in Kolkata with over ₹75 Cr worth of Government & Private projects completed. With years of experience in the construction industry, we have established ourselves as a trusted name for quality construction and interior services.
            </p>
            <p>
              Our team of skilled professionals is dedicated to delivering exceptional results on every project, whether it's a high-rise building construction, land development, or interior decoration. We pride ourselves on our attention to detail, commitment to quality, and ability to complete projects on time and within budget.
            </p>
            <Link to="/about" className="btn btn-primary">Learn More About Us</Link>
          </motion.div>

          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Construction site" />
          </motion.div>
        </div>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Our <span className="highlight">Journey</span>
        </motion.h2>

        <div className="timeline" ref={timelineRef}>
          <div className="timeline-progress"></div>

          {milestones.map((milestone, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content">
                <div className="timeline-year">{milestone.year}</div>
                <h4 className="timeline-title">
                  <span className="milestone-icon">{milestone.icon}</span> {milestone.title}
                </h4>
                <p className="timeline-description">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
