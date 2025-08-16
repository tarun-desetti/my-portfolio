import { useState, useEffect, useRef } from 'react';
import projectWeb from '@/assets/project-web.jpg';
import projectAI from '@/assets/project-ai.jpg';

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Function to get the next available project ID
  const getNextProjectId = () => {
    if (projects.length === 0) {
      return 1;
    }
    const maxId = Math.max(...projects.map(p => p.id));
    return maxId + 1;
  };

  // Initialize projects array
  const projects = [
    {
      id: 1, // Using unique IDs
      title: 'Personal Portfolio',
      description: 'A modern and futuristic portfolio showcasing my skills and projects.',
      // You might want to add a specific image for your portfolio project if available
      image: '/src/assets/portfol.png', 
      techStack: ['React', 'TypeScript', 'Tailwind CSS'],
      category: 'web',
      // Placeholder link - replace with actual live demo link later
      link: '#' 
    },
    {
      id: 2,
      title: 'Children\'s Therapy Center Website',
      description: 'Designed and developed a website for a children\'s therapy center, incorporating appointment booking, therapy session details, and an interactive UI for parents and therapists.',
      image: 'src/assets/children.png', 
      techStack: ['HTML', 'CSS', 'JS', 'Node.js', 'MongoDB', 'Express.js', 'src/assets/children.png'],
      category: 'web',
      link: 'https://github.com/tarun-desetti/CHILD-CARE-CO/tree/main/CHILD%20CARE%20CO'
    },
    {
      id: 3,
      title: 'Task Management System',
      description: 'Built a task management system for tracking daily activities, task prioritization, and progress monitoring, implemented user authentication and task categorization for efficient management.',
      image: 'src/assets/task.png', 
      techStack: ['PHP', 'MySQL', 'XAMPP'],
      category: 'web', // Assuming a web-based system
      link: '#'
    },
    {
      id: 4,
      title: 'Interactive Horoscope Reveal Website',
      description: 'Created a fun and responsive site with interactive UI elements to forecast the user\'s lifestyle with their date of birth.',
      image: 'src/assets/horo.png', 
      techStack: ['HTML', 'Tailwind CSS', 'JS'],
      category: 'web',
      link: 'https://github.com/tarun-desetti/Horoscope-reveal-web-application'
    },
     {
      id: 5,
      title: 'Real-time Online Transaction Fraud Detection',
      description: 'Real-time online transaction fraud detection application using machine learning and model training.',
      image: 'src/assets/ml.png', // Assuming an AI/ML project uses an AI-related image
      techStack: ['Python', 'Machine Learning (Accuracy, Precision, Recall, F1 Score)'],
      category: 'ai',
      link: 'https://github.com/tarun-desetti/ONLINE_FRAUD_TRANSACTION_DETECTION_ML' // Add link if available
    },
    {
      id: 6,
      title: 'Dynamic Online Car Rental System',
      description: 'Build a dynamic online car rental system using PHP for backend logic and SQL for managing vehicle, user, and booking data.',
      image: 'src/assets/car.png', // Assuming a web-based system
      techStack: ['PHP', 'SQL'],
      category: 'web',
      link: 'https://github.com/tarun-desetti/ONLINE-VEHICLE-RENTAL-SYSTEM' // Add link if available
    },
    {
      id: 7, // Assign the next available ID
      title: 'WhatsApp UI/UX Clone',
      description: 'A UI/UX project recreating the user interface and experience of the WhatsApp messaging application.',
      image: 'src/assets/whats.png', // Or a specific design image if you have one
      techStack: ['Figma', 'UI/UX Design'],
      category: 'design',
      link: 'https://www.figma.com/design/gYe55CwTCJ2DFzFgf1uXgZ/Untitled?node-id=28-51&p=f&m=draw' // Add link if available
    }
 ,
    {
      id: 8, // Assign the next available ID dynamically
      title: 'E-commerce Site Landing Page',
      description: 'Designed a landing page for an e-commerce site.',
      image: 'src/assets/div.png', // Or a specific design image if you have one
      techStack: ['Figma', 'UI/UX Design'],
      category: 'design',
      link: 'https://www.figma.com/design/JBc672nbGdPr034otefRvb/hi?node-id=0-1&p=f&m=draw' // Add link if available
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Dev' },
    { id: 'ai', label: 'AI/ML' },
    { id: 'design', label: 'UI/UX' },
    
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="py-20 bg-background-secondary"
    >
      <div className="container mx-auto px-6">
        <div className={`scroll-reveal ${isVisible ? 'revealed' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-8 neon-text">
            Projects
          </h2>
          
          <p className="text-center text-glass-foreground font-jetbrains mb-12 max-w-2xl mx-auto">
            Explore my portfolio of innovative projects spanning web development, 
            AI/ML, design, and data science.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-lg font-jetbrains font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'btn-gaming'
                    : 'btn-secondary'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                className={`glass-card group hover:scale-105 transition-all duration-300 scroll-reveal ${isVisible ? 'revealed' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.link}
                      className="btn-gaming text-sm px-4 py-2"
                      target="_blank" // Add target="_blank" to open in a new tab
                      rel="noopener noreferrer" // Add rel="noopener noreferrer" for security best practices
                    >
                      View Project
                    </a>
                  </div>
                </div>

                <h3 className="font-orbitron font-bold text-xl text-primary mb-3">
                  {project.title}
                </h3>
                
                <p className="text-glass-foreground font-jetbrains mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-jetbrains"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
