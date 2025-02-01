import "../App.css";
import ProjectCard from "../components/ProjectCard";
import Navbar from "../components/NavBar";
import SocialMediaLinks from "../components/SocialMediaLinks";

function ProjectsPage() {
  const topTierContent = {
    title: "TopTier",
    description:
      "An interactive platform designed for gaming enthusiasts to explore, catalog, rank, and review their favorite video games. The application allows users to create personal accounts, browse through a comprehensive list of video games, and contribute by adding their own ratings and reviews. The platform features JWT authentication, RESTful API's, and a MongoDB database.",
    stack: ["JavaScript", "React", "Node.js", "MongoDB"],
  };

  const infoVentureContent = {
    title: "InfoVenture",
    description:
      "An educational game developed for ShellHacks, designed to empower students from underrepresented communities by teaching essential life lessons through interactive gameplay. The game leverages the Unity platform to create an engaging and immersive experience.",
    stack: ["C#", "Unity"],
  };

  const distributedWebAppContent = {
    title: "C.R.U.D",
    description:
      "A multi-tier web app that allows users to read existing records, update information, and delete records related to Olympic events. Built as a distributed system, C.R.U.D utilizes Java Servlets and the Tomcat server to handle client requests and manage data across multiple layers. The frontend of the application was developed using HTML and CSS, providing a clean and user-friendly interface. ",
    stack: ["Java", "Tomcat", "HTML", "CSS"],
  };

  const handSignInterpreterContent = {
    title: "ASL Interpreter",
    description:
      "A Python-based application designed to recognize and interpret hand signs representing letters of the American Sign Language alphabet. The application captures real-time input and outputs the corresponding letter to the terminal, making it a useful tool for learning and practicing ASL.",
    stack: ["Python", "OpenCV", "MediaPipe"],
  };

  const pl0CompilerContent = {
    title: "PL-0 compiler",
    description:
      "A C based compiler designed to parse, analyze, and compile code written in the PL/0 programming language. This compiler checks the grammar and syntax of the PL/0 code and also generates corresponding assembly code.",
    stack: ["C"],
  };

  const visualGeolocatorContent = {
    title: "Visual Geolocator",
    description:
      "A Python-based application that uses computer vision and 3D modeling to localize an image. The application leverages OpenGL to create a 3D model of the search space and Open Street Map with Google Maps to extract geographical information from the image and predict the location where the it was taken.",
    stack: ["Python", "OpenGL", "DracoPy"],
  };

  const LinguabilityContent = {
    title: "Linguability",
    description:
      "A Chrome extension that randomly translates sentences on any webpage, helping you master new languages.",
    stack: ["JavaScript", "Node.js"],
  };

  const NotableContent = {
    title: "Notable",
    description:
      "A note-taking app that allows users to create, edit, and delete notes. The app is built using React and Node.js, and uses a MongoDB database to store the notes.",
    stack: ["JavaScript", "Node.js", "Next.js", "MongoDB"],
  };

  const projectContainerStyle = {
    display: "grid",
    fontSize: "0",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "auto",
    gridGap: "3vh",
    justifyContent: "center",
    alignItems: "center",
  };

  const innerBackground = {
    boxSizing: "border-box",
    height: "75vh",
    borderRadius: "10px",
    overflow: "scroll",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    paddingTop: "2rem",
    paddingBottom: "10rem",
  };

  return (
    <div
      className="backgroundBox"
      style={{ flexDirection: "Column", paddingBottom: "0" }}
    >
      <div className="pageHeader">
        <h1 style={{ fontSize: "5vw", fontWeight: "800", flex: "0 0 30%" }}>
          PROJECTS
        </h1>
        <Navbar />
      </div>
      <div style={innerBackground}>
        <div style={projectContainerStyle}>
          <ProjectCard content={topTierContent} />
          <ProjectCard content={visualGeolocatorContent} />
          <ProjectCard content={LinguabilityContent} />
          <ProjectCard content={NotableContent} />
          <ProjectCard content={distributedWebAppContent} />
          <ProjectCard content={infoVentureContent} />
          <ProjectCard content={handSignInterpreterContent} />
          <ProjectCard content={pl0CompilerContent} />
        </div>
      </div>
      <SocialMediaLinks />
    </div>
  );
}

export default ProjectsPage;
