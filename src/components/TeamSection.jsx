import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import '../styles/TeamSection.css';

// Import team member images
import uttamSamaddar from '../assets/images/UttamSamaddar.png';
import sohamSamaddar from '../assets/images/SohamSamaddar.png';

const TeamSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const teamMembers = [
    {
      id: 1,
      name: 'Uttam Kumar Samaddar',
      role: 'Builder and Contractor',
      image: uttamSamaddar,
      bio: 'With over 25 years of experience in the construction industry, Uttam Kumar Samaddar leads our team with expertise in high-rise building construction and land development projects.'
    },
    {
      id: 2,
      name: 'Soham Samaddar',
      role: 'Engineer & Interior Designer',
      image: sohamSamaddar,
      bio: 'Soham Samaddar brings innovative design solutions and technical expertise to our projects, specializing in interior design and modern construction techniques.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="team-section section" id="team" ref={sectionRef}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Our <span className="highlight">Team</span>
        </motion.h2>

        <motion.div
          className="team-intro"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>
            Meet the dedicated professionals behind SAMADDAR ENTERPRISES. Our team combines years of experience with innovative approaches to deliver exceptional construction and interior design services.
          </p>
        </motion.div>

        <motion.div
          className="team-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              className="team-member"
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="team-image-container">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-image"
                  style={{ objectPosition: 'center' }}
                />
              </div>
              <div className="team-content">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>

                <div className="team-social">
                  <a href="#" className="social-icon" aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#" className="social-icon" aria-label="Email">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </a>
                  <a href="#" className="social-icon" aria-label="Phone">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2a9 9 0 0 0-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
