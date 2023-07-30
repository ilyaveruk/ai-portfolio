import React from "react";
import GitHubCalendar from "react-github-calendar";
import {Row} from "react-bootstrap";

const Github = () => {
    return (
        <Row style={{justifyContent: "center", paddingBottom: "10px"}}>
            <h1 className="project-heading" style={{paddingBottom: "20px"}}>
                My <strong className="blue">Coding</strong> routine
            </h1>
            <GitHubCalendar
                username="ilyaveruk"
                blockSize={15}
                blockMargin={5}
                color="#c084f5"
                fontSize={16}
            />
        </Row>
    );
}

export default Github;