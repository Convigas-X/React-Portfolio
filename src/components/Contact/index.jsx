import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, 
  Github, 
  Linkedin, 
  Twitter, 
  Mail,
  MapPin,
  Phone,
  ArrowUp
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Smoother easing curve
  const smoothEase = [0.25, 0.1, 0.25, 1];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const formDataObj = new FormData();
      formDataObj.append('name', formData.name);
      formDataObj.append('email', formData.email);
      formDataObj.append('message', formData.message);
      
      const response = await fetch('https://formsubmit.co/ajax/Shayan.ali.shahh@gmail.com', {
        method: 'POST',
        body: formDataObj,
      });
      
      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        throw new Error('Submission failed');
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      setErrors({ submit: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: smoothEase }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s work together to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: smoothEase }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-surface-variant border rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
                    errors.name ? 'border-red-500' : 'border-outline'
                  }`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <motion.p 
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: smoothEase }}
                    className="mt-1 text-sm text-red-400"
                  >
                    {errors.name}
                  </motion.p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-surface-variant border rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
                    errors.email ? 'border-red-500' : 'border-outline'
                  }`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <motion.p 
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: smoothEase }}
                    className="mt-1 text-sm text-red-400"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-surface-variant border rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] resize-none ${
                    errors.message ? 'border-red-500' : 'border-outline'
                  }`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <motion.p 
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: smoothEase }}
                    className="mt-1 text-sm text-red-400"
                  >
                    {errors.message}
                  </motion.p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, ease: smoothEase }}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>

              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: smoothEase }}
                  className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center"
                >
                  Message sent successfully! I&apos;ll get back to you soon.
                </motion.div>
              )}

              {errors.submit && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: smoothEase }}
                  className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-center"
                >
                  {errors.submit}
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: smoothEase }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div 
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3, ease: smoothEase }}
                className="flex items-start gap-4"
              >
                <div className="p-3 bg-primary/20 rounded-lg transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Email</h3>
                  <a href="mailto:shayan.ali.shahh@gmail.com" className="text-slate-400 hover:text-primary transition-colors duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
                    shayan.ali.shahh@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3, ease: smoothEase }}
                className="flex items-start gap-4"
              >
                <div className="p-3 bg-secondary/20 rounded-lg transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Phone</h3>
                  <a href="tel:+923154909017" className="text-slate-400 hover:text-secondary transition-colors duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
                    +92 (315) 490-9017
                  </a>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3, ease: smoothEase }}
                className="flex items-start gap-4"
              >
                <div className="p-3 bg-primary/20 rounded-lg transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Location</h3>
                  <p className="text-slate-400">
                    Islamabad, Pakistan
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-outline">
              <h3 className="text-white font-semibold mb-4">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.3, ease: smoothEase }}
                    className="p-3 bg-surface-variant border border-outline rounded-lg hover:border-primary hover:text-primary transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-outline">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Shayan Ali. All rights reserved.
            </p>
            
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.3, ease: smoothEase }}
              className="p-2 bg-surface-variant border border-outline rounded-lg hover:border-primary hover:text-primary transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;