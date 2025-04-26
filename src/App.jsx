import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Preloader from './components/Preloader';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import './styles/global.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [key, setKey] = useState(Date.now()); // Key for forcing remount

  // Handle reload detection
  useEffect(() => {
    // Detect if this is a page reload
    const isReload = window.performance &&
      window.performance.navigation &&
      window.performance.navigation.type === 1;

    // Handle mobile detection
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    // If this is a reload on mobile, force a complete restart
    if (isReload && isMobile) {
      // Force remount of the entire app by changing the key
      setKey(Date.now());

      // Reset loading state to show preloader again
      setLoading(true);

      // Remove loaded class to restart properly
      document.body.classList.remove('loaded');

      // Set background color to prevent black screen during transition
      document.body.style.backgroundColor = '#050505';
      document.body.style.color = '#ffffff';
    }
  }, []);

  useEffect(() => {
    // Set page title
    document.title = 'SAMADDAR ENTERPRISES - Construction & Interior Contracting';

    // Add Google Fonts
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600;700&display=swap';
    document.head.appendChild(link);

    // Prevent FOUC (Flash of Unstyled Content)
    document.documentElement.classList.add('js-loading');

    // Ensure scrolling works
    document.body.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';

    // Remove loading class after everything is loaded
    window.addEventListener('load', () => {
      document.documentElement.classList.remove('js-loading');
    });

    // Safety timeout to ensure preloader doesn't get stuck
    const safetyTimeout = setTimeout(() => {
      if (loading) {
        handleLoadComplete();
      }
    }, 5000); // 5 second safety timeout

    return () => {
      clearTimeout(safetyTimeout);
      if (link.parentNode) {
        document.head.removeChild(link);
      }
    };
  }, [loading, key]);

  const handleLoadComplete = () => {
    setLoading(false);
    document.body.classList.add('loaded');
  };

  return (
    <div key={key} className="app-container">
      {loading && <Preloader onLoadComplete={handleLoadComplete} />}
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
