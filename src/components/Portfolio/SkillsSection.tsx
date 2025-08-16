import { useState, useEffect, useRef } from 'react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML', icon: '📄', description: 'Structuring web content' }, // Using a document icon for HTML
        { name: 'CSS', icon: '🎨', description: 'Styling web pages' }, // Keeping CSS, as it was in the original list
        { name: 'React', icon: '⚛️', description: 'Modern web applications' },
        { name: 'Streamlit', icon: '📈', description: 'Creating data apps with Python' }, // Using a chart icon for Streamlit
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: '🟢', description: 'Server-side JavaScript' },
        { name: 'Python', icon: '🐍', description: 'General purpose & backends' }, // Slightly updated description for Python
        { name: 'SQL', icon: '🗄️', description: 'Managing relational data' }, // Icon for database/data
        { name: 'PHP', icon: '🐘', description: 'Server-side scripting' }, // Using an elephant icon for PHP
      ]
    },
    {
      title: 'AI/ML',
      skills: [
        { name: 'Scikit-learn', icon: '📊', description: 'Machine learning' }, // Moved to top
        { name: 'Pandas', icon: '🐼', description: 'Data manipulation' },
        { name: 'NumPy', icon: '🔢', description: 'Numerical computing' }, // Added NumPy with icon
        { name: 'Data Analysis', icon: '📈', description: 'Understanding and interpreting data' }, // Added Data Analysis
      ]
    },
    {
      title: 'Tools & Design',
      skills: [
        { name: 'Figma', icon: '🎯', description: 'UI/UX design' },
        { name: 'Git', icon: '📚', description: 'Version control' },
        { name: 'Android Studio', icon: '🤖', description: 'Developing native Android applications' },
 { name: 'Collaboration Tools', icon: '🤝', description: 'Working effectively in teams' }, // Added Collaboration Tools

 ]
    }
  ];

  const professionalSkills = {
    title: 'Professional Skills',
    skills: [
      { name: 'C++', icon: '➕', description: 'Powerful systems programming' },
      { name: 'Java', icon: '☕', description: 'Enterprise and mobile applications' },
      { name: 'JavaScript', icon: '🌐', description: 'Web and full-stack development' },
      { name: 'Effective Communication', icon: '🗣️', description: 'Clear and concise interaction' },
    ]
  };


  const achievements = [
    {
      title: 'HackerRank Certified Software Developer',
      description: 'Certification demonstrating strong software development skills on HackerRank.',
      year: '2025',
      icon: '💻' // Using a computer or coding related icon
    },
    {
      title: 'Data Science Certification by EI SYSTEMS, AICTE',
      description: 'Certification in Data Science from EI SYSTEMS, recognized by AICTE.',
      year: '2025', // Assuming a completion year
      icon: '📊' // Using a data or chart related icon
    },
    {
      title: 'Web Development Certification by Cognifyz',
      description: 'Certification in Web Development from Cognifyz.',
      year: '2024', // Assuming a completion year
      icon: '🌐' // Using a web or globe icon
    },
    , // Removed the extra comma here
    {
      title: 'Cyber Security & Ethical Hacking Workshop',
      description: 'Completed a 2-day workshop on Cyber Security & Ethical Hacking at CYBERTHREYA.',
      year: '2025', // Based on the certificate
      icon: '🛡️' // Using a shield or security icon
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="py-20"
    >
      <div className="container mx-auto px-6">
        <div className={`scroll-reveal ${isVisible ? 'revealed' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-16 neon-text">
            Skills & Tools
          </h2>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[...skillCategories, professionalSkills].map((category, categoryIndex) => (
              <div 
                key={category.title}
                className={`scroll-reveal ${isVisible ? 'revealed' : ''}`}
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <h3 className="font-orbitron font-bold text-xl text-primary mb-6 text-center">
                  {category.title}
                </h3>
                <div 
                  className={category.title === 'Professional Skills' 
                    ? 'flex flex-wrap justify-center gap-4' // Horizontal layout for professional skills
                    : 'space-y-4' // Default vertical layout
                  }
                >
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill.name}
                      className="glass-card hover:scale-105 transition-all duration-300 group cursor-pointer"
                      style={{ animationDelay: `${(categoryIndex * 4 + skillIndex) * 0.05}s` }}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <div>
                          <h4 className="font-jetbrains font-semibold text-glass-foreground group-hover:text-primary transition-colors">
                            {skill.name}
                          </h4>
                          <p className="text-sm text-muted-foreground font-jetbrains">
                            {skill.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <div className="mb-16">
            <h3 className="text-3xl font-orbitron font-bold text-center mb-8 text-accent">
              Achievements
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={achievement.title}
                  className={`glass-card text-center hover:scale-105 transition-all duration-300 scroll-reveal ${isVisible ? 'revealed' : ''}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="text-4xl mb-4">{achievement.icon}</div>
                  <h4 className="font-orbitron font-semibold text-primary mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-glass-foreground font-jetbrains mb-2">
                    {achievement.description}
                  </p>
                  <span className="text-accent font-jetbrains font-semibold">
                    {achievement.year}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="glass-card max-w-2xl mx-auto">
              <h3 className="font-orbitron font-bold text-2xl text-primary mb-4">
                Ready to Collaborate?
              </h3>
              <p className="text-glass-foreground font-jetbrains mb-6">
                Let's build something amazing together. I'm always excited to work on 
                innovative projects that push the boundaries of technology.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-gaming"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;