import { useState } from 'react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('work');
  
  const workExperience = [
    {
      title: "Senior Developer",
      company: "Tech Company",
      period: "2022 - Present",
      description: [
        "Led development of a high-traffic web application using React and Node.js",
        "Implemented CI/CD pipelines that reduced deployment time by 40%",
        "Mentored junior developers and conducted code reviews",
        "Optimized database queries resulting in 30% faster page loads"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Agency",
      period: "2020 - 2022",
      description: [
        "Built responsive web applications for clients across various industries",
        "Developed RESTful APIs using Node.js and Express",
        "Implemented authentication systems and security best practices",
        "Collaborated with designers to create pixel-perfect UI implementations"
      ]
    },
    {
      title: "Junior Developer",
      company: "Startup Inc.",
      period: "2018 - 2020",
      description: [
        "Developed and maintained features for the company's main product",
        "Worked with React, Redux, and CSS preprocessors",
        "Participated in daily stand-ups and sprint planning",
        "Troubleshot and fixed bugs in existing codebase"
      ]
    }
  ];
  
  const education = [
    {
      degree: "Master's in Computer Science",
      institution: "University Name",
      period: "2016 - 2018",
      description: [
        "Specialized in Software Engineering",
        "Thesis on modern web development frameworks",
        "GPA: 3.8/4.0",
        "Relevant coursework: Advanced Algorithms, Database Systems, Web Development"
      ]
    },
    {
      degree: "Bachelor's in Computer Science",
      institution: "University Name",
      period: "2012 - 2016",
      description: [
        "Minor in Mathematics",
        "Dean's List for 6 semesters",
        "GPA: 3.7/4.0",
        "Relevant coursework: Data Structures, Operating Systems, Computer Networks"
      ]
    }
  ];
  
  const certifications = [
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2023",
      description: "Validated expertise in developing, deploying, and debugging cloud-based applications using AWS."
    },
    {
      name: "Professional Scrum Master I",
      issuer: "Scrum.org",
      date: "2022",
      description: "Demonstrated knowledge of Scrum framework and ability to apply it effectively."
    },
    {
      name: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "2021",
      description: "Verified skills in building applications using MongoDB."
    }
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