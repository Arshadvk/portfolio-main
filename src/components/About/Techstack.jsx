import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import tailwind from '../../Assets/pngwing.com.png'
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiJava,
  DiBootstrap,
  DiAws,
  DiMysql,
  DiHtml5,
  DiGithub,
  DiTypo3,
  DiCss3,
  DiCss3Full,
  
} from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1  className="tech-icon"/>
        <p>Java Script</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb className="tech-icon"/>
        <p>MongoDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap className="tech-icon"/>
        <p>BootStrap</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAws className="tech-icon"/>
        <p>AWS</p>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql className="tech-icon"/>
        <p>Mysql</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 className="tech-icon"/>
        <p>HTML</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGithub className="tech-icon"/>
        <p>Git Hub</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        
      <h1 className="" style={{ fontWeight: 'bold' ,fontSize: '3.5em' }}>TS</h1>
        <p>type script</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3Full className="tech-icon"/>
    <p>Tailwind CSS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact className="tech-icon"/>
        <p>React JS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs className="tech-icon"/>
        <p>Node JS (express)</p>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiGit className="tech-icon"/>
        <p>Git</p>
      </Col>
      
      
    </Row>
  );
}

export default Techstack;
