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
                <h4>Video Editing</h4>
                <h5>HXP Editing Team</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
            We started video editing in 2021, working with small creators. Now, we handle million-subscriber channels,
             editing reels, films, productions, and podcasts with top-tier creativity and precision.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Graphic Designing</h4>
                <h5>HXP Designing Team</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
            We began graphic designing in early 2022, initially working with small projects. Today, we create posts for events, vendors, and eye-catching thumbnails,
             offering high-quality designs tailored to each need.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>WEB Development</h4>
                <h5>HXP Developing Team</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
            We are starting our web development journey, offering custom website development services. 
            Our focus is on creating responsive, user-friendly, and visually appealing websites tailored to your needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
