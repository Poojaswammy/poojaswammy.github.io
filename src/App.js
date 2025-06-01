import './App.css';

function App() {
  return (
    <div className="App">
      <header className="navbar">
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#resume">Resume</a>
          <a href="#publications">Publications & Research</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="intro-name">
        <h1>Pooja Manjunatha Swamy</h1>
      </section>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I’m Pooja Manjunatha Swamy, a recent graduate with a Master’s in Data Analytics Engineering from George Mason University.
          With hands-on internship and research experience, I’ve worked across domains like data visualization, machine learning, NLP, and graph-based analytics.
          <br /><br />
          I’ve contributed to real-world projects involving ETL pipelines, graph intelligence systems, and advanced data storytelling using tools like Python, SQL, Tableau, AWS, and Neo4j.
          My technical foundation is matched with a passion for transforming raw data into strategic decisions.
        </p>
      </section>

      <section className="hero" id="resume">
        <div className="hero-text">
          <h2>Data Analyst</h2>
          <p>Driven by curiosity, powered by data — ready to turn insights into action.</p>
          <a href="/Pooja_Resume.pdf" download className="btn">Download Resume</a>
        </div>
      </section>

      {/* 📄 Publications Section */}
      <section id="publications" className="section publications-section">
        <h2>Publications & Research</h2>
        <div className="contact-container">

          <div className="contact-item">
            <i className="fas fa-microscope"></i>
            <a href="https://www.irjmets.com/uploadedfiles/paper/issue_6_june_2022/26513/final/fin_irjmets1655880719.pdf" target="_blank" rel="noopener noreferrer">
              <strong className="link-label">Paper_1</strong>
            </a>
            <p className="paper-description">
              – Developed a CNN model for detecting lung cancer from CT images to support early diagnosis.
            </p>
          </div>

          <div className="contact-item">
            <i className="fas fa-tint"></i>
            <a href="https://troindia.in/journal/ijcesr/vol9iss6/45-49.pdf" target="_blank" rel="noopener noreferrer">
              <strong className="link-label">Paper_2</strong>
            </a>
            <p className="paper-description">
              – Designed an IoT-based water management system to track household water flow, automate billing, and promote efficient usage.
            </p>
          </div>

        </div>
      </section>

      {/* 🧠 Projects Section */}
      <section id="projects" className="section projects-section">
        <h2>Projects</h2>
        <div className="project-grid">

          <div className="project-card">
            <img src="/diabetics.webp" alt="Heal-Me Project" />
            <h3>Heal-Me</h3>
            <p>Built a predictive ML model to detect early diabetes risk using clinical data.</p>
            <a href="https://github.com/Poojaswammy/Heal-Me" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> GitHub
            </a>
          </div>

          <div className="project-card">
            <img src="/sentiment analysis.png" alt="Social Pulse Analysis Project" />
            <h3>Social Pulse Analysis</h3>
            <p>Analyzed social media sentiment using NLP models to uncover public opinion trends.</p>
            <a href="https://github.com/Poojaswammy/Social-Pulse-Analysis" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> GitHub
            </a>
          </div>

          <div className="project-card">
            <img src="/imdb.webp" alt="IMDb Tableau Visualization Project" />
            <h3>IMDb Tableau Visualization</h3>
            <p>Created visual dashboards from IMDb data to identify trends in genre and ratings.</p>
            <a href="https://github.com/Poojaswammy/IMDb-Tableau-Visualization" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> GitHub
            </a>
          </div>

          <div className="project-card">
            <img src="/fentanyl.jpg" alt="ISO Linkage Graphers Project" />
            <h3>ISO Linkage Graphers</h3>
            <p>Mapped fentanyl trafficking networks using graph database visualizations and Neo4j.</p>
            <a href="https://github.com/TeamDLinkageGraphers/ISO_Linkage_Graphers" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i> GitHub
            </a>
          </div>
        </div>
      </section>

      {/* ✉️ Contact Section */}
      <section id="contact" className="section contact-section">
        <h2>Contact</h2>
        <div className="contact-container">
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <a href="mailto:poojam1742000@gmail.com"><strong className="link-label">Pooja_Mail</strong></a>
          </div>

          <div className="contact-item">
            <i className="fab fa-github"></i>
            <a href="https://github.com/Poojaswammy" target="_blank" rel="noopener noreferrer">
              <strong className="link-label">Pooja_GitHub</strong>
            </a>
          </div>

          <div className="contact-item">
            <i className="fab fa-linkedin"></i>
            <a href="https://linkedin.com/in/pooja-manjunatha" target="_blank" rel="noopener noreferrer">
              <strong className="link-label">Pooja_LinkedIn</strong>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
