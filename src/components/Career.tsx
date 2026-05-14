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
                <h4>B.Tech — Computer Science &amp; Engineering</h4>
                <h5>Chitkara Institute of Engineering and Technology, Rajpura</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently pursuing my Bachelor of Technology in Computer Science and Engineering
              with a CGPA of 8.35. Actively building projects that combine web technologies,
              backend systems, and software fundamentals.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Courses &amp; Certifications</h4>
                <h5>Programming &amp; Development</h5>
              </div>
              <h3>2023–NOW</h3>
            </div>
            <p>
              Completed structured courses in C/C++, Python, HTML, CSS, JavaScript, and Swift.
              Applying these skills across academic and personal projects in web development
              and software engineering.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
