import { useTranslation } from "react-i18next";

import "../App.css";
const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="section-title">
        <h2>{t("WHY CHOOSE US ?")}</h2>
        <p>
          {t(
            "WE offers the best technology in orthopedic fitting ,orthopedic contour ,functional rehabitilation equipment , workshop equipment and sports equipment ."
          )}
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
