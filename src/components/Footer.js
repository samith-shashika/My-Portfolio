import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import githubIcon   from "../assets/img/github-icon.svg";
import linkedinIcon from "../assets/img/nav-icon1.svg";
import facebookIcon from "../assets/img/nav-icon2.svg";
import instagramIcon from "../assets/img/nav-icon3.svg";

export const Footer = () => (
  <footer className="footer">
    <Container>
      <Row className="align-items-center">
        <MailchimpForm />
        <Col xs={12} sm={6} className="text-center text-sm-start mb-3 mb-sm-0">
          <img src={logo} alt="Logo" className="footer-logo" />
        </Col>
        <Col xs={12} sm={6} className="text-center text-sm-end">
          <div className="social-icon">
            <a href="https://github.com/SamithShashika71" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/samith-shashika" target="_blank" rel="noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <img src={facebookIcon} alt="Facebook" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <img src={instagramIcon} alt="Instagram" />
            </a>
          </div>
          <p>© 2026 Samith Shashika. All Rights Reserved</p>
        </Col>
      </Row>
    </Container>
  </footer>
);
