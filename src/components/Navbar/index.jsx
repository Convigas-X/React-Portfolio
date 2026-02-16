import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2, MessageCircle } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);

  const navLinks = useMemo(() => [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Expertise', href: '#expertise', id: 'expertise' },
    { name: 'Experience', href: '#work-experience', id: 'work-experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ], []);

  const whatsappNumber = '+92-315-4909017';
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}`;
  const whatsappQR = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(whatsappLink)}`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(navLinks[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const openWhatsAppModal = (e) => {
    e.preventDefault();
    setIsWhatsAppModalOpen(true);
    setIsMobileMenuOpen(false);
  };

  const closeModal = () => {
    setIsWhatsAppModalOpen(false);
  };

  const smoothEasing = [0.25, 0.1, 0.25, 1];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: smoothEasing }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-950/80 backdrop-blur-xl shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="w-full px-6">
          <div className="flex items-center justify-between h-20">
            <motion.a
              href="#home"
              onClick={(e) => scrollToSection(e, '#home')}
              className="flex items-center gap-2 group flex-shrink-0"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2, ease: smoothEasing }}
            >
              <div className="relative">
                <motion.div
                  className="absolute inset-0 bg-primary/30 rounded-lg blur-md"
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.4, 0.7, 0.4],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <div className="relative p-2 bg-surface-variant rounded-lg border border-outline">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
              </div>
              <span className="text-xl font-bold text-white">
                Portfolio
              </span>
            </motion.a>

            <div className="hidden md:flex items-center gap-1 absolute left-1/2 transform -translate-x-1/2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05, ease: smoothEasing }}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeSection === link.id
                      ? 'text-primary'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-white/5 rounded-lg border border-white/10"
                      transition={{ type: 'spring', bounce: 0.15, duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </motion.a>
              ))}
            </div>

            <motion.button
              onClick={openWhatsAppModal}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.2, ease: smoothEasing }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-200 shadow-lg shadow-primary/25 flex-shrink-0"
            >
              <span>Let&apos;s Talk</span>
              <motion.span
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                →
              </motion.span>
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.15, ease: smoothEasing }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2, ease: smoothEasing }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2, ease: smoothEasing }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: smoothEasing }}
            className="fixed inset-x-0 top-20 z-40 md:hidden"
          >
            <div className="mx-4 p-4 bg-slate-950/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
              <div className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: index * 0.05, ease: smoothEasing }}
                    className={`px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                      activeSection === link.id
                        ? 'bg-primary/20 text-primary border border-primary/30'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </motion.a>
                ))}
                <motion.button
                  onClick={openWhatsAppModal}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: 0.2, ease: smoothEasing }}
                  className="mt-2 px-4 py-3 bg-primary text-white text-center font-semibold rounded-lg"
                >
                  Let&apos;s Talk
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isWhatsAppModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: smoothEasing }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              onClick={closeModal}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.3, ease: smoothEasing }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            >
              <motion.div
                className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 max-w-sm w-full shadow-2xl pointer-events-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.button
                  onClick={closeModal}
                  whileHover={{ scale: 1.05, rotate: 90 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2, ease: smoothEasing }}
                  className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white transition-colors duration-200"
                >
                  <X className="w-5 h-5" />
                </motion.button>

                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1, duration: 0.3, ease: smoothEasing }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-6"
                  >
                    <MessageCircle className="w-8 h-8 text-green-400" />
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.25, ease: smoothEasing }}
                    className="text-2xl font-bold text-white mb-2"
                  >
                    Chat on WhatsApp
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.25, ease: smoothEasing }}
                    className="text-slate-400 text-sm mb-6"
                  >
                    Scan the QR code or click the button below to start a conversation
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.25, duration: 0.25, ease: smoothEasing }}
                    className="bg-white p-4 rounded-2xl mb-6 inline-block"
                  >
                    <img
                      src={whatsappQR}
                      alt="WhatsApp QR Code"
                      className="w-48 h-48"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.25, ease: smoothEasing }}
                    className="mb-6"
                  >
                    <p className="text-slate-400 text-sm mb-1">WhatsApp Number</p>
                    <p className="text-xl font-semibold text-white">{whatsappNumber}</p>
                  </motion.div>

                  <motion.a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.25, ease: smoothEasing }}
                    whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(34, 197, 94, 0.4)' }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl transition-all duration-200"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Open WhatsApp
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
