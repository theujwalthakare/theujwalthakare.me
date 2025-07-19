import { FaChevronDown } from 'react-icons/fa';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to full screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Characters to use in the rain
    const chars = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz !@#$%^&*()_+[]{}|;:,.<>?/~`';
    const charArray = chars.split('');

    // Font size and columns
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);

    // Array to track the y position of each drop
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    // Drawing the characters
    const draw = () => {
      // Black background with opacity to create trail effect
      ctx.fillStyle = 'rgba(10, 10, 15, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set text color and font
      ctx.fillStyle = '#00f0ff';
      ctx.font = `${fontSize}px monospace`;

      // Draw characters
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        
        // x = i * fontSize, y = drops[i] * fontSize
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Randomly reset some drops to the top
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Move drop down
        drops[i]++;
      }
    };

    // Animation loop
    const interval = setInterval(draw, 35);

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Recalculate columns
      const newColumns = Math.floor(canvas.width / fontSize);
      
      // Reset drops array
      drops.length = 0;
      for (let i = 0; i < newColumns; i++) {
        drops[i] = Math.random() * -100;
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center">
      {/* Matrix rain background */}
      <div className="absolute inset-0 bg-cyber-dark z-0">
        <canvas ref={canvasRef} className="w-full h-full opacity-30" />
      </div>
      
      {/* Glowing lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-dark via-cyber-blue to-cyber-dark"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-dark via-cyber-pink to-cyber-dark"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 className="text-2xl md:text-6xl font-dystopian text-white mb-4">
            <span className="block">I'AM</span>
            <span className="text-cyber-blue animate-glow">UJWAL THAKARE</span>
          </h1>
          
          <div className="h-1 w-32 bg-cyber-pink mb-6"></div>
          
          <h2 className="text-xl md:text-2xl font-mono text-gray-300 mb-8">
            <span className="typing-text">Full Stack Developer | Cybersecurity Enthusiast </span>
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