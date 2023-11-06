import "./Contact.css";

function Contact() {
  return (
    <div className="main-container">
      <div className="heading">
        <h1 className="about1">
          <b>CONTACT</b>
        </h1>
      </div>
      <div className="text-primaryy">
        <p>
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </p>
      </div>

      <div className="container">
        <div className="col-md-8 offset-md-2">
          <div className="card">
            <div className="card-body">
              <form>
                <div className="form-group" style={{ marginTop: "10px" }}>
                  <label
                    htmlFor="name"
                    className="labelss"
                    style={{ marginTop: "10px" }}
                  >
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-control inputs"
                    placeholder="Enter Your Name"
                    style={{ marginTop: "10px" }}
                  />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="email"
                    className="labelss"
                    style={{ marginTop: "10px" }}
                  >
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control inputs"
                    placeholder="Enter Your Email"
                    style={{ marginTop: "10px" }}
                  />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="message"
                    className="labelss"
                    style={{ marginTop: "10px" }}
                  >
                    Message:
                  </label>
                  <textarea
                    id="message"
                    className="form-control inputs"
                    rows="4"
                    placeholder="Enter Your Message"
                    style={{ marginTop: "10px" }}
                  ></textarea>
                </div>

                <div className="d-flex justify-content-end">
                  <button type="submit" className="right-btn">
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
