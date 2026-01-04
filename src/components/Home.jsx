import { motion } from "framer-motion";

function Home() {
  return (

    <motion.section
      id="home"
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="home-content">
        <h1>Hello, I'm <span>Himanshu Singh</span></h1>
        <h3>Software Developer</h3>
        <p>Specialized in React, Next.js, and Enterprise Integrations.</p>

        <div className="btn-group">
          <a href="resume.pdf" download className="btn">
            Download Resume
          </a>
          <a
            href="resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn outline"
          >
            View Resume
          </a>
        </div>
      </div>

      <div className="home-image">
        <img src="profile.png" alt="Hims Raghuvanshi" />
      </div>
    </motion.section>
  );
}


export default Home;
