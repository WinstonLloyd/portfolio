'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Code, Database, Palette } from 'lucide-react';
import Hero3D from '@/components/Hero3D';
import ProjectCard3D from '@/components/ProjectCard3D';
import Skills3D from '@/components/Skills3D';
import Profile3D from '@/components/Profile3D';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  const projects = [
    {
      title: "CHED Caraga HURIS",
      description: "Human Resource Information System for CHED Caraga region - A comprehensive web application for managing employee data, leave requests, and HR workflows.",
      tech: ["Vue.js","Tailwind CSS", "Laravel", "MySQL"],
      github: "https://github.com/WinstonLloyd",
      demo: "https://huris.chedcaraga.ph/",
      image: "/projects/image.png"
    },
    {
      title: "Archival Document Mapping Management System.",
      description: "Simplify your document management with our Archival Document Mapping Management System. Organize, map, and access your archival records effortlessly.",
      tech: ["PHP", "MYSQL"],
      github: "https://github.com/WinstonLloyd/admms",
      demo: "https://demo.com",
      image: "/projects/ai-task-manager.png"
    },
    {
      title: "IT HelpDesk",
      description: "IT HelpDesk system for managing IT support requests and issues.",
      tech: ["Vue.js","Tailwind CSS", "Laravel", "SQL Server"],
      github: "https://github.com/WinstonLloyd/it-helpdesk",
      demo: "https://demo.com",
      image: "/projects/it-helpdesk.png"
    }
  ];

  const skills = [
    { category: "Frontend", icon: Code, items: ["HTML", "CSS", "JavaScript", "TAILWIND CSS", "VUE.js"] },
    { category: "Backend", icon: Database, items: ["PHP", "LARAVEL", "MYSQL", "SQL Server"] },
    { category: "Design", icon: Palette, items: ["Figma", "Adobe Photoshop", "Canva"] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900 cursor-default">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-slate-900 dark:text-white transform-gpu transition-all duration-300 hover:scale-110 hover:rotate-3 hover:shadow-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600">WinstonLloyd</div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const section = document.getElementById(item.toLowerCase());
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth' });
                    }
                    setActiveSection(item.toLowerCase());
                  }}
                  className={`text-sm font-medium transition-colors cursor-pointer ${
                    activeSection === item.toLowerCase()
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
        <Hero3D />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-8 w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-4 border-blue-600 dark:border-blue-400 shadow-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1"
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-white/10 backdrop-blur-sm">
              <Profile3D />
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight"
          >
            Hi, I'm <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient bg-300%">Winston Lloyd Timogan</span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl text-slate-600 dark:text-slate-400 mb-8 font-light"
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">Full-Stack Developer</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Passionate about creating beautiful, functional web applications that solve real-world problems. 
            Specializing in modern JavaScript frameworks and responsive design.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button 
              onClick={() => {
                const section = document.getElementById('projects');
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:scale-105"
            >
              View Projects
            </button>
            <button className="px-8 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-full font-medium hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-slate-900 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:scale-105">
              Download CV
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex justify-center gap-6 mt-12"
          >
            <a href="https://github.com/WinstonLloyd" className="w-12 h-12 flex items-center justify-center rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-300 cursor-pointer hover:scale-110 shadow-lg">
              <Github size={24} />
            </a>
            <a href="https://mail.google.com/mail/u/0/#sent" className="w-12 h-12 flex items-center justify-center rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-300 cursor-pointer hover:scale-110 shadow-lg">
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="text-slate-400 dark:text-slate-600" size={24} />
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-16"
          >
            Featured Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-48 rounded-lg mb-6 overflow-hidden">
                  <ProjectCard3D color={index === 0 ? '#3b82f6' : '#8b5cf6'} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-white/50 dark:bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-16"
          >
            Skills & Technologies
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <skillGroup.icon className="text-blue-600 dark:text-blue-400" size={32} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">{skillGroup.category}</h3>
                <Skills3D skills={skillGroup.items} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-slate-900 dark:text-white mb-8"
          >
            Let's Work Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-slate-400 mb-12"
          >
            I'm always interested in hearing about new projects and opportunities.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 cursor-pointer">
              <Mail size={20} />
              Get In Touch
            </button>
            <button className="px-8 py-3 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-full font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer">
              Schedule a Call
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
