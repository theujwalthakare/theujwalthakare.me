import { useState } from 'react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('work');
  

  const workExperience = [
   {
    title: "Training & Internship – Python Full Stack ",
    company: "The Kiran Academy, Pune",
    period: "2025 (Ongoing)",
    description: [
      "Undergoing intensive training in Python Full Stack, Data Science, AI/ML concepts",
      "Built mini-projects including portfolio websites, data dashboards, and spam detection models",
      "Learning secure coding practices, OWASP Top 10, and hands-on tools like Nmap and Burp Suite",
      "Receiving placement support including resume building, mock interviews, and technical tests"
    ]
   }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Savitribai Phule Pune University",
      period: "2022 - 2025",
      description: [
      "Graduated with 7.93 CGPA",
      "Completed projects in web development, networking, and database systems",
      "Relevant subjects: Cybersecurity, Data Structures, Web Programming, Java, Python",
      "Actively participated in tech fests and coding competitions"
      ]
    }
  ];
  
  const certifications = [
    {
      name: "Python Full Stack Development with AI & ML",
      issuer: "The Kiran Academy, Pune",
      date: "2025 (Ongoing)",
      description: "Comprehensive hands-on training covering Python, Data Science, Machine Learning, AI, NumPy, Pandas, Matplotlib, Seaborn, Plotly, Scikit-Learn, Regex, and Full Stack Web Development with React, Node.js, and MongoDB. Includes industry projects and placement preparation."
    },
    {
      name: "Java Full Stack Development (Core + Advanced)",
      issuer: "I-Tech Solutions, Nashik",
      date: "Jan 2024 – Jul 2024",
      description: "Completed 6-month training covering Core Java, Advanced Java, Hibernate, Spring Boot framework, and PostgreSQL. Built full-stack web applications with REST APIs, MVC architecture, and backend integrations."
    },
    
  ];

  return (
    <section id="experience" className="py-20 bg-cyber-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="cyber-heading text-3xl mb-6">Experience & Education</h2>
          <div className="h-1 w-24 bg-cyber-blue mx-auto mb-8"></div>
        </div>
        
        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex border border-cyber-blue/50 p-1">
            <button
              className={`px-6 py-2 font-cyber text-sm transition-colors duration-300 ${
                activeTab === 'work' ? 'bg-cyber-blue/20 text-cyber-blue' : 'text-gray-400 hover:text-cyber-blue'
              }`}
              onClick={() => setActiveTab('work')}
            >
              WORK
            </button>
            <button
              className={`px-6 py-2 font-cyber text-sm transition-colors duration-300 ${
                activeTab === 'education' ? 'bg-cyber-blue/20 text-cyber-blue' : 'text-gray-400 hover:text-cyber-blue'
              }`}
              onClick={() => setActiveTab('education')}
            >
              EDUCATION
            </button>
            <button
              className={`px-6 py-2 font-cyber text-sm transition-colors duration-300 ${
                activeTab === 'certifications' ? 'bg-cyber-blue/20 text-cyber-blue' : 'text-gray-400 hover:text-cyber-blue'
              }`}
              onClick={() => setActiveTab('certifications')}
            >
              CERTIFICATIONS
            </button>
          </div>
        </div>
        
        {/* Work Experience */}
        {activeTab === 'work' && (
          <div className="space-y-8 max-w-3xl mx-auto">
            {workExperience.map((job, index) => (
              <div key={index} className="cyber-card relative pl-8">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyber-blue/30"></div>
                <div className="absolute left-0 top-0 w-2 h-2 -translate-x-1/2 bg-cyber-blue"></div>
                
                <h3 className="text-xl font-cyber text-cyber-blue mb-1">{job.title}</h3>
                <div className="flex justify-between mb-4">
                  <span className="text-gray-300">{job.company}</span>
                  <span className="text-cyber-pink font-mono text-sm">{job.period}</span>
                </div>
                
                <ul className="space-y-2">
                  {job.description.map((item, i) => (
                    <li key={i} className="text-gray-400 flex">
                      <span className="text-cyber-blue mr-2">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
        
        {/* Education */}
        {activeTab === 'education' && (
          <div className="space-y-8 max-w-3xl mx-auto">
            {education.map((edu, index) => (
              <div key={index} className="cyber-card relative pl-8">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyber-blue/30"></div>
                <div className="absolute left-0 top-0 w-2 h-2 -translate-x-1/2 bg-cyber-blue"></div>
                
                <h3 className="text-xl font-cyber text-cyber-blue mb-1">{edu.degree}</h3>
                <div className="flex justify-between mb-4">
                  <span className="text-gray-300">{edu.institution}</span>
                  <span className="text-cyber-pink font-mono text-sm">{edu.period}</span>
                </div>
                
                <ul className="space-y-2">
                  {edu.description.map((item, i) => (
                    <li key={i} className="text-gray-400 flex">
                      <span className="text-cyber-blue mr-2">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
        
        {/* Certifications */}
        {activeTab === 'certifications' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <div key={index} className="cyber-card">
                <h3 className="text-xl font-cyber text-cyber-blue mb-2">{cert.name}</h3>
                <div className="flex justify-between mb-4">
                  <span className="text-gray-300 text-sm">{cert.issuer}</span>
                  <span className="text-cyber-pink font-mono text-sm">{cert.date}</span>
                </div>
                <p className="text-gray-400 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;