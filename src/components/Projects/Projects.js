import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ecom from "../../Assets/Projects/ecom.png";
import emotion from "../../Assets/Projects/emotion.png";
import Resource_Hub from "../../Assets/Projects/Resource_Hub.png";
import notes from "../../Assets/Projects/notes.png";
import suicide from "../../Assets/Projects/suicide.png";
import travelGuide from "../../Assets/Projects/travelGuide.png";

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
              imgPath={ecom}
              isBlog={false}
              title="Shopping App"
              description={
                <>
                  Developed a comprehensive shopping application using React
                  Native, Express, MongoDB, and Redux Toolkit for educational
                  purposes. The React Native framework ensured a consistent user
                  experience across iOS and Android platforms, while Express
                  handled server-side logic and API requests. <br />
                  The project received positive feedback during beta testing,
                  showcasing its user-friendliness and responsiveness. This
                  learning endeavor successfully demonstrated the integration of
                  backend and frontend technologies.
                </>
              }
              // ghLink="https://github.com/soumyajit4419/Chatify"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={notes}
              isBlog={false}
              title="Notes"
              description={
                <>
                  The "Notes" project was a web application aimed atlearning
                  React with TypeScript and Redux Toolkit forstate management.
                  It provided hands-on experience inmodern web development.
                  <br />
                  The "Notes" project was an educational web applicationfor
                  learning React, TypeScript, and Redux Toolkit,offering
                  practical experience in contemporary webdevelopment.
                </>
              }
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travelGuide}
              isBlog={false}
              title="Travel Guide"
              description={
                <>
                  Developed front-end features using Bootstrap, ReactJS, and
                  Redux toolkit Developed REST APIs usingDjango and Express Used
                  Git and GitHub for versioncontrol. <br />
                  Created a user-friendly travel platform, offeringessential
                  details on top hotels, tourist spots, and thelocations of
                  hospitals, petrol stations, and policestations, simplifying
                  trip planning for travelers
                </>
              }
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecom}
              isBlog={false}
              title="Coupons App"
              description={
                <>
                  Created the "Coupons App" to simplify employee mealcoupon
                  management and automate monthly billing. As the lead backend
                  developer, utilized Express.js andMongoDB to build the system
                  and essential APIs.Automated the billing process, introduced a
                  user-friendly meal booking system, and facilitated
                  expensetracking for employees.
                </>
              }
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Resource_Hub}
              isBlog={false}
              title="ResourceHub"
              description={
                <>
                  Built front-end features with React JS, Redux toolkit,Sass,
                  useFormik, and Bootstrap, and integrated role-based access
                  control (RBAC) using Git and GitHub forversion control.
                  <br /> Created a centralized repository for
                  businessinformation with user role-based permissions,enhancing
                  resource management and access control.
                </>
              }
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
