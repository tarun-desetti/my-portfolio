import { useState, useEffect, useRef } from 'react';
const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.3
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  const skills = [{
    name: 'Full Stack Development',
    level: 85
  }, {
    name: 'Data Structures & Algorithms',
    level: 85
  }, {
    name: 'UI/UX Design',
    level: 80
  }, {
    name: 'Data Science',
    level: 75
  }, {
    name: 'Machine Learning',
    level: 70
  }];
  const funFacts = [{
    icon: '🚀',
    title: 'Favorite Tech',
    description: 'JAVA, PYTHON and UI design'
  }, {
    icon: '🎮',
    title: 'Gaming Passion',
    description: 'Strategy & Sci-Fi RPGs'
  }, {
    icon: '🌟',
    title: 'Fun Fact',
    description: 'I speak three languages: English, Java, and sarcasm.'
  }];
  return <section ref={sectionRef} id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className={`scroll-reveal ${isVisible ? 'revealed' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-16 neon-text">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Description */}
            <div className="space-y-6">
              <div className="glass-card">
                <p className="text-lg text-glass-foreground leading-relaxed font-jetbrains">Skilled in data structures, algorithms, and web development. Proficient in machine learning and model training. Committed to continuous learning and innovative problemsolving.</p>
              </div>

              <div className="glass-card">
                <p className="text-lg text-glass-foreground leading-relaxed font-jetbrains">
                  When I'm not coding, you'll find me exploring the latest in AI/ML, 
                  designing user interfaces, or diving deep into complex algorithms. 
                  I believe in writing clean, efficient code that makes a difference.
                </p>
              </div>
            </div>

            {/* Skills Progress */}
            <div className="space-y-6">
              <h3 className="text-2xl font-orbitron font-semibold text-primary mb-6">
                Technical Skills
              </h3>
              {skills.map((skill, index) => <div key={skill.name} className={`scroll-reveal ${isVisible ? 'revealed' : ''}`} style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-jetbrains text-glass-foreground">{skill.name}</span>
                    <span className="font-jetbrains text-primary">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{
                  width: isVisible ? `${skill.level}%` : '0%',
                  transitionDelay: `${index * 0.1}s`
                }} />
                  </div>
                </div>)}
            </div>
          </div>

          {/* Fun Facts Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {funFacts.map((fact, index) => <div key={fact.title} className={`glass-card text-center hover:scale-105 transition-transform duration-300 scroll-reveal ${isVisible ? 'revealed' : ''}`} style={{
            animationDelay: `${index * 0.2}s`
          }}>
                <div className="text-4xl mb-4">{fact.icon}</div>
                <h4 className="font-orbitron font-semibold text-primary mb-2">{fact.title}</h4>
                <p className="text-glass-foreground font-jetbrains">{fact.description}</p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;