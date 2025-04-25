import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/ServicesSection.css';

// Import images
import residentialComplex from '../assets/images/Residentialcomplex.jpg';
import childrensPark from '../assets/images/Children\'sPark.jpg';
import highRiseBuildings from '../assets/images/HighRiseBuildings.jpg';
import commercialBuilding from '../assets/images/CommercialBuilding.jpg';

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const services = [
    {
      id: 'building',
      icon: '🏢',
      title: 'High-rise Building Construction',
      description: 'Specialized in G+4, G+5 building construction with modern architecture and quality materials.',
      image: highRiseBuildings
    },
    {
      id: 'land',
      icon: '🏗️',
      title: 'Land Development',
      description: 'Transform water-filled lands into construction-ready plots with proper drainage and foundation.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 'drainage',
      icon: '🚿',
      title: 'Drainage & Waterline',
      description: 'Installation of drainage systems, waterlines, and underground reservoirs for residential and commercial properties.',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
    },
    {
      id: 'interior',
      icon: '🏠',
      title: 'Interior Decoration',
      description: 'Luxury interior design and decoration for homes, flats, and offices with premium materials and finishes.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
      id: 'parks',
      icon: '🛝',
      title: 'Parks & Playground Accessories',
      description: 'Design and installation of children\'s parks with modern play equipment and safety features.',
      image: childrensPark
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section className="services-section section" id="services" ref={sectionRef}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Our <span className="highlight">Services</span>
        </motion.h2>

        <motion.div
          className="services-intro"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <strong>At SAMADDAR ENTERPRISES</strong>, we offer a comprehensive range of construction and interior services to meet all your needs. From building high-rise structures to creating beautiful interiors, our team of experts ensures quality workmanship and timely delivery.
          </motion.p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="service-card"
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3), 0 0 15px rgba(255, 215, 0, 0.2)'
              }}
              id={service.id}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
              <Link to={`/services#${service.id}`} className="service-link">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="services-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link to="/services" className="btn btn-primary">View All Services</Link>
          <Link to="/contact" className="btn btn-outline">Request a Quote</Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
