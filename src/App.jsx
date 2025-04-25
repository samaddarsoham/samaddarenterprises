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

    // Remove loading class after everything is loaded
    window.addEventListener('load', () => {
      // Keep the preloader visible until it completes
      document.documentElement.classList.remove('js-loading');
    });

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const handleLoadComplete = () => {
    setLoading(false);
    document.body.classList.add('loaded');
  };

  return (
    <>
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
    </>
  );
}

export default App;
