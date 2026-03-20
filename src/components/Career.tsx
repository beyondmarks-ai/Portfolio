import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Backend Developer</h4>
                <h5>NoBroker</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Spearheaded backend development over a 1-year tenure, optimizing database queries and building scalable APIs. Enhanced system performance for high-traffic real estate platforms.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Team Leader</h4>
                <h5>Acko</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Led a high-performing development team for 6 months. Directed technical architecture decisions, mentored engineers, and successfully delivered critical insurance product modules.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder</h4>
                <h5>Beyond Marks AI Academy</h5>
              </div>
              <h3>2025 - NOW</h3>
            </div>
            <p>
              Founded and scaling an innovative AI academy. Driving the technical vision, system design, and business strategy to empower the next generation with advanced AI and software engineering skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
