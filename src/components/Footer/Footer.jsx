import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <div className="main-div" style={{ paddingTop: "20px" }}>
        <div className="container parent-div">
          <div className="row">
            <div className="col-sm left-div">
              <h2 className="my-name">GAGANDEEP N</h2>
              <p className="para">
                Software Engineer working with Elsevier Technology, Bengaluru.
              </p>
            </div>

            <div className="col-sm right-div">
              <h2 className="right-heading">SOCIAL</h2>
              <a
                href="https://www.linkedin.com/in/gagandeep-n-4309971b8/"
                target={"_blank"}
              >
                <button className="btn1">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </button>
              </a>

              <a href="https://github.com/Gagan-ELS" target={"_blank"}>
                <button className="btn2">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </button>
              </a>

              <a
                href="https://www.instagram.com/gagan_deep_n/"
                target={"_blank"}
              >
                <button className="btn3">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="lower-para">
        <p>© Copyright 2023. Made by Gagandeep N</p>
      </div>
    </div>
  );
}

export default Footer;
