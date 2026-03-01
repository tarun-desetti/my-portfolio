import { useEffect, useRef, useState } from "react";

const LeetCodeSection = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section
      ref={sectionRef}
      id="leetcode"
      className="py-20 bg-background"
    >
      <div className="container mx-auto px-6">
        <div className={`scroll-reveal ${isVisible ? "revealed" : ""}`}>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-center mb-8 neon-text">
            LeetCode Journey
          </h2>

          <p className="text-center text-glass-foreground font-jetbrains mb-12 max-w-2xl mx-auto">
            Actively solving Data Structures & Algorithms problems to strengthen
            problem-solving skills and prepare for technical interviews.
          </p>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-8">

            <div className="glass-card p-8 text-center hover:scale-105 transition-all duration-300">
              <h3 className="text-4xl font-bold text-primary mb-2">400+</h3>
              <p className="font-jetbrains text-glass-foreground">
                Problems Solved
              </p>
            </div>

            <div className="glass-card p-8 text-center hover:scale-105 transition-all duration-300">
              <h3 className="text-4xl font-bold text-primary mb-2">
                Data Structures
              </h3>
              <p className="font-jetbrains text-glass-foreground">
                Trees • Graphs • DP • Sliding Window
              </p>
            </div>

            <div className="glass-card p-8 text-center hover:scale-105 transition-all duration-300">
              <h3 className="text-4xl font-bold text-primary mb-2">
                Interview Focused
              </h3>
              <p className="font-jetbrains text-glass-foreground">
                Daily Practice & Contest Participation
              </p>
            </div>

          </div>

          {/* Profile Button */}
          <div className="text-center mt-12">
            <a
              href="https://leetcode.com/u/tndy1311/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gaming px-8 py-4 text-lg"
            >
              View My LeetCode Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeetCodeSection;