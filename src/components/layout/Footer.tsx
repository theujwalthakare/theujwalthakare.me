import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FaGithub size={20} />, href: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: <FaLinkedin size={20} />, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: <FaTwitter size={20} />, href: 'https://twitter.com/yourusername', label: 'Twitter' },
    { icon: <FaEnvelope size={20} />, href: 'mailto:your.email@example.com', label: 'Email' },
  ];

  return (
    <footer className="bg-cyber-dark border-t border-cyber-blue/30 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="font-cyber text-cyber-blue">
              &copy; {currentYear} <span className="animate-glow">UJWAL THAKARE</span>
            </p>
            <p className="text-gray-400 text-sm mt-1">
              Crafted with code and cyberpunk vibes
            </p>
          </div>
          
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyber-blue transition-colors duration-300"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;