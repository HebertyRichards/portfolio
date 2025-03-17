import React, { useEffect, useRef, useState } from "react";

function Skills() {
  const skillsRef = useRef(null);
  const [showSkills, setShowSkills] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowSkills(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) observer.unobserve(skillsRef.current);
    };
  }, []);

  return (
    <div ref={skillsRef} className="skills-wrapper">
      {showSkills && (
        <div className="infos">
          <div className="hard">
            <h2>Hard Skills</h2>
            <ul>
              <li>HTML & CSS</li>
              <li>Responsividade</li>
              <li>Next.js, React.js, Vue.js</li>
              <li>Node.js, Express.js</li>
              <li>PHP, Python</li>
              <li>Banco de Dados (MySQL e MongoDB)</li>
            </ul>
          </div>
          <hr />
          <div className="soft">
            <h2>Soft Skills</h2>
            <ul>
              <li>Resolução de Problemas</li>
              <li>Facilidade de adaptação</li>
              <li>Organização</li>
              <li>Capacidade de Aprendizado contínuo</li>
              <li>Atenção aos detalhes</li>
              <li>Comprometimento com qualidade e resultados</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Skills;
