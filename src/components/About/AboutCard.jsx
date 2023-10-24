import { Button } from "bootstrap";
import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Arshad vk </span>
            from <span className="purple"> Kerala, India.</span>
            <br /> I am a self taught <span className="purple">Mern Stack Developer </span>. I have a strong interest in web development and I have been self learning and working on Mern stack projects . I have completed 2 main project and some mini projects also. 

            <br />
            <br />
          </p>

        </blockquote>

      </Card.Body>
    </Card>
  );
}

export default AboutCard;
