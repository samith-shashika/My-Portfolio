import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') setEmail('');
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.indexOf("@") > -1) {
      onValidated({ EMAIL: email });
    }
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx">
        <Row className="align-items-center">
          <Col lg={12} md={6} xl={5}>
            <h3>Stay in the Loop<br />Never miss an update</h3>
            {status === 'sending' && <Alert className="mt-2">Sending...</Alert>}
            {status === 'error'   && <Alert variant="danger"  className="mt-2">{message}</Alert>}
            {status === 'success' && <Alert variant="success" className="mt-2">{message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input
                  value={email}
                  type="email"
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                />
                <button type="submit">Subscribe</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
