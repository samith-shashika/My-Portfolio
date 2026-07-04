import { motion } from "framer-motion";

const skillCategories = [
  {
    label: "Frontend", icon: "🖥️",
    skills: [
      { name: "HTML",         level: 95 },
      { name: "CSS",          level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "JavaScript",   level: 90 },
      { name: "React",        level: 90 },
    ],
  },
  {
    label: "Backend", icon: "⚙️",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Python",  level: 75 },
      { name: "Java",    level: 70 },
      { name: "OOP",     level: 85 },
    ],
  },
  {
    label: "Mobile", icon: "📱",
    skills: [
      { name: "Dart",    level: 75 },
      { name: "Flutter", level: 75 },
    ],
  },
  {
    label: "Database", icon: "🗄️",
    skills: [
      { name: "MySQL",      level: 80 },
      { name: "MongoDB",    level: 80 },
      { name: "PostgreSQL", level: 75 },
    ],
  },
  {
    label: "Tools & AI", icon: "🛠️",
    skills: [
      { name: "Figma",      level: 85 },
      { name: "Git/GitHub", level: 90 },
      { name: "Postman",    level: 80 },
      { name: "ML/AI",      level: 70 },
    ],
  },
];

const SkillBar = ({ name, level }) => (
  <div className="skill-row">
    <div className="skill-row-header">
      <span className="skill-name">{name}</span>
      <span className="skill-level">{level}%</span>
    </div>
    <div className="skill-bar-track">
      <motion.div
        className="skill-bar-fill"
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      />
    </div>
  </div>
);

const CategoryCard = ({ label, icon, skills, index }) => (
  <motion.div
    className="skill-category-card glass-card"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.08 }}
  >
    <div className="category-header">
      <span className="category-icon">{icon}</span>
      <h4 className="category-label">{label}</h4>
    </div>
    {skills.map((skill, i) => (
      <SkillBar key={i} {...skill} />
    ))}
  </motion.div>
);

export const Skills = () => (
  <section className="skill" id="skills">
    <div className="container">
      <motion.div
        className="skill-header text-center mb-5"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="section-title">Skills</h2>
        <p>Hands-on experience with modern tools and frameworks across the full development stack.</p>
      </motion.div>
      <div className="skills-grid">
        {skillCategories.map((cat, i) => (
          <CategoryCard key={i} {...cat} index={i} />
        ))}
      </div>
    </div>
  </section>
);
