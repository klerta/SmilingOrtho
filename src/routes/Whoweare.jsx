import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

import "../App.css";

const Whoweare = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    const lng = event.target.value;
    console.log("Changing language to", lng);
    i18n.changeLanguage(lng);
  };

  return (
    <div className="whoWeAreContainer">
      <div className="Textbox">
        <div className="textContent">
          <div className="Titlecontainer d-flex">
            <FontAwesomeIcon
              icon={faInfoCircle}
              size="2x"
              style={{ color: "#1977cc", marginRight: "10px" }}
            />
            <h1 className="Titleintro">{t("Introduction to Ortho Smiling")}</h1>
          </div>
          <div className="green mx-2">
            <h1 className="Titlemission">{t("Our mission:")} </h1>
            <h4 className="mission">
              {t(
                "Our orthopedic appliance center specializes in the manufacturing and supply of prostheses and orthoses by highly skilled orthopedic appliance technicians. The orthopedic prosthetist is a graduate of the Higher School of Health in Tunis and has both experience and additional training."
              )}
            </h4>
            <h1 className="Titlemission">{t("Our team :")}</h1>
            <h4 className="mission">
              {t(
                "The orthopedic prosthetist&apos;s role is to compensate for temporary or permanent disabilities in patients. They execute the medical prescriptions issued by the doctor to design, manufacture, and adapt any medical device intended for support, correction, or replacement of a body part."
              )}
            </h4>
          </div>
        </div>
      </div>
      <div className="imageContainer">
        <img className="img" src="/assets/who_we_are.jpeg" alt="Orthosmile" />
      </div>
    </div>
  );
};

export default Whoweare;
