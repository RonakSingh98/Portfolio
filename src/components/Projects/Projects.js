import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
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
              title="Social Media App"
              description="Sociopedia is a dynamic social media platform inspired by Twitter, designed to empower users to share thoughts, connect with communities, and engage in real-time discussions. With a focus on concise communication and trending topics, Sociopedia enables users to post short messages, follow people, and stay updated on the latest conversations."
              ghLink="https://github.com/RonakSingh98/Social-media"
              demoLink="https://social-media-5zb8.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Backend for Todo"
              description="The To-Do List Backend API is a robust and efficient backend service designed to support a to-do list application. Built with Express.js, this API allows users to create, retrieve, update, and delete their tasks. It handles data persistence, authentication, and provides a structured framework for managing to-do items effectively."
              ghLink="https://github.com/RonakSingh98/Todo-Backend"
              demoLink="https://github.com/RonakSingh98/Todo-Backend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="AI landing Page"
              description="The AI Solutions Landing Page is a sleek, visually engaging introduction to a powerful AI platform, designed to inform visitors about its offerings and encourage them to join. With a modern design and user-friendly navigation, the landing page highlights the platform's cutting-edge features, showcases use cases, and includes an easy login and signup option for new users."
              ghLink="https://github.com/RonakSingh98/Chatgpt-landing-page"
              demoLink="https://react-ai-project-frontend.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="GIF Search"
              description="The GIF Search Engine Website is a fast, user-friendly platform designed to help users search and discover animated GIFs. With an intuitive interface and a powerful search functionality, users can easily find GIFs based on various themes, emotions, or topics. The platform can connect to popular GIF APIs, ensuring a large library of trending and relevant GIFs to choose from."
              ghLink="https://github.com/RonakSingh98/Giphy-Firebase"
              demoLink="https://giphy-firebase.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Blockchain Ticket "
              description="The Blockchain-Enabled Ticket Booking Website is a secure and efficient platform designed to facilitate ticket booking for events such as concerts, sports games, theaters, and more. This platform leverages blockchain technology to ensure transparency, security, and authenticity of transactions, while providing users with a user-friendly experience for booking tickets."
              ghLink="https://github.com/RonakSingh98/Blockchain-ticket"
              demoLink="https://blockchain-ticket.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Travel Booking"
              description="The Travel Booking Website is a full-featured platform that allows users to book trips, find accommodations, and explore various destinations. This project offers a seamless user experience with features such as user authentication (login/signup), detailed destination listings, and advanced sorting and filtering options to enhance usability."
              ghLink="https://github.com/RonakSingh98/TravelBooking"
              demoLink="https://totality-frontend-challenge-delta.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
