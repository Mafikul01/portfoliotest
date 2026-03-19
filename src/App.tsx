/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import devImg from './img/dev.jpg';
import mafiImg from './img/mafi.jpg';
import dev3Img from './img/dev3.jpeg';
import { 
  Shield, 
  Code, 
  Terminal, 
  Cpu, 
  Mail, 
  Github, 
  Linkedin, 
  ExternalLink, 
  ChevronDown,
  Menu,
  X,
  FileText,
  Award,
  BookOpen,
  Briefcase,
  MessageCircle,
  Twitter,
  Instagram,
  Facebook,
  Sun,
  Moon
} from 'lucide-react';

const XIcon = ({ size = 24 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const Nav = ({ darkMode, toggleDarkMode }: { darkMode: boolean, toggleDarkMode: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? (darkMode ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-white/80 backdrop-blur-md border-b border-black/10 py-4') : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display tracking-tighter text-emerald-500"
        >
          MAFIKUL
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`text-sm font-medium transition-colors ${darkMode ? 'text-white/70 hover:text-emerald-400' : 'text-black/70 hover:text-emerald-600'}`}
            >
              {link.name}
            </motion.a>
          ))}
          
          <button 
            onClick={toggleDarkMode}
            className={`p-2 rounded-full transition-colors ${darkMode ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-black/10 text-black hover:bg-black/20'}`}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <button 
            onClick={toggleDarkMode}
            className={`p-2 rounded-full transition-colors ${darkMode ? 'bg-white/10 text-white' : 'bg-black/10 text-black'}`}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className={darkMode ? 'text-white' : 'text-black'} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden overflow-hidden border-b ${darkMode ? 'bg-black border-white/10' : 'bg-white border-black/10'}`}
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium transition-colors ${darkMode ? 'text-white/70 hover:text-emerald-400' : 'text-black/70 hover:text-emerald-600'}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ darkMode }: { darkMode: boolean }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] transition-colors duration-300 ${darkMode ? 'bg-emerald-500/10' : 'bg-emerald-500/5'}`} />
        <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[120px] transition-colors duration-300 ${darkMode ? 'bg-blue-500/10' : 'bg-blue-500/5'}`} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8 relative inline-block"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-emerald-500 p-1 overflow-hidden mx-auto glow-emerald">
            <img 
              src={devImg} 
              alt="Mafikul Islam" 
              className="w-full h-full object-cover rounded-full"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className={`absolute -bottom-2 -right-2 bg-emerald-500 text-black p-2 rounded-full border-4 transition-colors duration-300 ${darkMode ? 'border-black' : 'border-white'}`}>
            <Shield size={20} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`mb-6 inline-flex items-center space-x-2 px-4 py-2 rounded-full border backdrop-blur-sm transition-colors duration-300 ${darkMode ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'}`}
        >
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">Cyber Security Enthusiast</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-6xl md:text-9xl font-display uppercase leading-[0.85] mb-8 tracking-tighter"
        >
          Mafikul <br /> <span className="text-emerald-500">Islam</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className={`max-w-2xl mx-auto text-lg md:text-xl mb-10 font-light leading-relaxed transition-colors duration-300 ${darkMode ? 'text-white/60' : 'text-black/60'}`}
        >
          Securing the digital frontier through ethical hacking, 
          web development, and innovative problem solving.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6"
        >
          <a 
            href="#contact" 
            className="px-8 py-4 bg-emerald-500 text-black font-bold rounded-full hover:bg-emerald-400 transition-all hover:scale-105 glow-emerald"
          >
            Get In Touch
          </a>
          <a 
            href="#experience" 
            className={`px-8 py-4 border font-bold rounded-full transition-all ${darkMode ? 'bg-white/5 border-white/10 text-white hover:bg-white/10' : 'bg-black/5 border-black/10 text-black hover:bg-black/10'}`}
          >
            View Experience
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-colors duration-300 ${darkMode ? 'text-white/30' : 'text-black/30'}`}
      >
        <ChevronDown size={32} className="hero-scroll-icon" />
      </motion.div>
    </section>
  );
};

const About = ({ darkMode }: { darkMode: boolean }) => {
  return (
    <section id="about" className={`py-24 transition-colors duration-300 ${darkMode ? 'bg-white/[0.02]' : 'bg-black/[0.02]'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className={`aspect-[3/4] rounded-3xl overflow-hidden border transition-colors duration-300 ${darkMode ? 'border-white/10' : 'border-black/10'}`}>
              <img 
                src={mafiImg} 
                alt="Mafikul Islam" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className={`absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-500 rounded-full flex items-center justify-center border-8 transition-colors duration-300 ${darkMode ? 'border-black' : 'border-white'}`}>
              <Award size={48} className="text-black" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display uppercase mb-6 tracking-tight">About Me</h2>
            <p className={`text-xl mb-8 leading-relaxed transition-colors duration-300 ${darkMode ? 'text-white/70' : 'text-black/70'}`}>
              Assalamualaikum, I'm Mafikul Islam. I am a passionate Cyber Security Enthusiast 
              and developer dedicated to building secure and efficient digital experiences.
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-xl border transition-colors duration-300 ${darkMode ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-emerald-500/5 border-emerald-500/10'}`}>
                  <Shield size={24} className="text-emerald-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Cyber Security</h3>
                  <p className={`transition-colors duration-300 ${darkMode ? 'text-white/50' : 'text-black/50'}`}>Exploring the depths of network security and ethical hacking.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-xl border transition-colors duration-300 ${darkMode ? 'bg-blue-500/10 border-blue-500/20' : 'bg-blue-500/5 border-blue-500/10'}`}>
                  <Code size={24} className="text-blue-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Web Development</h3>
                  <p className={`transition-colors duration-300 ${darkMode ? 'text-white/50' : 'text-black/50'}`}>Creating responsive and modern web applications with clean code.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Skills = ({ darkMode }: { darkMode: boolean }) => {
  const skills = [
    { name: 'Cyber Security', icon: <Shield />, level: 85 },
    { name: 'HTML & CSS', icon: <Code />, level: 95 },
    { name: 'C++', icon: <Terminal />, level: 80 },
    { name: 'Java', icon: <Cpu />, level: 75 },
    { name: 'MS Office', icon: <FileText />, level: 90 },
    { name: 'Web Dev', icon: <ExternalLink />, level: 85 },
  ];

  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display uppercase mb-4 tracking-tight">Technical Skills</h2>
          <p className={`transition-colors duration-300 ${darkMode ? 'text-white/50' : 'text-black/50'}`}>My expertise in various technologies and tools.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 rounded-3xl border transition-all group ${darkMode ? 'bg-white/5 border-white/10 hover:border-emerald-500/50' : 'bg-black/5 border-black/10 hover:border-emerald-500/50'}`}
            >
              <div className="mb-6 text-emerald-500 group-hover:scale-110 transition-transform">
                {React.cloneElement(skill.icon as React.ReactElement, { size: 40 })}
              </div>
              <h3 className="text-xl font-bold mb-4">{skill.name}</h3>
              <div className={`h-2 w-full rounded-full overflow-hidden transition-colors duration-300 ${darkMode ? 'bg-white/10' : 'bg-black/10'}`}>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-emerald-500"
                />
              </div>
              <div className={`mt-2 text-right text-xs font-mono transition-colors duration-300 ${darkMode ? 'text-white/30' : 'text-black/30'}`}>{skill.level}%</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = ({ darkMode }: { darkMode: boolean }) => {
  const experiences = [
    {
      role: 'CEO & Founder',
      company: 'Personal Venture',
      period: '2023 - Present',
      desc: 'Leading digital initiatives and managing various projects in cybersecurity and development.'
    },
    {
      role: 'Campus Ambassador',
      company: 'Tech Community',
      period: '2022 - 2023',
      desc: 'Representing tech organizations and organizing events to promote digital literacy.'
    }
  ];

  const education = [
    {
      degree: 'Bs.C Student',
      school: 'University',
      period: 'Current',
      desc: 'Pursuing Bachelor of Science with a focus on technology and security.'
    },
    {
      degree: 'HSC',
      school: 'College',
      period: 'Completed',
      desc: 'Higher Secondary Certificate with science background.'
    }
  ];

  return (
    <section id="experience" className={`py-24 transition-colors duration-300 ${darkMode ? 'bg-white/[0.02]' : 'bg-black/[0.02]'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center space-x-4 mb-12">
              <Briefcase className="text-emerald-500" size={32} />
              <h2 className="text-4xl font-display uppercase tracking-tight">Work Experience</h2>
            </div>
            <div className={`space-y-12 border-l pl-8 ml-4 transition-colors duration-300 ${darkMode ? 'border-white/10' : 'border-black/10'}`}>
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className={`absolute -left-[41px] top-0 w-4 h-4 bg-emerald-500 rounded-full border-4 transition-colors duration-300 ${darkMode ? 'border-black' : 'border-white'}`} />
                  <span className="text-sm font-mono text-emerald-500 mb-2 block">{exp.period}</span>
                  <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                  <p className={`mb-4 transition-colors duration-300 ${darkMode ? 'text-white/50' : 'text-black/50'}`}>{exp.company}</p>
                  <p className={`leading-relaxed transition-colors duration-300 ${darkMode ? 'text-white/70' : 'text-black/70'}`}>{exp.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center space-x-4 mb-12">
              <BookOpen className="text-blue-500" size={32} />
              <h2 className="text-4xl font-display uppercase tracking-tight">Education</h2>
            </div>
            <div className={`space-y-12 border-l pl-8 ml-4 transition-colors duration-300 ${darkMode ? 'border-white/10' : 'border-black/10'}`}>
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className={`absolute -left-[41px] top-0 w-4 h-4 bg-blue-500 rounded-full border-4 transition-colors duration-300 ${darkMode ? 'border-black' : 'border-white'}`} />
                  <span className="text-sm font-mono text-blue-500 mb-2 block">{edu.period}</span>
                  <h3 className="text-2xl font-bold mb-1">{edu.degree}</h3>
                  <p className={`mb-4 transition-colors duration-300 ${darkMode ? 'text-white/50' : 'text-black/50'}`}>{edu.school}</p>
                  <p className={`leading-relaxed transition-colors duration-300 ${darkMode ? 'text-white/70' : 'text-black/70'}`}>{edu.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = ({ darkMode }: { darkMode: boolean }) => {
  const services = [
    { title: 'Cyber Security Audit', desc: 'Comprehensive security analysis of your digital assets.', icon: <Shield /> },
    { title: 'Web Development', desc: 'Modern, responsive websites built with the latest technologies.', icon: <Code /> },
    { title: 'Presentation Design', desc: 'Impactful and professional presentation slides for any event.', icon: <FileText /> },
    { title: 'Event Management', desc: 'Quality event planning and volunteering services.', icon: <Award /> },
  ];

  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display uppercase mb-4 tracking-tight">My Services</h2>
          <p className={`transition-colors duration-300 ${darkMode ? 'text-white/50' : 'text-black/50'}`}>Quality solutions tailored to your needs.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 rounded-3xl border transition-all cursor-default group ${darkMode ? 'bg-white/5 border-white/10 hover:bg-white/[0.08]' : 'bg-black/5 border-black/10 hover:bg-black/[0.08]'}`}
            >
              <div className="mb-6 text-emerald-500 group-hover:scale-110 transition-transform">
                {React.cloneElement(service.icon as React.ReactElement, { size: 32 })}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className={`text-sm leading-relaxed transition-colors duration-300 ${darkMode ? 'text-white/50' : 'text-black/50'}`}>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = ({ darkMode }: { darkMode: boolean }) => {
  const socials = [
    { icon: <Github size={24} />, href: "https://github.com/mafikul01", label: "GitHub" },
    { icon: <Linkedin size={24} />, href: "https://linkedin.com/in/mafikul01", label: "LinkedIn" },
    { icon: <XIcon size={24} />, href: "https://x.com/mafikul01", label: "X (Twitter)" },
    { icon: <Facebook size={24} />, href: "https://facebook.com/mafikul01", label: "Facebook" },
    { icon: <Instagram size={24} />, href: "https://instagram.com/mafikul01", label: "Instagram" },
    { icon: <MessageCircle size={24} />, href: "https://wa.me/8801788302771", label: "WhatsApp" },
  ];

  return (
    <section id="contact" className="py-24 bg-emerald-500">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-8xl font-display uppercase text-black mb-8 tracking-tighter">
            Let's Work <br /> Together
          </h2>
          <p className="text-black/70 text-xl mb-12 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? 
            Feel free to reach out to me through any of the platforms below.
          </p>
          
          <div className="flex flex-col items-center space-y-8">
            <a 
              href="mailto:pi969043@gmail.com" 
              className="flex items-center space-x-3 px-10 py-5 bg-black text-white rounded-full hover:scale-105 transition-all shadow-2xl"
            >
              <Mail size={24} />
              <span className="text-lg font-bold">Email Me</span>
            </a>
            
            <div className="flex flex-wrap justify-center gap-4">
              {socials.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-5 bg-black text-white rounded-full shadow-xl hover:bg-zinc-900 transition-colors"
                  title={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = ({ darkMode }: { darkMode: boolean }) => {
  return (
    <footer className={`py-12 border-t transition-colors duration-300 ${darkMode ? 'border-white/10' : 'border-black/10'}`}>
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div className="text-xl font-display tracking-tighter text-emerald-500">
          MAFIKUL
        </div>
        <div className={`text-sm font-mono transition-colors duration-300 ${darkMode ? 'text-white/30' : 'text-black/30'}`}>
          © {new Date().getFullYear()} Mafikul Islam. All rights reserved.
        </div>
        <div className={`flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm transition-colors duration-300 ${darkMode ? 'text-white/50' : 'text-black/50'}`}>
          <a href="https://github.com/mafikul01" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/mafikul01" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors">LinkedIn</a>
          <a href="https://facebook.com/mafikul01" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors">Facebook</a>
          <a href="https://wa.me/8801788302771" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
};

const Gallery = ({ darkMode }: { darkMode: boolean }) => {
  return (
    <section className={`py-24 transition-colors duration-300 ${darkMode ? 'bg-white/[0.02]' : 'bg-black/[0.02]'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`rounded-3xl overflow-hidden border transition-colors duration-300 aspect-video md:aspect-auto md:h-[600px] ${darkMode ? 'border-white/10' : 'border-black/10'}`}
          >
            <img 
              src={dev3Img} 
              alt="Mafikul Islam" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="space-y-8">
            <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tighter">
              Always <br /> <span className="text-emerald-500">Exploring</span>
            </h2>
            <p className={`text-xl leading-relaxed transition-colors duration-300 ${darkMode ? 'text-white/50' : 'text-black/50'}`}>
              Whether it's attending tech conferences, participating in CTFs, or 
              collaborating on open-source projects, I'm always looking for ways 
              to grow and contribute to the community.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className={`p-6 rounded-2xl border transition-colors duration-300 ${darkMode ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'}`}>
                <div className="text-3xl font-display text-emerald-500 mb-2">10+</div>
                <div className={`text-xs uppercase tracking-widest transition-colors duration-300 ${darkMode ? 'text-white/30' : 'text-black/30'}`}>Projects Completed</div>
              </div>
              <div className={`p-6 rounded-2xl border transition-colors duration-300 ${darkMode ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'}`}>
                <div className="text-3xl font-display text-emerald-500 mb-2">5+</div>
                <div className={`text-xs uppercase tracking-widest transition-colors duration-300 ${darkMode ? 'text-white/30' : 'text-black/30'}`}>Certifications</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`selection:bg-emerald-500 selection:text-black transition-colors duration-300 ${darkMode ? 'bg-[#050505] text-white' : 'bg-zinc-50 text-black'}`}>
      <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Experience darkMode={darkMode} />
      <Services darkMode={darkMode} />
      <Gallery darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}
