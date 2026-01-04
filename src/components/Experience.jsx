import { motion } from "framer-motion";

function Experience() {
    const experiences = [
        {
            company: "Emicon Advisory Services",
            role: "Oracle Technical Consultant",
            duration: "May 2024 – Jan 2025",
            desc: [
                "Engineered and automated 3 BI Publisher reports for Procurement, AR, and AP, cutting manual report handling by 15+ hours weekly.",
                "Optimized SQL/PLSQL procedures to reduce average report generation time by 30%.",
                "Implemented REST API integrations within OIC to streamline workflows.",
                "Coordinated with business analysts to validate data mappings and ensure reporting accuracy."
            ]
        },
        {
            company: "Codeyoung",
            role: "Web Development & Java Mentor",
            duration: "Mar 2024 – Present",
            desc: [
                "Delivered instructor-led and project-based training to 120+ students on HTML, CSS, JavaScript, and Java.",
                "Designed lesson plans/projects that raised student project completion by 35%.",
                "Performed code reviews and provided debugging guidance."
            ]
        }
    ];

    return (
        <motion.section id="experience" whileInView={{ opacity: 1 }}>
            <h2>Experience</h2>
            <div className="experience-list">
                {experiences.map((exp, i) => (
                    <motion.div key={i} className="experience-card" whileHover={{ scale: 1.02 }}>
                        <h3>{exp.role}</h3>
                        <h4>{exp.company} | <span>{exp.duration}</span></h4>
                        <ul>
                            {exp.desc.map((point, j) => (
                                <li key={j}>{point}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>

            <div className="education">
                <h2>Education</h2>
                <div className="experience-card">
                    <h3>B.Tech, Computer Science Engineering</h3>
                    <h4>Chitkara University, Rajpura, Punjab | <span>2020 – 2024</span></h4>
                    <p>CGPA: 9.3 / 10</p>
                </div>
            </div>
        </motion.section>
    );
}

export default Experience;
