import "./About.css";

function About() {
  return (
    <section id="about">
      <div className="main-container">
        <div className="heading">
          <h1 className="about1">
            <b>ABOUT ME</b>
          </h1>
        </div>
        <div className="text-primaryy">
          <p className="about-p">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-sm-8">
              <h3 class="about-get-to-know">Get to know me!</h3>
              <p>I'm a Software Engineer working with Elsevier Technology.</p>
              <p>
                I Have done my Engineering in Information Science from NMAM
                Institute Of Technology. I graduated with a CGPA of 9.45 in the
                year 2023.
              </p>
              <p>
                Apart from Software engineering, I am passionate about
                photography. I also enjoy sports and games which keep me healthy
                and active.
              </p>
            </div>

            <div class="col-sm-4">
              <h3 class="about-get-to-know">My Skills</h3>
              <div class="row">
                <div class="col-sm-4">
                  <p className="skills">
                    <img src="html-logo.png" alt="hrml-logo"></img>
                  </p>
                </div>
                <div class="col-sm-4">
                  <p className="skills">
                    <img src="css-logo.png" alt="css-logo"></img>
                  </p>
                </div>
                <div class="col-sm-4">
                  <p className="skills">
                    <img src="js-alt-logo.png" alt="js-logo"></img>
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-4">
                  <p className="skills">
                    <img src="react2-logo.png" alt="react-logo"></img>
                  </p>
                </div>
                <div class="col-sm-4">
                  <p className="skills">
                    <img src="python3-logo.png" alt="python-logo"></img>
                  </p>
                </div>
                <div class="col-sm-4">
                  <p className="skills">
                    <img src="C-logo.png" alt="C-logo"></img>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
