import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

import { useTranslation } from '../hooks/useTranslation';


export const Footer = () => {

  const { t } = useTranslation();

  return (
    <footer className="footer">
  <Container>
    <Row className="align-items-center">
      <Col className="text-center">
        <div className="social-icon d-flex justify-content-center mb-3">
          <a href="https://www.linkedin.com/..." target="_blank" rel="noopener noreferrer">
            <img src={navIcon1} alt="Icon" />
          </a>
          <a href="https://github.com/..." target="_blank" rel="noopener noreferrer">
            <img src={navIcon3} alt="Icon" />
          </a>
          <a href="https://www.facebook.com/..." target="_blank" rel="noopener noreferrer">
            <img src={navIcon2} alt="Icon" />
          </a>
        </div>
        <p>{t('copyright')}</p>
      </Col>
    </Row>
  </Container>
</footer>
  
  )
}
