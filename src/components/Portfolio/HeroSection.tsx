import { useState, useEffect } from 'react';
import profileAvatar from '@/assets/profile-avatar.jpg';
import heroBackground from '@/assets/hero-background.jpg';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Tarun Desetti";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background/80" />
      
      {/* Floating Particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Profile Avatar */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img
                src={profileAvatar}
                alt="Profile Avatar"
                className="w-32 h-32 rounded-full neon-border animate-glow-pulse"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 animate-pulse" />
            </div>
          </div>

          {/* Name with Typing Animation */}
          <h1 className="font-orbitron text-6xl md:text-8xl font-bold mb-6">
            <span className="neon-text">
              {displayText}
              <span className="inline-block w-1 h-16 bg-primary ml-2 animate-pulse" />
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-glass-foreground mb-8 font-orbitron">
            <span className="text-primary-glow">Full Stack Developer</span> • 
            <span className="text-neon-blue"> Data Science Enthusiast</span> • 
            <span className="text-accent"> UI/UX Designer</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://drive.google.com/uc?export=download&id=1HcTfa7gcLct-V9ZiL0YPx4o3EQn9wzW4"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gaming"
            >
              Download Resume
            </a>
            <button
              onClick={scrollToProjects}
              className="btn-secondary"
            >
              View Projects
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;