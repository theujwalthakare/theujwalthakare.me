//import { FaReact, FaDatabase, FaServer, FaLaptopCode, FaTools, FaJava } from 'react-icons/fa';

const skills = [
  'React', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 
  'Tailwind CSS', 'Node.js', 'Git', 'Figma'
];

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-50 dark:bg-cyber-light">
      <div className="container mx-auto px-4">
        <h2>My Skills</h2>
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <div key={skill} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-cyber-blue/30 rounded-full px-4 py-2 text-sm md:text-base text-gray-800 dark:text-gray-200">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;