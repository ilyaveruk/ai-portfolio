import React from "react";
import Card from "react-bootstrap/Card";
import {BiWorld, BiDumbbell} from "react-icons/bi";
import {BsBicycle} from "react-icons/bs";
import {CgCommunity} from "react-icons/cg";

const AboutCard = () => {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{textAlign: "justify"}}>
                        Hi Everyone, I am <b className="blue">Ilya Averuk </b>
                        from <b className="blue"> Israel.</b>
                        <br/>
                        I'm final year student pursuing Software Engineering degree.
                        <br/>
                        <br/>
                        Currently working as freelance developer and also looking for new opportunities.
                        <br/>
                        <br/>
                        The are some of the activities that I love to do!
                    </p>
                    <ul>
                        <li className="about-activity">
                            <BiWorld/> World Travelling
                        </li>
                        <li className="about-activity">
                            <CgCommunity/> Community Contribution
                        </li>
                        <li className="about-activity">
                            <BsBicycle/> Cycling
                        </li>
                        <li className="about-activity">
                            <BiDumbbell/> Gym
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