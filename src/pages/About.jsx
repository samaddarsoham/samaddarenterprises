import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TeamSection from '../components/TeamSection';
import '../styles/About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const pageRef = useRef(null);
  const statsRef = useRef(null);
  const counterRefs = useRef([]);
  const isInView = useInView(pageRef, { once: true, amount: 0.1 });

  const stats = [
    { value: 75, label: 'Extension Projects', icon: '🏢' },
    { value: 299, label: 'Interior Projects', icon: '🏠' },
    { value: 5, label: 'Children Parks', icon: '🛝' },
    { value: 50, label: 'Cr+ Government Projects', prefix: '₹', icon: '🏛️' },
    { value: 25, label: 'Cr+ Private Projects', prefix: '₹', icon: '💼' }
  ];

  // Team members are now defined in the TeamSection component

  useEffect(() => {
    // Counter animations
    if (statsRef.current) {
      counterRefs.current.forEach((counter, index) => {
        const targetValue = parseInt(counter.getAttribute('data-target'));

        gsap.to(counter, {
          innerHTML: targetValue,
          duration: 2.5,
          ease: 'power2.out',
          snap: { innerHTML: 1 },
          scrollTrigger: {
            trigger: counter,
            start: 'top 80%',
            toggleActions: 'play none none none'
          },
          onUpdate: () => {
            counter.innerHTML = Math.ceil(counter.innerHTML);
          }
        });
      });
    }

    // Parallax effects
    gsap.utils.toArray('.parallax-section').forEach(section => {
      const bg = section.querySelector('.parallax-bg');

      gsap.to(bg, {
        y: '30%',
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="about-page" ref={pageRef}>
      <div className="page-header parallax-section">
        <div className="parallax-bg"></div>
        <div className="page-header-overlay"></div>
        <div className="container">
          <motion.h1
            className="page-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            About Us
          </motion.h1>
          <motion.p
            className="page-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Building Excellence, Delivering Quality
          </motion.p>
        </div>
      </div>

      <section className="about-company section">
        <div className="container">
          <div className="about-company-content">
            <motion.div
              className="about-company-text"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2>Our <span className="highlight">Story</span></h2>
              <p>
                SAMADDAR ENTERPRISES was founded in 2004 with a vision to provide high-quality construction and interior services in Kolkata and surrounding areas. What started as a small contracting company has now grown into a trusted name in the industry with over ₹75 Cr worth of Government & Private projects completed.
              </p>
              <p>
                Our journey has been marked by a commitment to excellence, innovation, and client satisfaction. We have successfully completed numerous projects ranging from high-rise buildings to luxury interiors, each reflecting our dedication to quality and craftsmanship.
              </p>
              <p>
                Today, SAMADDAR ENTERPRISES stands as a symbol of reliability and expertise in the construction industry, with a team of skilled professionals who share our passion for creating exceptional spaces.
              </p>
            </motion.div>

            <motion.div
              className="about-company-image"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Construction site" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="about-mission section">
        <div className="container">
          <div className="mission-values">
            <motion.div
              className="mission-box"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>Our Mission</h3>
              <p>
                To deliver exceptional construction and interior solutions that exceed client expectations, while maintaining the highest standards of quality, safety, and sustainability.
              </p>
            </motion.div>

            <motion.div
              className="vision-box"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3>Our Vision</h3>
              <p>
                To be the most trusted and respected construction company in Eastern India, known for our innovative approach, quality workmanship, and commitment to client satisfaction.
              </p>
            </motion.div>

            <motion.div
              className="values-box"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3>Our Values</h3>
              <ul>
                <li>Quality Excellence</li>
                <li>Integrity & Transparency</li>
                <li>Client Satisfaction</li>
                <li>Innovation</li>
                <li>Teamwork</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="about-stats section" ref={statsRef}>
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our <span className="highlight">Achievements</span>
          </motion.h2>

          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-box"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-value">
                  {stat.prefix && <span>{stat.prefix}</span>}
                  <span ref={el => counterRefs.current[index] = el} data-target={stat.value}>0</span>
                  {stat.suffix && <span>{stat.suffix}</span>}
                </div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <TeamSection />
    </div>
  );
};

export default About;
