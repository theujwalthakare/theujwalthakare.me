import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: "BookNJoy - Event Ticketing App",
      description:
        "A full-featured event booking platform allowing users to browse, book, and generate tickets for events. Built using a secure and scalable full-stack architecture.",
      image: "src/assets/booknjoy.png",
      technologies: ["React", "Spring Boot", "Hibernate", "PostgreSQL"],
      category: "fullstack",
      github: "https://github.com/theujwalthakare/aaomile",
      demo: "#" // Replace with actual demo link
    },
    {
      title: "UbeSecure - Cyber Complaint Portal",
      description:
        "A concept-stage citizen complaint platform designed to report cybercrime incidents to authorities securely with OTP verification, dashboards, and real-time tracking.",
      image: "src/assets/ubsecure.png",
      technologies: ["HTML", "JavaScript", "PHP", "MySQL", "Security Workflow"],
      category: "fullstack",
      github: "https://github.com/theujwalthakare/ubsecure",
      demo: "#" // Replace with actual demo link
    },
    {
      title: "Personal Portfolio Website",
      description:
        "Cyberpunk-themed personal portfolio website to showcase my technical skills, experience, and featured projects. Responsive and animated with Framer Motion.",
      image: "src/assets/portfolio.png", // Replace with actual image path
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      category: "frontend",
      github: "https://github.com/theujwalthakare/theujwalthakare.me",
      demo: "https://www.theujwalthakare.me"
    }
    // {
    //   title: "Crop Info Viewer - PHP + PostgreSQL",
    //   description:
    //     "Web app that displays crop details dynamically by fetching data from PostgreSQL using PHP. Designed for agricultural database systems.",
    //   image: "cropinfo.jpg", // Replace with actual image path
    //   technologies: ["PHP", "PostgreSQL", "HTML/CSS"],
    //   category: "backend",
    //   github: "https://github.com/yourusername/crop-info-viewer",
    //   demo: "https://cropinfo-demo.com"
    // },
    // {
    //   title: "Student Data Manager - Flat File in PHP",
    //   description:
    //     "Displays student data stored in flat files, calculates percentages, and formats data into a readable tabular view using pure PHP logic.",
    //   image: "studentdata.jpg", // Replace with actual image path
    //   technologies: ["PHP", "HTML", "File Handling"],
    //   category: "backend",
    //   github: "https://github.com/yourusername/student-data-manager",
    //   demo: "https://studentdatademo.com"
    // }
  ];

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-cyber-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="cyber-heading text-3xl mb-6">Featured Projects</h2>
          <div className="h-1 w-24 bg-cyber-blue mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Here are some of the fully working, end-to-end projects I've built. Each one reflects my skills in real-world problem-solving and development.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['all', 'frontend', 'backend', 'fullstack'].map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 border ${
                  filter === cat
                    ? 'border-cyber-blue text-cyber-blue bg-cyber-blue/10'
                    : 'border-gray-600 text-gray-400 hover:border-cyber-blue hover:text-cyber-blue'
                } transition-colors duration-300`}
                onClick={() => setFilter(cat)}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="cyber-card group">
              {/* Project Image */}
              <div className="relative overflow-hidden mb-4 aspect-video bg-cyber-light">
                <div className="w-full h-full bg-gradient-to-br from-cyber-blue/20 to-cyber-pink/20 flex items-center justify-center">
                  <img src={project.image} alt={project.title} className="w-full h-full object-center effect" />
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
