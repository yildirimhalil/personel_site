import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Download, Github, Linkedin, Mail, Phone, Menu, X } from 'lucide-react';
import { ThemeToggle } from './components/ThemeToggle';
import { LanguageSelector } from './components/LanguageSelector';
import { SkillsSection } from './components/SkillsSection';
import { ServiceCard } from './components/ServiceCard';
import { ProjectCard } from './components/ProjectCard';
import { ContactForm } from './components/ContactForm';
import { skills } from './data/skills';
import { services } from './data/services';
import { projects } from './data/projects';
import { translations } from './data/translations';
import { useStore } from './store/useStore';

function App() {
  const { darkMode, language } = useStore();
  const t = translations[language];
  const [scrolled, setScrolled] = useState(false);
  const [nameVisible, setNameVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setTimeout(() => setNameVisible(true), 500);
  }, []);

  const navItems = [
    { key: 'home', label: t.home },
    { key: 'skills', label: t.skills },
    { key: 'services', label: t.services },
    { key: 'projects', label: t.projects },
    { key: 'contact', label: t.contact },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/yourusername',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/yourusername',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: 'mailto:your.email@example.com',
      label: 'Email',
    },
    {
      icon: Phone,
      href: 'tel:+905459166718',
      label: 'Phone',
    },
  ];

  const nameAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  return (
    <div className="min-h-screen text-gray-800 dark:text-white bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-900/20 dark:to-blue-900/40 pointer-events-none" />
      
      
      <nav className={`fixed inset-x-0 w-[85%] h-24 bg-white/90 dark:bg-black/20 backdrop-blur-md border-b border-gray-200/50 dark:border-white/10 z-50 transition-all duration-300 ${scrolled ? ' shadow-lg rounded-full w-full top-0 *:' : ''} mx-auto  top-5  rounded-full flex items-center`}>  
  <div className="max-w-7xl w-full mx-auto px-8 py-4 flex justify-between items-center">
    <div className="hidden md:flex items-center gap-6">
      {navItems.map((item) => (
        <motion.a
          key={item.key}
          href={item.key === 'home' ? '#' : `#${item.key}`}
          whileHover={{ scale: 1.05 }}
          className="relative px-4 py-2 text-base font-medium text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-300 transition-all rounded-full hover:bg-blue-50 dark:hover:bg-white/10"
        >
          {item.label}
        </motion.a>
      ))}
    </div>
    <div className="flex items-center gap-4">
      <LanguageSelector />
      <ThemeToggle />
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden p-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors"
      >
        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
    </div>
  </div>
  
  {/* Mobile Menu */}
  <AnimatePresence>
    {mobileMenuOpen && (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        className="fixed top-[105px] left-0 w-[96%] h-fullw-full bg-white/90 dark:bg-black/20 backdrop-blur-md z-50 rounded-t-[2rem] transition-all duration-300"
      >
        <div className="flex flex-col gap-2">
          {navItems.map((item) => (
            <motion.a
              key={item.key}
              href={item.key === 'home' ? '#' : `#${item.key}`}
              onClick={() => setMobileMenuOpen(false)}
              whileHover={{ scale: 1.05 }}
              className="px-4 py-3 text-base font-medium text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-300 transition-all rounded-lg hover:bg-blue-50 dark:hover:bg-white/10 text-center"
            >
              {item.label}
            </motion.a>
          ))}
        </div>
      </motion.div>
    )}
  </AnimatePresence>
</nav>


      <main className="relative max-w-7xl mx-auto px-4 pt-24">
        <section id="home" className="min-h-[calc(100vh-6rem)] flex flex-col justify-center">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/4 max-md:w-48 max-md:h-48 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl flex-shrink-0"
            >
              <img
                src="/halil.jpg"
                alt="Halil Yıldırım"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="space-y-8 text-center md:text-left w-full md:w-3/4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 text-transparent bg-clip-text">
                <AnimatePresence>
                  {nameVisible && (
                    <div className="flex flex-wrap justify-center md:justify-start">
                      {'Halil Yıldırım'.split('').map((letter, i) => (
                        <motion.span
                          key={i}
                          custom={i}
                          variants={nameAnimation}
                          initial="hidden"
                          animate="visible"
                          className="inline-block"
                        >
                          {letter === ' ' ? '\u00A0' : letter}
                        </motion.span>
                      ))}
                    </div>
                  )}
                </AnimatePresence>
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-blue-600 dark:text-blue-300">
                <TypeAnimation
                  sequence={[
                    t.titleSequence[0],
                    2000,
                    t.titleSequence[1],
                    2000,
                    t.titleSequence[2],
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </h2>
              <p className="text-xl text-gray-700 dark:text-blue-100 max-w-2xl">
                {t.description}
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <motion.a
                  href="/cv.pdf"
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  {t.downloadCV}
                </motion.a>
                <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center justify-center gap-2 bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-white w-12 h-12 rounded-full hover:bg-gray-300 dark:hover:bg-white/20 transition-colors"
                    >
                      <link.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="py-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 text-transparent bg-clip-text">
              {t.skills}
            </h2>
            <SkillsSection />
          </motion.div>
        </section>

        <section id="services" className="py-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 text-transparent bg-clip-text">
              {t.services}
            </h2>
            <div className="space-y-8">
              {t.servicesList.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  {...service}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </section>

        <section id="projects" className="py-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 text-transparent bg-clip-text">
              {t.projects}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.projectsList.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  {...project}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </section>

        <section id="contact" className="py-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 text-transparent bg-clip-text">
              {t.contact}
            </h2>
            <ContactForm />
          </motion.div>
        </section>
      </main>
    </div>
  );
}

export default App;
