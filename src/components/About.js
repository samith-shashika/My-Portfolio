import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import aboutImg from '../assets/img/about-img.jpg';

const educationItems = [
  { period: "2012 – 2017", title: "G.C.E O/L", subtitle: "Bandaragama Central College" },
  { period: "2018 – 2020", title: "G.C.E A/L", subtitle: "St. John's College Panadura" },
  { period: "2022 – 2026", title: "BSc.(Hons) Software Engineering", subtitle: "SLTC Research University – Padukka" },
];

const experienceItems = [
  { period: "2022 – Present", title: "Web Development", subtitle: "Streamify (Real-Time Chat & Video Calling App), QuickCart (Full-Stack E-Commerce Platform)" },
  { period: "2022 – Present", title: "Mobile App Development", subtitle: "SignBridge (Sign Language Translation App – FYP)" },
  { period: "2023 – Present", title: "AI, Machine Learning & Computer Vision", subtitle: "QuickAI (AI SaaS Multi-Tool Platform), PredictiveHR (Employee Churn Prediction)" },
];

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export const About = () => {
  const [activeTab, setActiveTab] = useState("education");
  const items = activeTab === "education" ? educationItems : experienceItems;

  return (
    <section className="about" id="about">
      <Container>
        <Row>
          <Col xs={12} className="text-center mb-4">
            <motion.h2
              className="about-title section-title"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >About Me</motion.h2>
          </Col>
        </Row>
        <Row className="align-items-start">
          <Col xs={12} md={6}>
            <motion.div
              className="mb-4 mb-md-0"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
            >
              <img src={aboutImg} alt="About Me" className="about-img" />
            </motion.div>
          </Col>

          <Col xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            >
              <p className="about-description">
                I'm Samith Shashika, a Software Engineering undergraduate at SLTC Research University
                with hands-on experience in full-stack web development, mobile app development, UI/UX
                design, and AI/ML integration. I have built real-world applications using React, Node.js,
                Express.js, MongoDB, PostgreSQL, and Flutter, focusing on scalable systems and intuitive
                user experiences. I'm seeking a Software Engineering internship to gain industry experience
                and contribute to impactful projects.
              </p>

              <div className="custom-tab-buttons">
                <span
                  className={activeTab === "education" ? "tab active" : "tab"}
                  onClick={() => setActiveTab("education")}
                >
                  Education
                </span>
                <span
                  className={activeTab === "experience" ? "tab active" : "tab"}
                  onClick={() => setActiveTab("experience")}
                >
                  Experience
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  className="tab-content-box"
                  variants={listVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {items.map((item, i) => (
                    <motion.div key={i} variants={itemVariants} className="timeline-item">
                      <div className="timeline-line-container">
                        <div className="timeline-dot" />
                        {i < items.length - 1 && <div className="timeline-line" />}
                      </div>
                      <div className="timeline-content glass-card">
                        <span className="timeline-period">{item.period}</span>
                        <strong className="gradient-text">{item.title}</strong>
                        <p>{item.subtitle}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
