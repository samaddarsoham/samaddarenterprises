import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/Services.css';

// Import images
import residentialComplex from '../assets/images/Residentialcomplex.jpg';
import childrensPark from '../assets/images/Children\'sPark.jpg';
import highRiseBuildings from '../assets/images/HighRiseBuildings.jpg';
import commercialBuilding from '../assets/images/CommercialBuilding.jpg';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const pageRef = useRef(null);
  const isInView = useInView(pageRef, { once: true, amount: 0.1 });

  const services = [
    {
      id: 'building',
      title: 'High-rise Building Construction',
      description: 'We specialize in constructing G+4, G+5 buildings with modern architecture and quality materials. Our team of engineers and architects ensure structural integrity, aesthetic appeal, and compliance with all safety standards.',
      features: [
        'Residential apartment complexes',
        'Commercial buildings',
        'Mixed-use developments',
        'Structural engineering',
        'Architectural design',
        'Project management'
      ],
      image: highRiseBuildings,
      icon: '🏢'
    },
    {
      id: 'land',
      title: 'Land Development',
      description: 'Transform water-filled or undeveloped lands into construction-ready plots with our comprehensive land development services. We handle everything from drainage solutions to foundation preparation, ensuring your land is ready for construction.',
      features: [
        'Land clearing and grading',
        'Drainage systems installation',
        'Soil stabilization',
        'Foundation preparation',
        'Utility connections',
        'Environmental compliance'
      ],
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      icon: '🏗️'
    },
    {
      id: 'drainage',
      title: 'Drainage & Waterline',
      description: 'Our drainage and waterline services ensure proper water management for your property. We design and install efficient drainage systems, waterlines, and underground reservoirs for residential and commercial properties.',
      features: [
        'Stormwater drainage systems',
        'Waterline installation',
        'Underground reservoirs',
        'Sewage systems',
        'Water harvesting solutions',
        'Maintenance and repairs'
      ],
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
      icon: '🚿'
    },
    {
      id: 'interior',
      title: 'Interior Decoration',
      description: 'Transform your space with our luxury interior design and decoration services. We create stunning interiors for homes, flats, and offices using premium materials and finishes, tailored to your style and preferences.',
      features: [
        'Residential interiors',
        'Office and commercial spaces',
        'Custom furniture design',
        'Lighting solutions',
        'Material selection',
        'Color consultation'
      ],
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      icon: '🏠'
    },
    {
      id: 'parks',
      title: 'Parks & Playground Accessories',
      description: 'Create safe and engaging play spaces with our parks and playground development services. We design and install modern play equipment and accessories with a focus on safety, durability, and fun for children of all ages.',
      features: [
        'Playground equipment installation',
        'Safety surfacing',
        'Park benches and furniture',
        'Landscaping',
        'Shade structures',
        'Maintenance services'
      ],
      image: childrensPark,
      icon: '🛝'
    }
  ];

  useEffect(() => {
    // Parallax effects
    gsap.utils.toArray('.service-parallax').forEach(section => {
      const bg = section.querySelector('.service-bg');

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

    // Scroll to hash if present
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 100,
            behavior: 'smooth'
          });
        }, 500);
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="services-page" ref={pageRef}>
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
            Our Services
          </motion.h1>
          <motion.p
            className="page-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Comprehensive Construction & Interior Solutions
          </motion.p>
        </div>
      </div>

      <section className="services-intro section">
        <div className="container">
          <motion.div
            className="services-intro-content"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2>What We <span className="highlight">Offer</span></h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <strong>At SAMADDAR ENTERPRISES</strong>, we provide a comprehensive range of construction and interior services to meet all your needs. From building high-rise structures to creating beautiful interiors, our team of experts ensures quality workmanship and timely delivery.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Our services are designed to provide end-to-end solutions, allowing you to work with a single contractor for all your construction and interior needs. We take pride in our attention to detail, commitment to quality, and ability to bring your vision to life.
            </motion.p>

            <div className="services-nav">
              <h3>Quick Navigation:</h3>
              <div className="services-nav-links">
                {services.map(service => (
                  <a
                    key={service.id}
                    href={`#${service.id}`}
                    className="service-nav-link"
                  >
                    <span className="service-nav-icon">{service.icon}</span>
                    {service.title}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`service-detail section ${index % 2 === 0 ? 'even' : 'odd'}`}
        >
          <div className="service-parallax">
            <div className="service-bg" style={{ backgroundImage: `url(${service.image})` }}></div>
            <div className="service-overlay"></div>
          </div>

          <div className="container">
            <div className="service-detail-content">
              <motion.div
                className="service-detail-text"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="service-icon-large">{service.icon}</div>
                <h2 className="service-title">{service.title}</h2>
                <p className="service-description">{service.description}</p>

                <div className="service-features">
                  <h3>What We Provide:</h3>
                  <ul>
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <Link to="/contact" className="btn btn-primary">Request a Quote</Link>
              </motion.div>

              <motion.div
                className="service-detail-image"
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <img src={service.image} alt={service.title} />
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      <section className="services-cta section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Start Your Project?</h2>
            <p>
              Contact us today to discuss your construction or interior decoration needs. Our team is ready to bring your vision to life with quality craftsmanship and attention to detail.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
              <Link to="/projects" className="btn btn-outline">View Our Projects</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
