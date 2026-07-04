import { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, useInView } from "framer-motion";
import headerImg from "../assets/img/header-img.png";

const toRotate = ["Full Stack Developer", "UI/UX Designer", "AI/ML Enthusiast", "Mobile App Developer"];
const TYPING_SPEED   = 150;
const DELETING_SPEED = 80;
const PAUSE_DURATION = 2000;

const StatCounter = ({ end, label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let current = 0;
    const increment = end / 60;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <div ref={ref} className="stat-item">
      <span className="stat-number">{count}+</span>
      <span className="stat-label">{label}</span>
    </div>
  );
};

export const Banner = () => {
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(TYPING_SPEED);
  const loopNum    = useRef(0);
  const isDeleting = useRef(false);

  useEffect(() => {
    const ticker = setInterval(() => {
      const i        = loopNum.current % toRotate.length;
      const fullText = toRotate[i];
      const updated  = isDeleting.current
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updated);

      if (!isDeleting.current && updated === fullText) {
        isDeleting.current = true;
        setDelta(PAUSE_DURATION);
      } else if (isDeleting.current && updated === '') {
        isDeleting.current = false;
        loopNum.current += 1;
        setDelta(TYPING_SPEED);
      } else if (isDeleting.current) {
        setDelta(DELETING_SPEED);
      }
    }, delta);
    return () => clearInterval(ticker);
  }, [text, delta]);

  const containerVariants = {
    hidden:  {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };
  const itemVariants = {
    hidden:  { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <motion.div variants={containerVariants} initial="hidden" animate="visible">
              <motion.span variants={itemVariants} className="tagline mb-3 d-inline-block">
                Welcome to my Portfolio
              </motion.span>
              <motion.h1 variants={itemVariants} className="mb-2">
                Hi! I'm <span className="gradient-text">Samith</span>
              </motion.h1>
              <motion.h2 variants={itemVariants} className="animated-role-text mb-4">
                I am a <span className="wrap">{text}</span>
              </motion.h2>
              <motion.div variants={itemVariants} className="banner-buttons mt-4">
                <a href="/Samith_CV.pdf" download className="btn btn-primary">Download CV</a>
              </motion.div>
              <motion.div variants={itemVariants} className="banner-stats mt-5">
                <StatCounter end={5} label="Projects" />
                <div className="stat-divider" />
                <StatCounter end={3} label="Years Coding" />
                <div className="stat-divider" />
                <StatCounter end={4} label="Tech Stacks" />
              </motion.div>
            </motion.div>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <img src={headerImg} alt="Samith Shashika" />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
