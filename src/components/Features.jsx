import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";

const Features = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const featuresData = [
    {
      image: "/assets/whychoseus1.png",
      title: t("TEACHING AIDS"),
      description: t(
        "Products that meet all your needs in prostheses, orthotics, wheelchairs, compression bottoms"
      ),
    },
    {
      image: "/assets/whychoseus2.png",
      title: t("SATISFACTORY SOLUTIONS"),
      description: t(
        "Products that meet all your needs in prostheses, orthotics, wheelchairs, compression bottoms"
      ),
    },
    {
      image: "/assets/whychoseus3.png",
      title: t("COMPUTER SUPPORT"),
      description: t(
        "Products that meet all your needs in prostheses, orthotics, wheelchairs, compression bottoms"
      ),
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const renderFeatureBox = (feature, index) => (
    <div key={index} className="feature-box">
      <div className="feature-content">
        <div className="outer-circle">
          <div className="inner-circle">
            <img
              src={feature.image}
              alt="Feature Image"
              className="feature-image"
            />
          </div>
        </div>
        <h4 className="feature-title">{feature.title}</h4>
        <p className="feature-description">{feature.description}</p>
      </div>
    </div>
  );

  const renderFeatures = () => {
    if (isMobile) {
      return (
      
        <Slider {...settings}>
          {featuresData.map((feature, index) => (
            <div key={index}>{renderFeatureBox(feature, index)}</div>
          ))}
        </Slider>
     
      );
    } else {
      return (
        <div className="row">
          {featuresData.map((feature, index) => (
            <div key={index} className="col-lg-4">
              {renderFeatureBox(feature, index)}
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <section className="container features-container">
      {renderFeatures()}
    </section>
  );
};

export default Features;
