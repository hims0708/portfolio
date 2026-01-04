import { motion } from "framer-motion";

function Resume() {
  return (
    <motion.section
      id="resume"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <h2>Resume</h2>
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noreferrer"
        className="btn"
      >
        View Resume
      </a>
    </motion.section>
  );
}

export default Resume;
