import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

export default function ContactUs() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const { t } = useTranslation();

  const sendEmail = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm("service", "template", form.current, "token") // needs to be replaced once we get necessary info from the client
      .then((result) => {
        console.log(result.text);
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setTimeout(() => {
          setSubmitSuccess(false);
          event.target.reset();
        }, 2000);
      })
      .catch((error) => {
        setIsSubmitting(false);
        setSubmitError(true);
        console.log(error.text);
      });
  };
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>{t("Contact")}</h2>
          <p>
            {t(
              "Need to contact us? We'd be delighted to hear from you, by email, phone or post."
            )}
          </p>
        </div>
      </div>
      <div
        className="container"
        style={{ backgroundColor: "rgba(0, 128, 0, 0.1)" }}
      >
        <div className="row mt-5">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-md-12 m-1">
                <div className="info-box mt-1">
                  <img
                    className="form-icons"
                    src="/assets/contact-us-icon-1.png"
                    alt="Address Icon"
                  />
                  <h3>{t("OUR ADDRESS")}</h3>
                  <p>
                    {t("4 Av. De la république Nabeul")} <br />
                    {t("next to Nabeul hospital")}
                  </p>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="info-box mt-4">
                  <img
                    className="form-icons"
                    src="/assets/contact-us-icon-2.png"
                    alt="Email Icon"
                  />
                  <h3>{t("Email Us")}</h3>
                  <p>smilingortho@gmail.com</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box mt-4">
                  <img
                    className="form-icons"
                    src="/assets/contact-us-icon-3.png"
                    alt="Phone Icon"
                  />
                  <h3>{t("Call Us")}</h3>
                  <p>
                    +216 55 778 993 <br />
                    +216 55 778 993 <br />
                    +216 55 778 993
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <iframe
              style={{
                marginTop: "5%",
                border: "0",
                width: "100%",
                height: "350px",
              }}
              src="https://maps.google.com/maps?q=4%20Rue%20de%20la%20République,%20Nabeul‎&t=&z=16&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              allowFullScreen
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center mt-5">
          <div className="col-lg-10">
            <form onSubmit={sendEmail} className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder={t("Your name")}
                    required=""
                  />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder={t("Email")}
                    required=""
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder={t("Subject")}
                  required=""
                />
              </div>
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows="7"
                  placeholder={t("Your message")}
                  required=""
                ></textarea>
              </div>
              <div className="my-3">
                <div className="loading">{t("Loading")}</div>
                <div className="error-message"></div>
                <div className="sent-message">
                  {t("Your email has been sent. Thank you!")}
                </div>
              </div>
              <div className="text-center">
                <button type="submit">{t("Send Message")}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
