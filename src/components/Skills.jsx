import { motion } from "framer-motion";

function Skills() {
  const skills = [
    { name: "Java", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "SQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "PL/SQL", img: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
    { name: "Oracle OIC", img: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
    { name: "BI Publisher", img: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
    { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "HTML/CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" }
  ];

  return (
    <motion.section id="skills" whileInView={{ opacity: 1 }}>
      <h2>Technical Skills</h2>
      <div className="skill-list">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="skill-card"
            whileHover={{ scale: 1.1 }}
          >
            <img src={skill.img} alt={skill.name} className="skill-icon" />
            <p>{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Skills;
