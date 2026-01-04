import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2>About Me</h2>
      <div className="about-content">
        <p>
          I am a Software Developer with hands-on experience building web interfaces and enterprise integrations.
          I specialize in developing dynamic applications using <strong>React</strong> and <strong>Next.js</strong>,
          authoring efficient <strong>SQL/PLSQL</strong> for reporting, and implementing <strong>Oracle Integration Cloud</strong> workflows.
        </p>
        <p>
          My focus is on efficiency and optimization—I have successfully automated BI reports to cut manual processing by
          <strong>15+ hours weekly</strong> and improved query performance by <strong>30%</strong>.
        </p>
      </div>
    </motion.section >
  );
}

export default About;
