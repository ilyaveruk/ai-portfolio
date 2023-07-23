import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {
    AiFillGithub,
    AiFillInstagram,
} from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa";

const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <Container fluid className="footer">
            <Row>
                <Col md="4" className="footer-copyright">
                    <h3>Designed and Developed by Ilya Averuk </h3>
                </Col>
                <Col md="4" className="footer-copyright">
                    <h3>Copyright © {year} IA™ </h3>
                </Col>
                <Col md="4" className="footer-body">
                    <ul className="footer-icons">
                        <li className="social-icons">
                            <a
                                href="https://github.com/ilyaveruk"
                                style={{color: "white"}}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillGithub/>
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.linkedin.com/in/ilya-averuk-4944951b8/"
                                style={{color: "white"}}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedinIn/>
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                                href="https://www.instagram.com/ilyaveruk/?next=%2F"
                                style={{color: "white"}}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <AiFillInstagram/>
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;