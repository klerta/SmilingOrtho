import "../App.css"; 
import { BiEnvelope, BiPhoneCall, BiMap } from "react-icons/bi";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row" style={{ paddingTop: "20px" }}>
            <div className="col-lg-3 col-md-6 footer-contact">
              <img src="/assets/footer.png" alt="" />
            </div>
            <div className="col-lg-2 col-md-6 footer-links">
              <h4>{t("About Us")}</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="#">{t("Historic")}</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="#">{t("Activities")}</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="#">{t("The team")}</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>{t("USEFUL LINKS")}</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="#">{t("Products")}</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="#">{t("Guided tour")}</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="#">{t("Get a Quote")}</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-contact">
              <h4>{t("Contact Us")}</h4>
              <ul>
                <li>
                  <BiEnvelope />
                  <a
                    style={{ color: "inherit", textDecoration: "none" }}
                    href="mailto:smilingortho@gmail.com"
                  >
                    smilingortho@gmail.com
                  </a>
                </li>
                <li>
                  <BiPhoneCall />
                  <a
                    style={{ color: "inherit", textDecoration: "none" }}
                    href="tel:+216 55 778 993"
                  >
                    +216 55 778 993
                  </a>
                </li>
                <li>
                  <BiMap />
                  {t("4 Av. De la république Nabeul")}
                  {t("next to Nabeul hospital")}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
