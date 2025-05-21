import React, { useState } from "react";
import Header from "./includes/Header";
import Banner from "../components/Banner";
import Footer from "./includes/Footer";

const ContactUs = () => {
  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("sending");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formspree.io/f/mnndyqbw", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        setFormStatus("success");
        e.currentTarget.reset();

        // Optional redirect after 3 seconds
        // setTimeout(() => window.location.href = "/", 3000);
      } else {
        const result = await response.json();
        setErrorMessage(
          result.error || "Something went wrong, please try again."
        );
        setFormStatus("error");
      }
    } catch (error) {
      setErrorMessage("Network error, please try again later.");
      setFormStatus("error");
    }
  };

  return (
    <>
      <Header />
      <Banner page="Contact Us" path={["Home", "Contact Us"]} />

      <div
        className="contact-form d-flex gap-3 justify-content-between px-3 px-lg-5"
        style={{ margin: "150px 0" }}
      >
        <div className="col-12 col-lg-7 c-form text-black">
          <h2 className="fw-bold">Get In Touch</h2>
          <form onSubmit={handleSubmit}>
            <div className="d-flex gap-2 mt-5">
              <div className="position-relative w-50">
                <input
                  type="text"
                  name="name"
                  className="form-control w-100 rounded-0 p-2 px-3"
                  placeholder="Your Name"
                  required
                />
                <div
                  className="position-absolute fd-color-primary"
                  style={{ top: "20%", right: "5%" }}
                >
                  <i className="bi bi-person"></i>
                </div>
              </div>
              <div className="position-relative w-50">
                <input
                  type="email"
                  name="email"
                  className="form-control w-100 rounded-0 p-2 px-3"
                  placeholder="Your Email"
                  required
                />
                <div
                  className="position-absolute fd-color-primary"
                  style={{ top: "20%", right: "5%" }}
                >
                  <i className="bi bi-envelope"></i>
                </div>
              </div>
            </div>
            <div className="d-flex gap-2 my-5">
              <div className="position-relative w-50">
                <input
                  type="text"
                  name="phone"
                  className="form-control w-100 rounded-0 p-2 px-3"
                  placeholder="Your Phone"
                />
                <div
                  className="position-absolute fd-color-primary"
                  style={{ top: "20%", right: "5%" }}
                >
                  <i className="bi bi-phone"></i>
                </div>
              </div>
              <div className="position-relative w-50">
                <input
                  type="text"
                  name="subject"
                  className="form-control w-100 rounded-0 p-2 px-3"
                  placeholder="Your Subject"
                />
                <div
                  className="position-absolute fd-color-primary"
                  style={{ top: "20%", right: "5%" }}
                >
                  <i className="bi bi-bookmark-fill"></i>
                </div>
              </div>
            </div>
            <div className="position-relative w-100 mb-4">
              <textarea
                name="message"
                cols={100}
                rows={10}
                placeholder="Write Message..."
                className="w-100 p-2 border"
                required
              ></textarea>
              <div
                className="position-absolute fd-color-primary"
                style={{ top: "5%", right: "1%" }}
              >
                <i className="bi bi-pen"></i>
              </div>
            </div>

            {/* Feedback messages */}
            {formStatus === "sending" && (
              <p className="text-info">Sending message...</p>
            )}
            {formStatus === "success" && (
              <p className="text-success">Thank you! Your message was sent.</p>
            )}
            {formStatus === "error" && (
              <p className="text-danger">Error: {errorMessage}</p>
            )}

            <div>
              <button
                type="submit"
                className="fd-btn w-50 text-center"
                disabled={formStatus === "sending"}
              >
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>

        <div
          className="position-relative contact-banner d-none d-lg-block p-4 col-3"
          style={{
            backgroundImage: "url('/contact.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>

      <Footer />
    </>
  );
};

export default ContactUs;
