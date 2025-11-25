import '../CSS/ProjectsCSS.css';

function Projects() {
  return (
    <div id="projects-container">
      <h1 id="projects-title">Projects</h1>

      <div id="project-card">
        <h2 id="proj-name">Pizzeria Website</h2>
        <p id="proj-tech">ReactJS, NodeJS, MongoDB</p>
        <p id="proj-desc">A full stack food ordering system with admin panel.</p>
      </div>

      <div id="project-card">
        <h2 id="proj-name">Virtual ATM</h2>
        <p id="proj-tech">Java, OOPS</p>
        <p id="proj-desc">CLI based ATM with deposit, withdraw, statement features.</p>
      </div>

      <div id="project-card">
        <h2 id="proj-name">Gold Android App</h2>
        <p id="proj-tech">Java, XML, Firebase</p>
        <p id="proj-desc">A platform for users to find skilled goldsmiths.</p>
      </div>
    </div>
  );
}

export default Projects;
