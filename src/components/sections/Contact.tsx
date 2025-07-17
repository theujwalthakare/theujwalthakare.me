import { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setSubmitStatus('');
    
    try {
      const serviceId = 'service_n9bhs97';
      const templateId = 'template_f3z1v5f';
      const publicKey = 'yR8grnLe4y1BiSjip';
      
      // Initialize EmailJS
      emailjs.init(publicKey);
      
      const templateParams = {
        to_name: "Ujwal",
        from_name: formData.name,
        reply_to: formData.email,
        email: formData.email,
        message: formData.message,
        subject: formData.subject
      };
      
      const result = await emailjs.send(serviceId, templateId, templateParams);
      
      if (result.status === 200) {
        setSubmitStatus('success');
        setSubmitMessage('Message sent successfully! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => {
          setSubmitMessage('');
          setSubmitStatus('');
        }, 3000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Something went wrong. Please try again later.');
      console.error('Error sending email:', error);
      setTimeout(() => {
        setSubmitMessage('');
        setSubmitStatus('');
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const contactInfo = [
    {
      icon: <FaEnvelope size={20} className="text-cyber-blue" />,
      title: "Email",
      value: "thakare2829@gmail.com",
      link: "mailto:thakare2829@gmail.com"
    },
    {
      icon: <FaMapMarkerAlt size={20} className="text-cyber-blue" />,
      title: "Location",
      value: "Pune, India",
      link: null
    },
    {
      icon: <FaLinkedin size={20} className="text-cyber-blue" />,
      title: "LinkedIn",
      value: "linkedin.com/in/ujwal-thakare-300b25264",
      link: "https://linkedin.com/in/ujwal-thakare-300b25264"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-cyber-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="cyber-heading text-3xl mb-6">Get In Touch</h2>
          <div className="h-1 w-24 bg-cyber-blue mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? 
            Feel free to reach out using the form below or through my contact information.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="w-full lg:w-2/3">
            <div className="cyber-border p-6">
              <form id="contact-form" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-cyber-dark border border-cyber-blue/30 text-white p-3 focus:border-cyber-blue focus:outline-none transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-cyber-dark border border-cyber-blue/30 text-white p-3 focus:border-cyber-blue focus:outline-none transition-colors duration-300"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-cyber-dark border border-cyber-blue/30 text-white p-3 focus:border-cyber-blue focus:outline-none transition-colors duration-300"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-cyber-dark border border-cyber-blue/30 text-white p-3 focus:border-cyber-blue focus:outline-none transition-colors duration-300"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="cyber-button w-full flex justify-center items-center"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                
                {submitMessage && (
                  <div className={`mt-4 p-3 ${
                    submitStatus === 'success' ? 'bg-green-900/20 border border-green-500 text-green-400' : 
                    'bg-red-900/20 border border-red-500 text-red-400'
                  }`}>
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="w-full lg:w-1/3">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="cyber-card flex items-start">
                  <div className="mr-4 mt-1">{info.icon}</div>
                  <div>
                    <h3 className="text-cyber-blue font-cyber mb-1">{info.title}</h3>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        className="text-gray-300 hover:text-cyber-blue transition-colors duration-300"
                        target={info.link.startsWith('mailto') ? undefined : '_blank'}
                        rel={info.link.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-300">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
