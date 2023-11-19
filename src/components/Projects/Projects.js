import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards";
import Particle from "../Particle";
import NavBar from "../Navbar";
import workers from "../../assets/projects/workers.png";
import bookme from "../../assets/projects/bookme.png";
import netflix from "../../assets/projects/netflix.png";
import olx from "../../assets/projects/olx.png";
import footware from "../../assets/projects/jtpfootwares.png";
import todo from "../../assets/projects/todo.png";

function Projects() {
  return (
    <>
   <NavBar/>
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
              imgPath={workers}
              isBlog={false}
              title="WorkersOnline"
              description="Online booking application to book Local workers, this application has 3sides for user,workers,and admin,workers like painter ,carpenter, etc can register in workers section. "
              ghLink="https://github.com/JishnuTP/WorkersOnline"
              demoLink="https://workersonline.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookme}
              isBlog={false}
              title="BOOK-ME-HOTEL"
              description="Online booking application like booking.com, mainly focused on room booking ,search nearby hotels by searching city name and easily book by checking availability of rooms in that hotel."
              ghLink="https://github.com/JishnuTP/BOOK-ME_HOTEL.git"
              demoLink="https://github.com/JishnuTP/BOOK-ME_HOTEL.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Editor.io"
              description="I developed a to-do list application using React, incorporating state management to dynamically update and render tasks, allowing users to add, edit, and remove items in a responsive and user-friendly interface."
              ghLink="https://github.com/JishnuTP/Todolist.git"
              demoLink="https://github.com/JishnuTP/Todolist.git"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="NETFLIX-ClONE"
              description="I developed a Netflix clone using React for the frontend and Firebase for the backend, implementing features like authentication, real-time database, and cloud storage to recreate the streaming platform's functionality."
              ghLink="https://github.com/JishnuTP/netflix-clone.git"
              demoLink="https://github.com/JishnuTP/netflix-clone.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
               imgPath={olx}
              isBlog={false}
              title="OLX-CLONE"
              description="I built an OLX clone using React for the frontend and Firebase for the backend, incorporating features such as user authentication, real-time database for product listings, and cloud storage for images, to replicate the functionalities of the online marketplace platform."
              ghLink="https://github.com/JishnuTP/OLX.git"
              demoLink="https://github.com/JishnuTP/OLX.git" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={footware}
              isBlog={false}
              title="E-commerce website"
              description="I developed a footwear e-commerce web application following the MVC pattern, utilizing ejs for the frontend (View), Node.js and Express for the backend (Controller), and MongoDB for the database (Model), ensuring a modular and scalable architecture for an efficient and maintainable online shopping experience..
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/JishnuTP/jtpfootwares.git"
              demoLink="https://github.com/JishnuTP/jtpfootwares.git"   
            />
          </Col>
        </Row>
      </Container>
    </Container>
    </>
  );
}

export default Projects;
