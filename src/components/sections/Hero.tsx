import { FaChevronDown } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center">
      {/* Cyberpunk grid background */}
      <div className="absolute inset-0 bg-cyber-dark z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle,_theme(colors.cyber-blue/5)_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
      </div>
      
      {/* Glowing lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-dark via-cyber-blue to-cyber-dark"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-dark via-cyber-pink to-cyber-dark"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-cyber text-white mb-4">
            <span className="block">HELLO, I'M</span>
            <span className="text-cyber-blue animate-glow">UJWAL THAKARE</span>
          </h1>
          
          <div className="h-1 w-32 bg-cyber-pink mb-6"></div>
          
          <h2 className="text-xl md:text-2xl font-mono text-gray-300 mb-8">
            <span className="typing-text">Full Stack Developer | Cybersecurity Enthusiast | Tech Explorer</span>
          </h2>
          
          <p className="text-gray-400 mb-8 max-w-lg">
            Building digital experiences with a focus on performance, security, and cutting-edge design.
            Let's create something extraordinary together.
          </p>
          
          <a href="#about" className="cyber-button">
            Explore My Work
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-cyber-blue">
          <FaChevronDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;