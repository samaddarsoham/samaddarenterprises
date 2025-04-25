import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: ''
  });
  
  const formRef = useRef(null);
  const pageRef = useRef(null);
  const isInView = useInView(pageRef, { once: true, amount: 0.1 });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setFormStatus({
      submitting: true,
      success: false,
      error: false,
      message: ''
    });
    
    try {
      // Replace these with your actual EmailJS service, template, and user IDs
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'YOUR_USER_ID'
      );
      
      setFormStatus({
        submitting: false,
        success: true,
        error: false,
        message: 'Your message has been sent successfully! We will get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({
          ...prev,
          success: false,
          message: ''
        }));
      }, 5000);
      
    } catch (error) {
      console.error('Error sending email:', error);
      
      setFormStatus({
        submitting: false,
        success: false,
        error: true,
        message: 'Failed to send message. Please try again later or contact us directly.'
      });
    }
  };
  
  const contactInfo = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Phone',
      content: '+91 8777 606 198',
      link: 'tel:+918777606198'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
          <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
        </svg>
      ),
      title: 'Email',
      content: 'samaddarsoham@gmail.com',
      link: 'mailto:samaddarsoham@gmail.com'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
        </svg>
      ),
      title: 'WhatsApp',
      content: '+91 8777 606 198',
      link: 'https://wa.me/918777606198'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Location',
      content: 'Kolkata, West Bengal, India',
      link: null
    }
  ];
  
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
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="contact-page" ref={pageRef}>
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
            Contact Us
          </motion.h1>
          <motion.p 
            className="page-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Get in Touch for Your Construction & Interior Needs
          </motion.p>
        </div>
      </div>
      
      <section className="contact-details section">
        <div className="container">
          <motion.div 
            className="contact-intro"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              Have a project in mind or want to learn more about our services? Get in touch with us today and our team will be happy to assist you. We're committed to providing exceptional service and bringing your vision to life.
            </p>
          </motion.div>
          
          <div className="contact-content">
            <motion.div 
              className="contact-info-cards"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index} 
                  className="contact-card"
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                >
                  <div className="contact-card-icon">
                    {info.icon}
                  </div>
                  <div className="contact-card-content">
                    <h3>{info.title}</h3>
                    {info.link ? (
                      <a href={info.link} target={info.title === 'WhatsApp' ? '_blank' : null} rel="noopener noreferrer">
                        {info.content}
                      </a>
                    ) : (
                      <p>{info.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="contact-form-wrapper"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2>Send Us a Message</h2>
              <p>Fill out the form below and we'll get back to you as soon as possible.</p>
              
              <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your Name"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your Phone (Optional)"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Subject"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your Message"
                    rows="6"
                  ></textarea>
                </div>
                
                {formStatus.message && (
                  <div className={`form-message ${formStatus.success ? 'success' : 'error'}`}>
                    {formStatus.message}
                  </div>
                )}
                
                <motion.button 
                  type="submit" 
                  className="btn btn-primary submit-btn"
                  disabled={formStatus.submitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {formStatus.submitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="contact-cta section">
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
              <a href="tel:+918777606198" className="btn btn-primary">Call Now</a>
              <a href="https://wa.me/918777606198" target="_blank" rel="noopener noreferrer" className="btn btn-outline">WhatsApp</a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
