import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FaGithub size={20} />, href: 'https://github.com/theujwalthakare', label: 'GitHub' },
    { icon: <FaLinkedin size={20} />, href: 'https://www.linkedin.com/in/ujwal-thakare-300b25264/', label: 'LinkedIn' },
    { icon: <FaTwitter size={20} />, href: 'https://x.com/ujwal55135', label: 'X' },
    { icon: <FaEnvelope size={20} />, href: 'mailto:thakare2829@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-cyber-light border-t border-gray-200 dark:border-cyber-blue/20 py-6">
      <div className="container mx-auto text-center text-sm">
        <p>&copy; {currentYear} Ujwal Thakare. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;