import "./Contact.css";
import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const send_message = (e) => {
    e.preventDefault();

    let textMessage = `${formData.name}\n${formData.email}\n${formData.message}`;

    var xhr = new XMLHttpRequest();
    var url =
      "https://api.telegram.org/bot6423331269:AAHlbrTzX9HUhbJHI1q4vmCMcu0QAPWrnIQ/sendMessage";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    var data = JSON.stringify({
      chat_id: 5182908930,
      text: textMessage,
    });

    xhr.send(data);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact">
      <div className="main-container">
        <div className="heading">
          <h1 className="about1">
            <b>CONTACT</b>
          </h1>
        </div>
        <div className="text-primaryy">
          <p className="contact-p">
            Feel free to Contact me by submitting the form below, and I will get
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
                      name="name"
                      className="form-control inputs"
                      placeholder="Enter Your Name"
                      style={{ marginTop: "10px" }}
                      value={formData.name}
                      onChange={handleChange}
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
                      name="email"
                      className="form-control inputs"
                      placeholder="Enter Your Email"
                      style={{ marginTop: "10px" }}
                      value={formData.email}
                      onChange={handleChange}
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
                      name="message"
                      placeholder="Enter Your Message"
                      style={{ marginTop: "10px" }}
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <div className="d-flex justify-content-end">
                    <button
                      type="submit"
                      className="right-btn"
                      onClick={send_message}
                    >
                      SUBMIT
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
