import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="OCRecog"
              description="OCR Text Extraction: Extracts text from images in multiple languages using EasyOCR and Keyword Highlighting: Allows keyword search within extracted text, with results highlighted for easy reading."
              ghLink="https://github.com/UshnishG/IITR-OCR"
              demoLink="https://huggingface.co/spaces/Ushnish2004/OcRecog"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Computer Vision Model for Coffee Bean Quality Assurance"
              description="Created an OpenCV-based computer vision system for precise size classification of six size categories. This was an industry project hence the code is not open source neither is the documentation available."
              ghLink="https://github.com/UshnishG"   
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="AnuPaat - A Sales Data Analysis Tool"
              description="Created a sales data analysis tool using Streamlit and Python, providing advanced forecasting and trend insights. Ensured seamless integration with existing workflows for enhanced business operations."
              ghLink="https://github.com/UshnishG/AnuPaat"             
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
