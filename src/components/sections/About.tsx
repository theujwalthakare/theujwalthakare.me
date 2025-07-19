const About = () => {
  return (
    <section id="about" className="py-20 bg-cyber-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <div className="cyber-border p-1 max-w-sm mx-auto">
              <div className="relative overflow-hidden aspect-square">
                {/* Replace with your actual image */}
                <div className="w-full h-full  bg-gradient-to-br from-cyber-blue/20 to-cyber-pink/30 flex items-center">
                 <img src="/images/profile.jpg" alt="Profile" />
                </div>
              </div>
            </div>
          </div>
          
          {/* About Content */}
          <div className="w-full md:w-2/3">
            <h2 className="cyber-heading text-3xl mb-6">About Me</h2>
            
            <div className="h-1 w-24 bg-cyber-blue mb-8"></div>
            
            <p className="text-gray-300 mb-6">
              Hello! I'm Ujwal Thakare, a passionate Software Developer with expertise in building modern web applications. 
              I specialize in creating responsive, user-friendly interfaces and robust backend systems.
            </p>
            
            <p className="text-gray-300 mb-6">
              With a background in Computer Science, I bring a unique perspective to every project. 
              I'm constantly learning and exploring new technologies to stay at the cutting edge of web development.
            </p>
            
            <p className="text-gray-300 mb-8">
              When I'm not coding, you can find me hiking, reading or exploring trends in cybersecurity world. I believe that these diverse interests 
              help fuel my creativity and problem-solving abilities in my technical work.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="cyber-card flex-1 min-w-[200px]">
                <h3 className="text-cyber-blue font-cyber text-lg mb-2">Education</h3>
                <p className="text-gray-400">Bachelor of Science in Computer Science</p>
                <p className="text-gray-500 text-sm">Savitribai Phule Pune University, 2025</p>
              </div>
              
              <div className="cyber-card flex-1 min-w-[200px]">
                <h3 className="text-cyber-blue font-cyber text-lg mb-2">Location</h3>
                <p className="text-gray-400">Pune, India</p>
                <p className="text-gray-500 text-sm">Open to Remote Work</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;