import { useRef, useState } from "react";
// import storage from "../../firebaseConfig";
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import axios from "axios";
import "../App.css";
import { useTranslation } from "react-i18next";

const Getaquote = () => {
  const { t } = useTranslation();

  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const [from, setFrom] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const [attachment, setAttachment] = useState(null);
  console.log(attachment);
  const handleChange = (event) => {
    const selectedFile = event.target.files[0];
    let type = null;
    console.log(selectedFile.name);
    if (
      selectedFile.name.split(".")[selectedFile.name.split(".").length - 1] ==
        "doc" ||
      selectedFile.name.split(".")[selectedFile.name.split(".").length - 1] ==
        "docx"
    ) {
      type = "word";
    } else if (selectedFile.type.startsWith("image/")) {
      type = "image";
    } else {
      type = "pdf";
    }
    if (selectedFile) {
      setAttachment({
        file: selectedFile,
        type: type,
      });
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("from", from);
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("message", message);
    formData.append("phoneNumber", phoneNumber);
    if (attachment) {
      formData.append("attachment", attachment.file);
    }

    try {
      await axios.post(
        "https://smiling-ortho.adaptable.app/send-email",
        formData
      );
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setTimeout(() => {
        setSubmitSuccess(false);
        event.target.reset();
        setAttachment(null);
      }, 2000);
    } catch (error) {
      setIsSubmitting(false);
      setSubmitError(true);
      setTimeout(() => {
        setSubmitError(false);
      }, 2000);
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className="background-image">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-4"></div>
          <div className="col-lg-8">
            <div className="firstBox" style={{ marginTop: 100 }}>
              <h1
                className="title1"
                style={{
                  color: "#026080",
                  fontFamily: "Inter",
                  fontSize: "36px",
                  fontStyle: "normal",
                  fontWeight: "300",
                  lineHeight: "normal",
                }}
              >
                {t(
                  "Get a quote online and find the solution best suited to your needs."
                )}
              </h1>
            </div>
            <form onSubmit={handleSubmit} className="php-email-form" ref={form}>
              <div className="row">
                <div
                  className="col-md-6 form-group"
                  style={{ opacity: "75%", padding: 10, marginBottom: 10 }}
                >
                  <input
                    type="text"
                    name="firstName"
                    className="form-control"
                    placeholder={t("First Name")}
                    required
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                </div>
                <div
                  className="col-md-6 form-group"
                  style={{
                    opacity: "80%",
                    padding: 10,
                    marginBottom: 10,
                    color: "rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <input
                    type="text"
                    className="form-control"
                    name="lastName"
                    placeholder={t("Last Name")}
                    required
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="row">
                <div
                  className="col-md-6 form-group"
                  style={{ opacity: "80%", padding: 10, marginBottom: 10 }}
                >
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder={t("Email Address")}
                    required
                    onChange={(e) => {
                      setFrom(e.target.value);
                    }}
                  />
                </div>
                <div
                  className="col-md-6 form-group"
                  style={{ opacity: "80%", padding: 10, marginBottom: 10 }}
                >
                  <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    placeholder={t("Phone Number")}
                    required
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div
                className="form-group"
                style={{ opacity: "80%", marginBottom: 50 }}
              >
                <textarea
                  className="form-control"
                  name="message"
                  rows="7"
                  placeholder={t("Your Need")}
                  required
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                ></textarea>
              </div>
              <div className="my-3">
                {isSubmitting && <div className="loading">{t("Loading")}</div>}
                {submitError && (
                  <div className="error-message">
                    {t("Error sending the email. Please try again.")}
                  </div>
                )}
                {submitSuccess && (
                  <div className="sent-message">
                    {t("Your email has been sent. Thank you!")}
                  </div>
                )}
              </div>
              <div className="text-center">
                <div>
                  <h2>{t("Upload a File")}</h2>
                  <label htmlFor="imageUpload">
                    {attachment ? (
                      <>
                        {attachment.type === "image" && (
                          <div className="d-flex flex-column align-items-center">
                            <img
                              src={URL.createObjectURL(attachment.file)}
                              alt="Selected"
                              className="img-thumbnail img-fluid"
                              style={{ maxWidth: "100px", maxHeight: "100px" }}
                            />
                            <span>{attachment.file.name}</span>
                          </div>
                        )}
                        {attachment.type === "word" && (
                          <div className="d-flex flex-column align-items-center">
                            <img
                              style={{
                                maxWidth: "100px",
                                maxHeight: "100px",
                                cursor: "pointer",
                              }}
                              src="/assets/word.png"
                              alt="Placeholder"
                            />
                            <span>{attachment.file.name}</span>
                          </div>
                        )}
                        {attachment.type === "pdf" && (
                          <div className="d-flex flex-column align-items-center">
                            <img
                              style={{
                                maxWidth: "100px",
                                maxHeight: "100px",
                                cursor: "pointer",
                              }}
                              src="/assets/pdf.png"
                              alt="Placeholder"
                            />
                            <span>{attachment.file.name}</span>
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="d-flex flex-column align-items-center">
                        <span>{t("Click to select a file")}</span>
                        <img
                          style={{
                            maxWidth: "100px",
                            maxHeight: "100px",
                            cursor: "pointer",
                          }}
                          src="/assets/Upload-PNG-Image-File.png"
                          alt="Placeholder"
                        />
                      </div>
                    )}
                    <input
                      type="file"
                      id="imageUpload"
                      name="imageUpload"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.gif"
                      style={{ display: "none" }}
                      onChange={handleChange}
                    />
                  </label>
                </div>
                <button
                  style={{ background: "#026080", height: 35 }}
                  type="submit"
                  className="btn btn-primary mt-4"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t("Sending...") : t("Submit")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Getaquote;
