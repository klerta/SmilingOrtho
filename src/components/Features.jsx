import { useTranslation } from "react-i18next";

import "../App.css";

const features = () => {
  const { t } = useTranslation();

  return (
    <section className="container features">
      <div className="row icon-box ">
        <div className="col-lg-4 col-md-6 icon-box">
          <div className="icon-box">
            <div className="image-border">
              <div className="inner-border">
                <img src="/assets/whychoseus1.png" alt="Image" />
              </div>
            </div>
          </div>
          <h4 className="title feature-title">
            <a href="#">{t("TEACHING AIDS")}</a>
          </h4>
          <p className="description ">
            {t(
              "Products that meet all your needs in prostheses, orthotics,wheelchairs, compression bottoms"
            )}
          </p>
        </div>

        <div className="col-lg-4 col-md-6 icon-box">
          <div className="icon-box">
            <div className="image-border">
              <div className="inner-border">
                <img src="/assets/whychoseus2.png" alt="Image" />
              </div>
            </div>
          </div>
          <h4 className="title feature-title">
            <a href="#">{t("SATISFACTORY SOLUTIONS")} </a>
          </h4>
          <p className="description">
            {t(
              "Products that meet all your needs in prostheses , orthotics wheelchairs , compression bottoms"
            )}
          </p>
        </div>
        <div className="col-lg-4 col-md-6 icon-box">
          <div className="icon-box">
            <div className="image-border">
              <div className="inner-border">
                <img src="/assets/whychoseus3.png" alt="Image" />
              </div>
            </div>
          </div>
          <h4 className="title feature-title">
            <a href="#">{t("COMPUTER SUPPORT")}</a>
          </h4>
          <p className="description">
            {t(
              "Products that meet all your needs in prostheses , orthotics  wheelchairs , compression bottoms"
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default features;
