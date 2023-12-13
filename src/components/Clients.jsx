import "../App.css"; // Assuming you have a CSS file
import { useTranslation } from "react-i18next";

const Clients = () => {
  const { t } = useTranslation();

  const clients = [
    "client-1.png",
    "client-2.png",
    "client-3.png",
    "client-4.png",
    "client-5.png",
  ];

  return (
    <section>
      <h1 className="clients-title">{t("OUR PARTNERS :")}</h1>
      <div id="clients" className="clients">
        <div className="container-fluid">
          <div className="row gy-4">
            {clients.map((client, index) => (
              <div className="col-xl-2 col-md-3 col-5  client-logo" key={index}>
                <img
                  src={`/assets/clients/${client}`}
                  className="img-fluid"
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="clients-image-container">
        <img
          src="/assets/CNAM_Tunisie.png"
          alt="Centered Image"
          className="clients-centered-image"
        />
      </div>
    </section>
  );
};

export default Clients;
