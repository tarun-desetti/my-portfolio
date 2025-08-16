import { useState, useEffect, useRef } from 'react';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' }); // Clear form on success
      } else {
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      alert('An error occurred while sending the message. Please try again.');
    }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: '👨‍💻',
      url: 'https://github.com/tarun-desetti',
      description: 'Check out my code'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://www.linkedin.com/in/tarun-desetti-6b6153356/',
      description: 'Connect professionally'
    },
    {
      name: 'Twitter',
      icon: '🐦',
      url: 'https://x.com/TarunConnects',
      description: 'Follow my journey'
    },
    {
      name: 'Email',
      icon: '📧',
      url: 'mailto:tarundesetti8@gmail.com',
      description: 'Send me an email'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="py-20 bg-background-secondary"
    >
      <div className="container mx-auto px-6">
        <div className={`scroll-reveal ${isVisible ? 'revealed' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-8 neon-text">
            Let's Connect
          </h2>
          
          <p className="text-center text-glass-foreground font-jetbrains mb-12 max-w-2xl mx-auto">
            Have a project in mind or just want to chat about technology? 
            I'm always open to discussing new opportunities and interesting ideas.
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className={`scroll-reveal ${isVisible ? 'revealed' : ''}`}>
              <div className="glass-card">
                <h3 className="font-orbitron font-bold text-2xl text-primary mb-6">
                  Send a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-glass-foreground font-jetbrains mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-glass-border rounded-lg 
                               text-foreground font-jetbrains focus:border-primary focus:ring-2 
                               focus:ring-primary/20 transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-glass-foreground font-jetbrains mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-glass-border rounded-lg 
                               text-foreground font-jetbrains focus:border-primary focus:ring-2 
                               focus:ring-primary/20 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-glass-foreground font-jetbrains mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-input border border-glass-border rounded-lg 
                               text-foreground font-jetbrains focus:border-primary focus:ring-2 
                               focus:ring-primary/20 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="btn-gaming w-full"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Social Links & Additional Info */}
            <div className="space-y-8">
              {/* Social Links */}
              <div className={`scroll-reveal ${isVisible ? 'revealed' : ''}`} style={{ animationDelay: '0.2s' }}>
                <h3 className="font-orbitron font-bold text-2xl text-primary mb-6">
                  Connect with Me
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-card hover:scale-105 transition-all duration-300 group text-center"
                    >
                      <div className="text-3xl mb-2">{social.icon}</div>
                      <h4 className="font-jetbrains font-semibold text-glass-foreground group-hover:text-primary transition-colors">
                        {social.name}
                      </h4>
                      <p className="text-sm text-muted-foreground font-jetbrains">
                        {social.description}
                      </p>
                    </a>
                  ))}
                </div>
              </div>

              {/* Resume Download */}
              <div className={`scroll-reveal ${isVisible ? 'revealed' : ''}`} style={{ animationDelay: '0.4s' }}>
                <div className="glass-card text-center">
                  <h3 className="font-orbitron font-bold text-xl text-primary mb-4">
                    Download Resume
                  </h3>
                  <p className="text-glass-foreground font-jetbrains mb-6">
                    Get a detailed overview of my experience, skills, and achievements.                   
                  </p>
                  <a
                    href="https://drive.google.com/file/d/1HcTfa7gcLct-V9ZiL0YPx4o3EQn9wzW4/view?usp=sharing"
                    download
                    className="btn-gaming inline-block"
                  >
                    Download PDF
                  </a>
                </div>
              </div>

              {/* Quick Info */}
              <div className={`scroll-reveal ${isVisible ? 'revealed' : ''}`} style={{ animationDelay: '0.6s' }}>
                <div className="glass-card">
                  <h3 className="font-orbitron font-bold text-xl text-primary mb-4">
                    Quick Info
                  </h3>
                  <div className="space-y-3 font-jetbrains">
                    <div className="flex justify-between">
                      <span className="text-glass-foreground">Location:</span>
                      <span className="text-foreground">Remote / Flexible</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-glass-foreground">Availability:</span>
                      <span className="text-accent">Open to opportunities</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-glass-foreground">Response Time:</span>
                      <span className="text-foreground">Within 24 hours</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;