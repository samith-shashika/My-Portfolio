import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import contactImg from "../assets/img/contact-img.png";

const FORMSPREE_URL = "https://formspree.io/f/mqabpbvn";

const initialForm = { firstName: '', lastName: '', email: '', phone: '', message: '' };

export const Contact = () => {
  const [formDetails, setFormDetails] = useState(initialForm);
  const [buttonText, setButtonText] = useState('Send Message');
  const [status, setStatus] = useState({});

  const onFormUpdate = (field, value) =>
    setFormDetails(prev => ({ ...prev, [field]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    const body = new FormData();
    body.append('First Name', formDetails.firstName);
    body.append('Last Name', formDetails.lastName);
    body.append('Email', formDetails.email);
    body.append('Phone', formDetails.phone);
    body.append('Message', formDetails.message);
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { Accept: "application/json" },
        body,
      });
      setButtonText("Send Message");
      if (res.ok) {
        setFormDetails(initialForm);
        setStatus({ success: true, message: "Message sent successfully!" });
      } else {
        setStatus({ success: false, message: "Something went wrong. Please try again." });
      }
    } catch {
      setButtonText("Send Message");
      setStatus({ success: false, message: "Failed to send. Please try again." });
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row>
          <Col xs={12} className="text-center mb-0">
            <motion.h2
              className="section-title"
              variants={fadeUp} initial="hidden"
              whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            >Get in Touch</motion.h2>
          </Col>
        </Row>
        <Row className="align-items-stretch">
          <Col md={6} className="d-flex flex-column">
            <motion.div
              className="h-100"
              variants={fadeUp} initial="hidden"
              whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            >
              <div className="contact-left-wrapper">
                <div className="contact-details-box mb-3">
                  <h4>Contact Details</h4>
                  <p><i className="bi bi-envelope-fill me-2"></i><strong>Email:</strong> samithshashika.se@gmail.com</p>
                  <p><i className="bi bi-telephone-fill me-2"></i><strong>Phone:</strong> +94 76 402 1805</p>
                </div>
                <div className="contact-img-grow">
                  <img src={contactImg} alt="Contact" className="contact-img-large" />
                </div>
              </div>
            </motion.div>
          </Col>

          <Col md={6} className="d-flex align-items-center">
            <motion.div
              className="w-100"
              variants={fadeUp} initial="hidden"
              whileInView="visible" viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.1 }}
            >
              <form onSubmit={handleSubmit}>
                <Row>
                  <Col sm={6} className="px-2">
                    <div className="floating-field">
                      <input type="text" id="firstName" placeholder=" " value={formDetails.firstName} onChange={e => onFormUpdate('firstName', e.target.value)} required />
                      <label htmlFor="firstName">First Name</label>
                    </div>
                  </Col>
                  <Col sm={6} className="px-2">
                    <div className="floating-field">
                      <input type="text" id="lastName" placeholder=" " value={formDetails.lastName} onChange={e => onFormUpdate('lastName', e.target.value)} required />
                      <label htmlFor="lastName">Last Name</label>
                    </div>
                  </Col>
                  <Col sm={6} className="px-2">
                    <div className="floating-field">
                      <input type="email" id="email" placeholder=" " value={formDetails.email} onChange={e => onFormUpdate('email', e.target.value)} required />
                      <label htmlFor="email">Email Address</label>
                    </div>
                  </Col>
                  <Col sm={6} className="px-2">
                    <div className="floating-field">
                      <input type="tel" id="phone" placeholder=" " value={formDetails.phone} onChange={e => onFormUpdate('phone', e.target.value)} required />
                      <label htmlFor="phone">Phone Number</label>
                    </div>
                  </Col>
                  <Col sm={12} className="px-2">
                    <div className="floating-field">
                      <textarea rows="5" id="message" placeholder=" " value={formDetails.message} onChange={e => onFormUpdate('message', e.target.value)} required></textarea>
                      <label htmlFor="message">Your Message</label>
                    </div>
                  </Col>
                  <Col sm={12} className="px-1 d-flex justify-content-start mt-1">
                    <button type="submit" className="square-btn"><span>{buttonText}</span></button>
                  </Col>
                  {status.message && (
                    <Col className="mt-3">
                      <p className={status.success ? "success" : "danger"}>{status.message}</p>
                    </Col>
                  )}
                </Row>
              </form>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
