import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, Github, Mail, Linkedin, Download, ArrowRight, Code, Database, Cloud, Smartphone, Network, Wrench, MapPin, Phone } from 'lucide-react';
import dp from "./assets/profile.PNG"

const Portfolio = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Full-Stack Development',
      description: 'React.js, PHP, Laravel, Node.js, Express.js, Firebase',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Database Management',
      description: 'MySQL, SQL, Database Design, Normalization & Optimization',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: 'Networking & DevOps',
      description: 'PPPoE, Client-Server Config, Fiber Optics, Server Setup',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Technical Support',
      description: 'Computer Assembly, Repair, Maintenance, IoT Development',
      color: 'from-orange-400 to-orange-600'
    }
  ];

  const projects = [
    {
      title: 'HEMIS - Higher Education Management System',
      description: 'Comprehensive management information system for higher education institutions. Developed during OJT at CHED-IX with features for student records, academic management, and reporting.',
      image: '/api/placeholder/600/400',
      tech: ['React.js', 'Laravel', 'Node.js', 'MySQL'],
      category: 'Professional Work',
      year: '2025',
      featured: true
    },
    {
      title: 'Disaster Risk Management System',
      description: 'Real-time disaster monitoring and management platform with alert systems, resource tracking, and emergency response coordination for local government units.',
      image: '/api/placeholder/600/400',
      tech: ['React.js', 'Express.js', 'Node.js', 'MySQL'],
      category: 'Freelance',
      year: '2024',
      featured: true
    },
    {
      title: 'Hotel Management System',
      description: 'Complete hotel operations management system for Zamboanga Peninsula Polytechnic State University with booking, billing, and room management features.',
      image: '/api/placeholder/600/400',
      tech: ['React.js', 'Express.js', 'Node.js', 'MySQL'],
      category: 'Academic Project',
      year: '2025',
      featured: false
    },
    {
      title: 'Smart Pet Feeder',
      description: 'IoT-enabled automatic pet feeding system with scheduling, portion control, and mobile monitoring capabilities using ESP32 microcontroller.',
      image: '/api/placeholder/600/400',
      tech: ['ESP32', 'Arduino IDE', 'IoT', 'C++'],
      category: 'IoT Project',
      year: '2024',
      featured: false
    },
    {
      title: 'Clinic Appointment System',
      description: 'Digital appointment booking and patient management system with scheduling, patient records, and notification features for healthcare providers.',
      image: '/api/placeholder/600/400',
      tech: ['React.js', 'Express.js', 'Node.js', 'MySQL'],
      category: 'Freelance',
      year: '2024',
      featured: false
    },
    {
      title: '9 Mujeres Point of Sale System',
      description: 'Complete POS solution with inventory management, sales tracking, receipt generation, and reporting dashboard for retail business operations.',
      image: '/api/placeholder/600/400',
      tech: ['React.js', 'Express.js', 'Node.js', 'MySQL'],
      category: 'Business Solution',
      year: '2023',
      featured: false
    }
  ];

  const navigationItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Enhanced Header */}
      <header 
        className={`fixed w-full top-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-gray-900/95 backdrop-blur-md shadow-2xl border-b border-gray-800' 
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Adrian.dev
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`relative py-2 px-4 font-medium transition-all duration-300 group ${
                    activeSection === item.toLowerCase() 
                      ? 'text-blue-400' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-transform duration-300 ${
                    activeSection === item.toLowerCase() ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}>
            <div className="py-4 space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-3 px-4 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Dynamic Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.3),transparent)] animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(255,119,198,0.3),transparent)] animate-pulse animation-delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="space-y-8 animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold">
              <span className="block text-white">Adrian</span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Suson
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
              Full-Stack Developer & IoT Enthusiast from Zamboanga City
            </p>
            
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto animate-fade-in-up animation-delay-500">
              Recent BSIT graduate specializing in React.js, Laravel, and innovative tech solutions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
              <button
                onClick={() => scrollToSection('projects')}
                className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2"
              >
                <span>View My Work</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="group border-2 border-gray-600 hover:border-blue-400 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-blue-400/10"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-blue-400 to-transparent rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-20 lg:py-32 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative w-80 h-80 mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
                <img
                  src={dp}
                  alt="Adrian Suson"
                  className="relative w-full h-full rounded-full object-cover border-4 border-gray-700 shadow-2xl"
                />
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    About Me
                  </span>
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
              </div>
              
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  Recent BSIT graduate and aspiring Full-Stack Developer with hands-on experience in React.js, 
                  PHP, and Laravel. I completed my OJT at CHED-IX, contributing to the HEMIS project and gaining 
                  valuable real-world development experience.
                </p>
                <p>
                  I'm skilled in computer maintenance and system development, with expertise in freelance and 
                  IoT projects. My additional strengths include networking and database management, making me 
                  a well-rounded developer ready to tackle diverse technical challenges.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  <div className="flex items-center space-x-3 text-gray-400">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    <span>Zamboanga City, Philippines</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400">
                    <Phone className="w-5 h-5 text-blue-400" />
                    <span>09956202850</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <a
                  href="/api/placeholder/400/320"
                  className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
                >
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  <span>Download Resume</span>
                </a>
                
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="border-2 border-gray-600 hover:border-blue-400 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:bg-blue-400/10"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Skills Section */}
      <section id="skills" className="py-20 lg:py-32 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                My Expertise
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Specialized in full-stack development, networking, and innovative tech solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${skill.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {skill.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {skill.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Tools & Technologies */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Tools & Technologies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
              {['Git', 'GitHub', 'VS Code', 'Android Studio', 'XAMPP', 'Node.js', 'Composer'].map((tool, index) => (
                <div
                  key={index}
                  className="bg-gray-700/50 backdrop-blur-sm px-4 py-3 rounded-lg text-center text-gray-300 hover:text-blue-400 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="py-20 lg:py-32 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From enterprise solutions to IoT innovations - showcasing diverse technical expertise
            </p>
          </div>
          
          {/* Featured Projects */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {projects.filter(p => p.featured).map((project, index) => (
              <div
                key={index}
                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-gray-800/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                      {project.year}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-700 text-blue-400 text-sm rounded-full border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <button className="group/btn flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                      <ExternalLink className="w-4 h-4 group-hover/btn:rotate-45 transition-transform" />
                      <span>View Project</span>
                    </button>
                    
                    <button className="flex items-center space-x-2 border-2 border-gray-600 hover:border-blue-400 text-white px-6 py-3 rounded-full transition-all duration-300 hover:bg-blue-400/10">
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Other Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter(p => !p.featured).map((project, index) => (
              <div
                key={index}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-blue-600/90 backdrop-blur-sm text-white px-2 py-1 rounded text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="bg-gray-800/90 backdrop-blur-sm text-white px-2 py-1 rounded text-xs">
                      {project.year}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-700 text-blue-400 text-xs rounded border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-gray-700 text-gray-400 text-xs rounded border border-gray-600">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex space-x-3">
                    <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      <span>View</span>
                    </button>
                    
                    <button className="flex items-center space-x-2 border border-gray-600 hover:border-blue-400 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Contact Section */}
      <section id="contact" className="py-20 lg:py-32 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-400 mb-16 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <a
              href="mailto:suson.adrian.dr@gmail.com"
              className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <Mail className="w-12 h-12 text-blue-400 mb-4 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <p className="text-gray-400">suson.adrian.dr@gmail.com</p>
            </a>
            
            <a
              href="tel:09956202850"
              className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <Phone className="w-12 h-12 text-blue-400 mb-4 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
              <p className="text-gray-400">09956202850</p>
            </a>
            
            <div className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
              <MapPin className="w-12 h-12 text-blue-400 mb-4 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-2">Location</h3>
              <p className="text-gray-400">Zamboanga City, Philippines</p>
            </div>
          </div>
          
          <button
            onClick={() => window.open('mailto:suson.adrian.dr@gmail.com')}
            className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-3 mx-auto"
          >
            <Mail className="w-6 h-6 group-hover:animate-bounce" />
            <span>Start a Project</span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4 md:mb-0">
              Adrian.dev
            </div>
            
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="mailto:suson.adrian.dr@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href="tel:09956202850" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Phone className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
            </div>
            
            <p className="text-gray-400 text-center md:text-right">
              &copy; 2025 Adrian Suson. Built with ❤️ in Zamboanga City
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease forwards;
        }
        
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;