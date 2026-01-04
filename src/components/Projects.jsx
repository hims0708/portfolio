import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "Trendy News",
      tech: "React, APIs",
      desc: "News portal with lazy loading, reducing load time by 20%.",
      link: "https://my-news-app-blush.vercel.app/",
      image: "images/news-bg.png"
    },
    {
      title: "Creative Pen",
      tech: "Next.js, SEO",
      desc: "Blog with SEO routing, increasing session duration by 35%.",
      link: "https://blog-pen-eight.vercel.app/",
      image: "images/blog-bg.png"
    },
    {
      title: "Portfolio Site",
      tech: "React, GitHub API",
      desc: "Personal portfolio showcasing projects and skills with a dynamic modern UI.",
      link: "https://github.com/hims0708/portfolio",
      image: "images/portfolio-bg.png"
    }
  ];

  return (
    <motion.section id="projects" whileInView={{ opacity: 1 }}>
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="project-card"
            whileHover={{ scale: 1.05 }}
            style={{
              backgroundImage: p.image ? `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${p.image})` : 'none',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              color: p.image ? '#fff' : 'inherit',
              transition: 'all 0.3s ease',
              padding: 0, // Override default padding to allow background/link to fill
              overflow: 'hidden' // Ensure anything inside stays within rounded corners
            }}
          >
            <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%', padding: '2rem' }}>
              <h3 style={{ color: p.image ? '#fff' : 'inherit' }}>{p.title}</h3>
              <p style={{ color: p.image ? '#e2e8f0' : 'inherit' }}>{p.tech}</p>
              {p.desc && <p className="project-desc" style={{ color: p.image ? '#cbd5e1' : 'inherit' }}>{p.desc}</p>}
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
