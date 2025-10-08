import { FaReact, FaDatabase, FaServer, FaLaptopCode, FaTools, FaJava } from 'react-icons/fa';

// const Skills = () => {
//   const skillCategories = [
//     {
//       title: "Frontend",
//       icon: <FaReact className="text-cyber-blue" size={24} />,
//       skills: ["React","Vaadin","Bootstrap CSS", "Tailwind CSS", "HTML/CSS", "JavaScript"]
//     },
//     {
//       title: "Backend",
//       icon: <FaJava className="text-cyber-blue" size={24} />,
//       skills: ["Python","Django", "Postman API","Java", "Spring Boot","Hibernate"]
//     },
//     {
//       title: "Database",
//       icon: <FaDatabase className="text-cyber-blue" size={24} />,
//       skills: ["PostgreSQL", "MySQL","NoSQL", "ORM Tools"]
//     },
//     {
//       title: "DevOps",
//       icon: <FaServer className="text-cyber-blue" size={24} />,
//       skills: ["Docker", "AWS", "CI/CD", "Git", "Linux", "Nginx"]
//     },
//     {
//       title: "Tools",
//       icon: <FaTools className="text-cyber-blue" size={24} />,
//       skills: ["VS Code", "Postman", "Jest", "Webpack", "npm/yarn"]
//     },
//     {
//       title: "Other",
//       icon: <FaLaptopCode className="text-cyber-blue" size={24} />,
//       skills: []
//     }
//   ];

//   return (
//     <section id="skills" className="py-20 bg-cyber-dark">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="cyber-heading text-3xl mb-6">Technical Skills</h2>
//           <div className="h-1 w-24 bg-cyber-blue mx-auto mb-8"></div>
//           <p className="text-gray-300 max-w-2xl mx-auto">
//             I've worked with a variety of technologies and tools throughout my career.
//             Here's a snapshot of my technical expertise and the technologies I use to build amazing digital experiences.
//           </p>
//         </div>

//         <div className="cyber-grid">
//           {skillCategories.map((category, index) => (
//             <div key={index} className="cyber-card">
//               <div className="flex items-center mb-4">
//                 {category.icon}
//                 <h3 className="font-cyber text-xl text-cyber-blue ml-3">{category.title}</h3>
//               </div>
//               <ul className="space-y-2">
//                 {category.skills.map((skill, skillIndex) => (
//                   <li key={skillIndex} className="flex items-center">
//                     <span className="inline-block w-2 h-2 bg-cyber-pink mr-3"></span>
//                     <span className="text-gray-300">{skill}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaReact className="text-cyber-blue" size={24} />,
      skills: [
        "React.js", 
        "Tailwind CSS", 
        "Bootstrap", 
        "HTML5", 
        "CSS3", 
        "JavaScript (ES6+)", 
        "TypeScript"
      ]
    },
    {
      title: "Backend",
      icon: <FaJava className="text-cyber-blue" size={24} />,
      skills: [
        "Java", 
        "Spring Boot", 
        "Hibernate", 
        "Django", 
        "REST API", 
        "Python", 
        "Servlets & JSP"
      ]
    },
    {
      title: "Database",
      icon: <FaDatabase className="text-cyber-blue" size={24} />,
      skills: [
        "PostgreSQL", 
        "MySQL", 
        "SQLite", 
        "MongoDB", 
        "ORM (Hibernate, Django ORM)", 
        "ER Modeling"
      ]
    },
    {
      title: "DevOps / Infra",
      icon: <FaServer className="text-cyber-blue" size={24} />,
      skills: [
        "Linux (Kali, Ubuntu)", 
        "Git & GitHub", 
        "Docker",
        "Namecheap",
        "AWS EC2", 
        "Vite / Webpack"
      ]
    },
    {
      title: "Tools & Testing",
      icon: <FaTools className="text-cyber-blue" size={24} />,
      skills: [
        "VS Code", 
        "Postman", 
        "npm / yarn", 
        "Chrome DevTools", 
        "phpMyAdmin", 
        "pgAdmin"
      ]
    },
    {
      title: "Cybersecurity",
      icon: <FaLaptopCode className="text-cyber-blue" size={24} />,
      skills: [
        "Kali Linux", 
        "Nmap", 
        "Social Engineering Basics", 
        "Incident Response Concepts"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-cyber-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="cyber-heading text-3xl mb-6">Technical Skills</h2>
          <div className="h-1 w-24 bg-cyber-blue mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I've worked with a wide range of tools across development and cybersecurity. 
            Here's a glimpse of the technologies I use to build secure, scalable, and modern applications.
          </p>
        </div>

        <div className="cyber-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="cyber-card">
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="font-cyber text-xl text-cyber-blue ml-3">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <span className="inline-block w-2 h-2 bg-cyber-pink mr-3"></span>
                    <span className="text-gray-300">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;