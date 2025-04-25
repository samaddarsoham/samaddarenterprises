import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingButtons from './FloatingButtons';

const Layout = ({ children }) => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <FloatingButtons />
    </>
  );
};

export default Layout;
