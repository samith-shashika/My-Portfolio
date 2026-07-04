import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import githubIcon from '../assets/img/github-icon.svg';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'projects'];
    const observers = sectionIds.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveLink(id); },
        { threshold: 0.25, rootMargin: "-75px 0px 0px 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(o => o && o.disconnect());
  }, []);

  return (
    <Router>
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ position: "relative", zIndex: 9999 }}
      >
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
          <Container>
            <Navbar.Brand href="/">
              <img src={logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}>Home</Nav.Link>
                <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'}>About Me</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}>Skills</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}>Projects</Nav.Link>
              </Nav>
              <span className="navbar-text">
                <div className="social-icon">
                  <a href="https://github.com/SamithShashika71" target="_blank" rel="noreferrer"><img src={githubIcon} alt="GitHub" /></a>
                  <a href="https://www.linkedin.com/in/samith-shashika" target="_blank" rel="noreferrer"><img src={navIcon1} alt="LinkedIn" /></a>
                  <a href="https://facebook.com" target="_blank" rel="noreferrer"><img src={navIcon2} alt="Facebook" /></a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer"><img src={navIcon3} alt="Instagram" /></a>
                </div>
                <HashLink to='#connect'>
                  <button className="vvd"><span>Let's Connect</span></button>
                </HashLink>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </motion.div>
    </Router>
  );
};
