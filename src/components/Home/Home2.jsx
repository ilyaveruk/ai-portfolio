import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import Avatar from "../../Assets/avatar.svg";
import {
    AiFillGithub,
    AiFillInstagram,
} from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa";

const Home2 = () => {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{fontSize: "2.6em"}}>
                            LET ME <span className="blue"> INTRODUCE </span> MYSELF
                        </h1>
                        <p className="home-about-body">
                            I'm a final year Software Engineering student.
                            <br/>
                            <br/>
                            I am fluent in classics like
                            <i>
                                <b className="blue"> C++, C, Java, Javascript and Python. </b>
                            </i>
                            <br/>
                            <br/>
                            My field of Interest's are building new &nbsp;
                            <i>
                                <b className="blue">Web Technologies, Large systems and Products </b> and
                                also in areas related to{" "}
                                <b className="blue">
                                    Blockchain and NFTs.
                                </b>
                            </i>
                            <br/>
                            <br/>
                            Whenever possible, I also apply my passion for developing products
                            with <b className="blue">Node.js</b> and
                            <i>
                                <b className="blue">
                                    {" "}
                                    Modern Javascript Library and Frameworks
                                </b>
                            </i>
                            &nbsp; like
                            <i>
                                <b className="blue"> ReactJS and Angular</b>
                            </i>
                        </p>
                    </Col>
                    <Col md={4} className="myAvatar">

                        <img src={Avatar} className="img-fluid w-75 h-75" alt="avatar"/>

                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>FIND ME ON</h1>
                        <p>
                            Feel free to <span className="blue">connect </span>with me
                        </p>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/ilyaveruk"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillGithub/>
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/ilya-averuk-4944951b8/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaLinkedinIn/>
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.instagram.com/ilyaveruk/?next=%2F"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <AiFillInstagram/>
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default Home2;