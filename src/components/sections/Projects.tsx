import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online store with product catalog, shopping cart, and payment processing.",
      image: "ecommerce.jpg", // Replace with actual image path
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "fullstack",
      github: "https://github.com/yourusername/project",
      demo: "https://project-demo.com"
    },
    {
      title: "Task Management App",
      description: "A Kanban-style task management application with drag-and-drop functionality.",
      image: "taskapp.jpg", // Replace with actual image path
      technologies: ["React", "Redux", "Firebase"],
      category: "frontend",
      github: "https://github.com/yourusername/project",
      demo: "https://project-demo.com"
    },
    {
      title: "API Service",
      description: "RESTful API service for data processing and analytics with comprehensive documentation.",
      image: "api.jpg", // Replace with actual image path
      technologies: ["Node.js", "Express", "PostgreSQL", "Docker"],
      category: "backend",
      github: "https://github.com/yourusername/project",
      demo: "https://project-demo.com"
    },
    {
      title: "Portfolio Website",
      description: "A cyberpunk-themed personal portfolio website showcasing projects and skills.",
      image: "portfolio.jpg", // Replace with actual image path
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      category: "frontend",
      github: "https://github.com/yourusername/project",
      demo: "https://project-demo.com"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather application with location-based forecasts and interactive maps.",
      image: "weather.jpg", // Replace with actual image path
      technologies: ["JavaScript", "Weather API", "Chart.js"],
      category: "frontend",
      github: "https://github.com/yourusername/project",
      demo: "https://project-demo.com"
    },
    {
      title: "Content Management System",
      description: "Custom CMS with user roles, content editing, and publishing workflow.",
      image: "cms.jpg", // Replace with actual image path
      technologies: ["React", "Node.js", "MySQL", "AWS"],
      category: "fullstack",
      github: "https://github.com/yourusername/project",
      demo: "https://project-demo.com"
    }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-cyber-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="cyber-heading text-3xl mb-6">Featured Projects</h2>
          <div className="h-1 w-24 bg-cyber-blue mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Check out some of my recent work. Each project represents a unique challenge and solution.
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button 
              className={`px-4 py-2 border ${
                filter === 'all' 
                  ? 'border-cyber-blue text-cyber-blue bg-cyber-blue/10' 
                  : 'border-gray-600 text-gray-400 hover:border-cyber-blue hover:text-cyber-blue'
              } transition-colors duration-300`}
              onClick={() => setFilter('all')}
            >
              All Projects
            </button>
            <button 
              className={`px-4 py-2 border ${
                filter === 'frontend' 
                  ? 'border-cyber-blue text-cyber-blue bg-cyber-blue/10' 
                  : 'border-gray-600 text-gray-400 hover:border-cyber-blue hover:text-cyber-blue'
              } transition-colors duration-300`}
              onClick={() => setFilter('frontend')}
            >
              Frontend
            </button>
            <button 
              className={`px-4 py-2 border ${
                filter === 'backend' 
                  ? 'border-cyber-blue text-cyber-blue bg-cyber-blue/10' 
                  : 'border-gray-600 text-gray-400 hover:border-cyber-blue hover:text-cyber-blue'
              } transition-colors duration-300`}
              onClick={() => setFilter('backend')}
            >
              Backend
            </button>
            <button 
              className={`px-4 py-2 border ${
                filter === 'fullstack' 
                  ? 'border-cyber-blue text-cyber-blue bg-cyber-blue/10' 
                  : 'border-gray-600 text-gray-400 hover:border-cyber-blue hover:text-cyber-blue'
              } transition-colors duration-300`}
              onClick={() => setFilter('fullstack')}
            >
              Full Stack
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="cyber-card group">
              {/* Project Image */}
              <div className="relative overflow-hidden mb-4 aspect-video bg-cyber-light">
                {/* Replace with actual image */}
                <div className="w-full h-full bg-gradient-to-br from-cyber-blue/20 to-cyber-pink/20 flex items-center justify-center">
                  <span className="text-cyber-blue font-cyber">PROJECT IMAGE</span>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-cyber-dark/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-cyber-light border border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-cyber-dark transition-colors duration-300"
                      aria-label="View GitHub Repository"
                    >
                      <FaGithub size={20} />
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-cyber-light border border-cyber-pink text-cyber-pink hover:bg-cyber-pink hover:text-cyber-dark transition-colors duration-300"
                      aria-label="View Live Demo"
                    >
                      <FaExternalLinkAlt size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Project Info */}
              <h3 className="text-xl font-cyber text-cyber-blue mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="text-xs px-2 py-1 bg-cyber-light border border-cyber-blue/30 text-cyber-blue"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;