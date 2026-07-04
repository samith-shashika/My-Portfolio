import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

const projects = [
  {
    title: "QuickAI",
    description: "A PERN-stack AI SaaS platform offering AI-powered tools, Clerk authentication, subscription billing, and a Neon PostgreSQL database.",
    imgUrl: projImg8,
    category: "AI/ML",
    link: "https://github.com/SamithShashika71/QuickAI",
    techStack: ["React", "Node.js", "PostgreSQL", "Clerk"],
  },
  {
    title: "Streamify",
    description: "A MERN-stack real-time chat and video calling app with JWT auth, friends system, 32 themes, and Stream API integration.",
    imgUrl: projImg7,
    category: "Web",
    link: "https://github.com/SamithShashika71/Streamify-Social-App",
    techStack: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    title: "SignBridge — FYP",
    description: "AI-powered mobile app for real-time Sri Lankan Sign Language gesture translation and 3D avatar-based text-to-sign rendering.",
    imgUrl: projImg9,
    category: "Mobile",
    link: "https://github.com/SamithShashika71/SignBridge",
    techStack: ["Flutter", "Dart", "Python", "ML/CV"],
  },
  {
    title: "PredictiveHR",
    description: "AI-powered HR analytics platform for employee churn prediction using machine learning with FastAPI, React, and PostgreSQL.",
    imgUrl: projImg5,
    category: "AI/ML",
    link: "https://github.com/SamithShashika71/PredictiveHR",
    techStack: ["React", "FastAPI", "PostgreSQL", "ML"],
  },
  {
    title: "QuickCart",
    description: "A modern full-stack e-commerce web application built with Next.js, MongoDB, Tailwind CSS, Clerk, and Inngest.",
    imgUrl: projImg6,
    category: "Web",
    link: "https://github.com/SamithShashika71/QuickCart",
    techStack: ["Next.js", "MongoDB", "Tailwind", "Clerk"],
  },
];

const renderProjects = (category) => {
  const filtered = category === "All" ? projects : projects.filter(p => p.category === category);
  return (
    <Row>
      {filtered.map((project, index) => (
        <ProjectCard key={index} {...project} delay={index * 0.1} />
      ))}
    </Row>
  );
};

export const Projects = () => (
  <section className="project" id="projects">
    <Container>
      <Row>
        <Col xs={12}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="section-title">Projects</h2>
            <p className="project-desc">
              Real-world and academic projects spanning AI, full-stack web development, and mobile apps.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="all">
              <Nav variant="pills" className="mb-4 justify-content-center">
                <Nav.Item><Nav.Link eventKey="all">All</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="mobile">Mobile</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="web">Web</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="ai">AI / ML</Nav.Link></Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="all">{renderProjects("All")}</Tab.Pane>
                <Tab.Pane eventKey="mobile">{renderProjects("Mobile")}</Tab.Pane>
                <Tab.Pane eventKey="web">{renderProjects("Web")}</Tab.Pane>
                <Tab.Pane eventKey="ai">{renderProjects("AI/ML")}</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </motion.div>
        </Col>
      </Row>
    </Container>
    <img className="background-image-right" src={colorSharp2} alt="" />
  </section>
);
