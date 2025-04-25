import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import '../styles/ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    to_email: 'samaddarsoham@gmail.com' // Add recipient email
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: ''
  });

  const formRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init({
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY",
    });
  }, []);

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
      // Use environment variables for EmailJS configuration
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_id';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_id';

      // Send the email using EmailJS
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current
      );

      console.log('Email sent successfully:', result.text);

      setFormStatus({
        submitting: false,
        success: true,
        error: false,
        message: 'Your message has been sent successfully!'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: '',
        to_email: 'samaddarsoham@gmail.com'
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
        message: 'Failed to send message. Please try again later.'
      });
    }
  };

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
    <section className="contact-section section" id="contact" ref={sectionRef}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Contact <span className="highlight">Us</span>
        </motion.h2>

        <motion.div
          className="contact-intro"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>
            Have a project in mind or want to learn more about our services? Get in touch with us today and our team will be happy to assist you.
          </p>
        </motion.div>

        <div className="contact-container">
          <motion.div
            className="contact-info"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div className="contact-item" variants={itemVariants}>
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="contact-text">
                <h4>Phone</h4>
                <a href="tel:+918777606198">+91 8777 606 198</a>
              </div>
            </motion.div>

            <motion.div className="contact-item" variants={itemVariants}>
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </div>
              <div className="contact-text">
                <h4>Email</h4>
                <a href="mailto:samaddarsoham@gmail.com">samaddarsoham@gmail.com</a>
              </div>
            </motion.div>

            <motion.div className="contact-item" variants={itemVariants}>
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="contact-text">
                <h4>Location</h4>
                <p>Kolkata, India</p>
              </div>
            </motion.div>

            <motion.div className="contact-item" variants={itemVariants}>
              <div className="contact-icon whatsapp-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div className="contact-text">
                <h4>WhatsApp</h4>
                <a href="https://wa.me/918777606198" target="_blank" rel="noopener noreferrer">
                  +91 8777 606 198
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="contact-form-container"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
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
                <label htmlFor="email">Email</label>
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

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your Message"
                  rows="5"
                ></textarea>
              </div>

              {/* Hidden field for recipient email */}
              <input
                type="hidden"
                name="to_email"
                value={formData.to_email}
              />

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
  );
};

export default ContactSection;
