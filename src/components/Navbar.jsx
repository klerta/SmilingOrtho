import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faBars } from "@fortawesome/free-solid-svg-icons";
import { BiEnvelope, BiPhone,BiMap } from "react-icons/bi";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    const lng = event.target.value;
    console.log("Changing language to", lng);
    i18n.changeLanguage(lng);
  };

  const handleToggleMobileNav = () => {
    setMobileOpen(!mobileOpen);
  };

  const closeMobileNav = () => {
    setMobileOpen(false);
  };

  return (
    <div className="navbar-container">
      <div className="container pt-2 d-none d-lg-block my-1">
        <div className="row d-flex">
          {/* Left side with 3 parts */}
          <div className="col-8 d-flex">
            <div className="text-center d-flex mx-2">
              <BiPhone size={20} color="#1977cc" />
              <p className="ml-2 mb-0">+216 55 778 993</p>
            </div>
            <div className="text-center d-flex mx-2">
              <BiMap size={20} color="#1977cc" />
              <p className="ml-2 mb-0">Location</p>
            </div>
            <div className="text-center d-flex mx-2">
              <BiEnvelope size={20} color="#1977cc" />
              <a href="mailto:smilingortho@gmail.com" className="ml-2 mb-0">
                smilingortho@gmail.com
              </a>
            </div>
          </div>

          {/* Right side with 4 icons */}
          <div className="col-4 d-flex justify-content-center">
            <div className="text-center mx-2">
              <a href="#" className="twitter">
                <FaTwitter size={20} />
              </a>
            </div>
            <div className="text-center mx-2">
              <a href="#" className="facebook ml-3">
                <FaFacebook size={20} />
              </a>
            </div>
            <div className="text-center mx-2">
              <a href="#" className="instagram ml-3">
                <FaInstagram size={20} />
              </a>
            </div>
            <div className="text-center mx-2">
              <a href="#" className="linkedin ml-3">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div> 

      <nav
        id="navbar"
        className={`navbar ${mobileOpen ? "navbar-mobile" : ""}`}
      >
        <ul style={{ marginLeft: "5%" }}>
          <li>
            <NavLink
              onClick={closeMobileNav}
              to={"/"}
              activeClassName="active-link"
            >
              {t("HOME")}
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={closeMobileNav}
              to={"/whoarewe"}
              activeClassName="active-link"
            >
              {t("WHO ARE WE?")}
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={closeMobileNav}
              to={"/getaquote"}
              activeClassName="active-link"
            >
              {t("GET A QUOTE")}
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={closeMobileNav}
              to={"/contact"}
              activeClassName="active-link"
            >
              {t("CONTACT")}
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={closeMobileNav}
              to={"/products"}
              activeClassName="active-link"
            >
              {t("PRODUCTS")}
            </NavLink>
          </li>
        </ul>
        <div className="language-selector">
          <div className="lang">
            <FontAwesomeIcon
              icon={faGlobe}
              style={{ marginRight: "9px", color: "#FFF" }}
            />
            <select
              className="lang-dropdown"
              onChange={changeLanguage}
              style={{
                backgroundColor: "#026080",
                color: "#FFF",
                border: "none",
              }}
            >
              <option value="ar">{t("Arabic")}</option>
              <option value="en">{t("English")}</option>
              <option value="fr">{t("French")}</option>
            </select>
          </div>
        </div>
        <i
          className={`bi bi-list mobile-nav-toggle ${mobileOpen ? "bi-x" : ""}`}
          onClick={handleToggleMobileNav}
        >
          <FontAwesomeIcon icon={faBars} className="icon-white" />
        </i>
      </nav>
    </div>
  );
};

export default Navbar;
