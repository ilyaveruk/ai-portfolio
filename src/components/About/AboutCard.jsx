import React from "react";
import Card from "react-bootstrap/Card";
import {ImPointRight} from "react-icons/im";

const AboutCard = () => {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{textAlign: "justify"}}>
                        Hi Everyone, I am <span className="purple">Ilya Averuk </span>
                        from <span className="purple"> Israel.</span>
                        <br/> I am a final year student pursuing an BSc (Bachelors of Science)
                        in Software Engineering.
                        <br/>
                        Additionally, I am currently employed as a software developer at
                        MTL-3D.
                        <br/>
                        <br/>
                        Apart from coding, some other activities that I love to do!
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight/> World Travelling
                        </li>
                        <li className="about-activity">
                            <ImPointRight/> Community Contribution
                        </li>
                        <li className="about-activity">
                            <ImPointRight/> Cycling
                        </li>
                    </ul>

                    <p style={{color: "rgb(155 126 172)"}}>
                        "Everything's impossible until somebody does it!"{" "}
                    </p>
                    <footer className="blockquote-footer">Bruce Wayne</footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;