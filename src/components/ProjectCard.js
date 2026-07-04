import { useRef } from "react";
import { Col } from "react-bootstrap";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export const ProjectCard = ({ title, description, imgUrl, link, techStack = [], delay = 0 }) => {
  const ref = useRef(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-12, 12]), { stiffness: 260, damping: 22 });
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [10, -10]),  { stiffness: 260, damping: 22 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    rawX.set((e.clientX - rect.left) / rect.width  - 0.5);
    rawY.set((e.clientY - rect.top)  / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <Col xs={12} sm={6} md={4}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: "easeOut", delay }}
        style={{ rotateX, rotateY, transformPerspective: 1000 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
          <div className="proj-imgbx">
            <img src={imgUrl} alt={title} />
            <div className="proj-txtx">
              <h4>{title}</h4>
              <span>{description}</span>
              <div className="tech-tags">
                {techStack.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="proj-github-icon">
                <i className="bi bi-github"></i> View on GitHub
              </div>
            </div>
          </div>
        </a>
      </motion.div>
    </Col>
  );
};
