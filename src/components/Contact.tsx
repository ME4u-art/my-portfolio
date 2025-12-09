import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './contact.css';

// Initialize EmailJS - Get keys from environment variables
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
// const RECIPIENT_EMAIL = import.meta.env.VITE_RECIPIENT_EMAIL || '';

if (EMAILJS_PUBLIC_KEY) {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

export default function Contact() {
  const sectionRef = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
      setError('Email service is not configured. Please contact me directly via email.');
      setLoading(false);
      return;
    }

    // Debug log
    console.log('Sending email with:', {
      serviceId: EMAILJS_SERVICE_ID,
      templateId: EMAILJS_TEMPLATE_ID,
      data: {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message
      }
    });

    try {
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID, 
        EMAILJS_TEMPLATE_ID, 
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        }
      );

      console.log('Email sent successfully:', response);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      console.error('EmailJS Error Details:', err);
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="contact-container">
        <h2>Get In Touch</h2>
        <p className="contact-intro">I'm always interested in hearing about new projects and opportunities.</p>
        
        <div className="contact-content">
          <form className="contact-form" onSubmit={handleSubmit} aria-label="Contact form">
            <div className="form-group">
              <label htmlFor="name" className="sr-only">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                aria-required="true"
                autoComplete="name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="sr-only">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                aria-required="true"
                autoComplete="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="sr-only">Your Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                aria-required="true"
              ></textarea>
            </div>
            <button type="submit" className="btn" disabled={loading} aria-busy={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            {submitted && <p className="success-message" role="status" aria-live="polite">✓ Message sent successfully!</p>}
            {error && <p className="error-message" role="alert" aria-live="assertive">✗ {error}</p>}
          </form>

          <div className="contact-info">
            <div className="info-card">
              <h3>Email</h3>
              <a href="mailto:hgnouni2@gmail.com">hgnouni2@gmail.com</a>
            </div>
            <div className="info-card">
              <h3>Phone</h3>
              <a href="tel:+212601939172">+212 6 01 93 91 72</a>
            </div>
            <div className="info-card">
              <h3>Location</h3>
              <p>Mohammedia, Morocco</p>
            </div>
            <div className="info-card">
              <h3>Social Links</h3>
              <div className="social-links">
                <a href="https://github.com/ME4u-art" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://linkedin.com/in/hicham-gnouni-7609211a8/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}