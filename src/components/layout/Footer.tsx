import { FaGithub, FaLinkedin } from 'react-icons/fa';

const socialLinks = [
  { icon: <FaGithub size={24} />, href: 'https://github.com/theujwalthakare' },
  { icon: <FaLinkedin size={24} />, href: 'https://linkedin.com/in/theujwalthakare' },
];

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-cyber-light border-t border-gray-200 dark:border-cyber-blue/20 py-6">
      <div className="container mx-auto text-center text-sm">
        <div className="flex justify-center space-x-6 mb-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-cyber-blue dark:text-gray-400 dark:hover:text-cyber-blue transition-colors"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <p>&copy; {new Date().getFullYear()} Ujwal Thakare. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;