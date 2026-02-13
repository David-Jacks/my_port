import './landingsection.css';

const LandingSection = () => {
  return (
    <div id="landing__page">
      <div className="landing__text">
        <div className="text">
          <h3>
            <span>Welcome to</span>
            <span>My Portfolio</span>
          </h3>
          <p>
            I'm David Jackson, a dedicated and passionate software developer with a growth mindset.
            My journey in the world of programming has been fueled by
            the desire to create innovative solutions that make a meaningful impact.
          </p>
          <a
            href="https://github.com/David-Jacks/Documentations/blob/main/DAVID-JACKSON-version1-resume.pdf"
            id="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Resume</span>
            <i></i>
          </a>
        </div>
        <div className="socials">
          <div className="hex__wrapper">
            <div className="hex">
              <a href="https://github.com/David-Jacks" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
          <div className="hex__wrapper">
            <div className="hex">
              <a href="https://www.linkedin.com/in/david-jackson-976741245/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="hex__wrapper">
            <div className="hex">
              <a href="https://twitter.com/faithchampwon" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="hex__wrapper">
            <div className="hex">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="landing__image">
        <img src="/DavidsProfile 1.png" alt="self-image" />
      </div>
    </div>
  );
};

export default LandingSection;
