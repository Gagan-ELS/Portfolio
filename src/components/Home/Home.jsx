import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Home() {
  return (
    <section id="home">
      <div className="centered-text-container0">
        <div className="centered-text-container1">
          <h1 className="heading-primary">Hey, I'm Gagandeep N</h1>

          <p className="text-primaryy">
            A Software Engineer working with Elsevier Technology, Bengaluru
          </p>
          <span className="laptop-icon">&lt;/&gt;</span>
        </div>

        <div className="left-buttons">
          <button className="left-btn">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </button>
          <button className="left-btn">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </button>
          <button className="left-btn">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
