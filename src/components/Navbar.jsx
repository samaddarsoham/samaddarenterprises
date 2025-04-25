import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        staggerChildren: 0.1,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const linkVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      ref={navRef}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="container navbar-container">
        <div className="navbar-links desktop-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>

        <motion.button
          className="menu-toggle"
          onClick={toggleMenu}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className={`hamburger ${isOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="mobile-menu"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <div className="mobile-links">
                <motion.div variants={linkVariants}>
                  <Link to="/" className="mobile-link" onClick={closeMenu}>Home</Link>
                </motion.div>
                <motion.div variants={linkVariants}>
                  <Link to="/about" className="mobile-link" onClick={closeMenu}>About</Link>
                </motion.div>
                <motion.div variants={linkVariants}>
                  <Link to="/services" className="mobile-link" onClick={closeMenu}>Services</Link>
                </motion.div>
                <motion.div variants={linkVariants}>
                  <Link to="/projects" className="mobile-link" onClick={closeMenu}>Projects</Link>
                </motion.div>
                <motion.div variants={linkVariants}>
                  <Link to="/contact" className="mobile-link" onClick={closeMenu}>Contact</Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
