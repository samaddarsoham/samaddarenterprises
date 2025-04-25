import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/ProjectsSection.css';

// Import images
import residentialComplex from '../assets/images/Residentialcomplex.jpg';
import childrensPark from '../assets/images/Children\'sPark.jpg';
import highRiseBuildings from '../assets/images/HighRiseBuildings.jpg';
import commercialBuilding from '../assets/images/CommercialBuilding.jpg';

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'construction', name: 'Construction' },
    { id: 'interior', name: 'Interior' },
    { id: 'parks', name: 'Parks' }
  ];

  const projects = [
    {
      id: 1,
      title: 'High-rise Apartment Complex',
      category: 'construction',
      image: residentialComplex,
      description: 'G+5 residential apartment complex with modern amenities and underground parking.'
    },
    {
      id: 2,
      title: 'Luxury Villa Interior',
      category: 'interior',
      image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      description: 'Complete interior decoration for a luxury villa with premium materials and custom furniture.'
    },
    {
      id: 3,
      title: 'Children\'s Park',
      category: 'parks',
      image: childrensPark,
      description: 'Modern children\'s park with safe play equipment and landscaped surroundings.'
    },
    {
      id: 4,
      title: 'Commercial Building',
      category: 'construction',
      image: commercialBuilding,
      description: 'Multi-story commercial building with modern architecture and energy-efficient design.'
    },
    {
      id: 5,
      title: 'Office Interior',
      category: 'interior',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
      description: 'Contemporary office interior with ergonomic workspaces and collaborative areas.'
    },
    {
      id: 6,
      title: 'High-rise Buildings',
      category: 'construction',
      image: highRiseBuildings,
      description: 'Modern high-rise buildings with contemporary architecture and premium amenities.'
    }
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  const openLightbox = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="projects-section section" id="projects" ref={sectionRef}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Our <span className="highlight">Projects</span>
        </motion.h2>

        <motion.div
          className="projects-intro"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>
            Explore our portfolio of completed projects across various categories. From high-rise buildings to luxury interiors, we take pride in our quality workmanship and attention to detail.
          </p>
        </motion.div>

        <motion.div
          className="project-categories"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {categories.map(category => (
            <motion.button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <AnimatePresence>
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                className="project-card"
                variants={itemVariants}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                whileHover={{ y: -10 }}
                onClick={() => openLightbox(project)}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-overlay">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-category">{categories.find(cat => cat.id === project.category)?.name}</p>
                  <button className="view-project-btn">
                    View Project
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="projects-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link to="/projects" className="btn btn-primary">View All Projects</Link>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="lightbox-close" onClick={closeLightbox}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                </svg>
              </button>
              <div className="lightbox-image">
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>
              <div className="lightbox-details">
                <h3>{selectedProject.title}</h3>
                <p className="lightbox-category">{categories.find(cat => cat.id === selectedProject.category)?.name}</p>
                <p className="lightbox-description">{selectedProject.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
