import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import '../styles/Projects.css';

// Import images
import residentialComplex from '../assets/images/Residentialcomplex.jpg';
import childrensPark from '../assets/images/Children\'sPark.jpg';
import highRiseBuildings from '../assets/images/HighRiseBuildings.jpg';
import commercialBuilding from '../assets/images/CommercialBuilding.jpg';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const pageRef = useRef(null);
  const isInView = useInView(pageRef, { once: true, amount: 0.1 });

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'construction', name: 'Construction' },
    { id: 'interior', name: 'Interior' },
    { id: 'parks', name: 'Parks' },
    { id: 'government', name: 'Government' },
    { id: 'private', name: 'Private' }
  ];

  const projects = [
    {
      id: 1,
      title: 'High-rise Apartment Complex',
      category: 'construction',
      type: 'private',
      location: 'Newtown, Kolkata',
      year: '2022',
      image: commercialBuilding,
      description: 'G+5 residential apartment complex with modern amenities and underground parking. The project included 24 luxury apartments with premium finishes and smart home features.',
      gallery: [
        commercialBuilding,
        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1153&q=80'
      ]
    },
    {
      id: 2,
      title: 'Luxury Villa Interior',
      category: 'interior',
      type: 'private',
      location: 'Golf Green, Kolkata',
      year: '2021',
      image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      description: 'Complete interior decoration for a luxury villa with premium materials and custom furniture. The project included living spaces, bedrooms, kitchen, and outdoor areas with a cohesive design theme.',
      gallery: [
        'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
      ]
    },
    {
      id: 3,
      title: 'Children\'s Park',
      category: 'parks',
      type: 'government',
      location: 'Kalyani, West Bengal',
      year: '2020',
      image: childrensPark,
      description: 'Modern children\'s park with safe play equipment and landscaped surroundings. The project included swings, slides, climbing structures, and seating areas for parents, all designed with safety as the top priority.',
      gallery: [
        childrensPark,
        'https://images.unsplash.com/photo-1596997000103-e597b3ca50df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1573003139034-8ce992544fab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
      ]
    },
    {
      id: 4,
      title: 'Commercial Building',
      category: 'construction',
      type: 'private',
      location: 'Howrah, West Bengal',
      year: '2021',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      description: 'Multi-story commercial building with modern architecture and energy-efficient design. The project included office spaces, retail areas, and parking facilities, all designed for maximum functionality and aesthetic appeal.',
      gallery: [
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
        'https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
      ]
    },
    {
      id: 5,
      title: 'Office Interior',
      category: 'interior',
      type: 'private',
      location: 'Kolkata, West Bengal',
      year: '2022',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
      description: 'Contemporary office interior with ergonomic workspaces and collaborative areas. The project focused on creating a productive and inspiring work environment with attention to lighting, acoustics, and employee comfort.',
      gallery: [
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
        'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
      ]
    },
    {
      id: 6,
      title: 'Residential Complex',
      category: 'construction',
      type: 'private',
      location: 'Thakurpukur, Kolkata',
      year: '2020',
      image: residentialComplex,
      description: 'Gated residential complex with multiple buildings and community facilities. The project included residential units, landscaped gardens, community center, and sports facilities, creating a complete living environment for residents.',
      gallery: [
        residentialComplex,
        'https://images.unsplash.com/photo-1464146072230-91cabc968266?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
      ]
    },
    {
      id: 7,
      title: 'Government Office Building',
      category: 'construction',
      type: 'government',
      location: 'Kolkata, West Bengal',
      year: '2019',
      image: 'https://images.unsplash.com/photo-1542089363-bba089ffaa25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      description: 'Modern government office building with efficient space utilization and sustainable design features. The project incorporated energy-efficient systems, accessibility features, and durable materials for long-term use.',
      gallery: [
        'https://images.unsplash.com/photo-1542089363-bba089ffaa25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
        'https://images.unsplash.com/photo-1622126807280-9b5b32b28e77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
      ]
    },
    {
      id: 8,
      title: 'Public Park Renovation',
      category: 'parks',
      type: 'government',
      location: 'Howrah, West Bengal',
      year: '2021',
      image: 'https://images.unsplash.com/photo-1596997000103-e597b3ca50df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      description: 'Comprehensive renovation of a public park with new landscaping, walking paths, and recreational areas. The project transformed an underutilized space into a vibrant community gathering place with facilities for all age groups.',
      gallery: [
        'https://images.unsplash.com/photo-1596997000103-e597b3ca50df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1575783970733-1aaedde1db74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=80',
        'https://images.unsplash.com/photo-1605145878601-b8cbd39f3613?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
      ]
    }
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project =>
        project.category === activeCategory || project.type === activeCategory
      );

  const openLightbox = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % selectedProject.gallery.length
      );
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex - 1 + selectedProject.gallery.length) % selectedProject.gallery.length
      );
    }
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
    <div className="projects-page" ref={pageRef}>
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
            Our Projects
          </motion.h1>
          <motion.p
            className="page-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Showcasing Our Finest Work
          </motion.p>
        </div>
      </div>

      <section className="projects-gallery section">
        <div className="container">
          <motion.div
            className="projects-intro"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              Explore our portfolio of completed projects across various categories. From high-rise buildings to luxury interiors, we take pride in our quality workmanship and attention to detail. Click on any project to view more details and images.
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
                    <div className="project-meta">
                      <span className="project-location">{project.location}</span>
                      <span className="project-year">{project.year}</span>
                    </div>
                    <p className="project-category">
                      {categories.find(cat => cat.id === project.category)?.name}
                      {project.type && ` | ${categories.find(cat => cat.id === project.type)?.name}`}
                    </p>
                    <button className="view-project-btn">
                      View Project
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

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
              className="lightbox-content project-lightbox"
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

              <div className="lightbox-gallery">
                <div className="gallery-main">
                  <button className="gallery-arrow prev" onClick={prevImage}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <div className="gallery-image">
                    <img src={selectedProject.gallery[currentImageIndex]} alt={selectedProject.title} />
                  </div>
                  <button className="gallery-arrow next" onClick={nextImage}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>

                <div className="gallery-thumbnails">
                  {selectedProject.gallery.map((image, index) => (
                    <div
                      key={index}
                      className={`gallery-thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(index);
                      }}
                    >
                      <img src={image} alt={`Thumbnail ${index + 1}`} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="lightbox-details">
                <h3>{selectedProject.title}</h3>
                <div className="project-meta">
                  <span className="project-location">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="meta-icon">
                      <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                    {selectedProject.location}
                  </span>
                  <span className="project-year">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="meta-icon">
                      <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
                    </svg>
                    {selectedProject.year}
                  </span>
                  <span className="project-category">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="meta-icon">
                      <path fillRule="evenodd" d="M5.25 2.25a3 3 0 00-3 3v4.318a3 3 0 00.879 2.121l9.58 9.581c.92.92 2.39.92 3.31 0l4.908-4.908a2.25 2.25 0 000-3.182l-9.58-9.581a3 3 0 00-2.121-.879H5.25zM6.375 7.5a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" clipRule="evenodd" />
                    </svg>
                    {categories.find(cat => cat.id === selectedProject.category)?.name}
                    {selectedProject.type && ` | ${categories.find(cat => cat.id === selectedProject.type)?.name}`}
                  </span>
                </div>
                <p className="lightbox-description">{selectedProject.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
