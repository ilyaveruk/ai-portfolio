import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import Particle from "../Particle";
import zerli from "../../Assets/Projects/zerli.png";

const Projects = () => {

    return (
        <Container fluid className="project-section">
            <Particle/>
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works </strong>
                </h1>
                <p style={{color: "white"}}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row style={{justifyContent: "center", paddingBottom: "10px"}}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={zerli}
                            isBlog={false}
                            title="Zerli"
                            description="Client-Server Flower Shop System designed and built as a collabrative project during our 5th semester in Braude College of Engineering."
                            ghLink="https://github.com/Braude-s-Geniuses/zerli-project"
                            //demoLink=""
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;