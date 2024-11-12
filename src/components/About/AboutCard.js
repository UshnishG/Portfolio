import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ushnish Ghosal </span>
            from <span className="purple"> Chennai, India.</span>
            <br />
            I am currently working on my skills towards Computer Vision, LLMs and Machine Learning.
            <br />
            I am currently a Sophomore Student at SRM Institute of Science and Technology, Kattankulathur.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Good Code is its own best documentation!"{" "}
          </p>
          <footer className="blockquote-footer">Ushnish</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
