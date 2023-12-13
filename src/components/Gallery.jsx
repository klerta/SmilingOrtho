import  { useState } from "react";
import Modal from "react-modal";
import "../App.css";
import { useTranslation } from "react-i18next";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState("");

  const { t } = useTranslation();

  const openModal = (src) => {
    setImgSrc(src);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const images = [
    "/assets/gallery/gallery-1.jpg",
    "/assets/gallery/gallery-2.jpg",
    "/assets/gallery/gallery-3.jpg",
    "/assets/gallery/gallery-4.jpg",
    "/assets/gallery/gallery-5.jpg",
    "/assets/gallery/gallery-6.jpg",
    "/assets/gallery/gallery-7.jpg",
    "/assets/gallery/gallery-8.jpg",
  ];

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-title">
          <h2>{t("THEY ARE SATISFIED")}</h2>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row g-0">
          <div className="col-1"></div>
          <div className="col-10 row">

          {images.map((image, index) => (
            <div className="col-lg-3 col-md-4 my-3" key={index}>
              <div className="gallery-item">
                <a
                  onClick={() => openModal(image)}
                  className="galelry-lightbox"
                >
                  <img src={image} alt="" className="img-fluid gallery-image" />
                </a>
              </div>
            </div>
          ))}</div>
          <div className="col-1"></div>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        style={customStyles}
      >
        <img src={imgSrc} alt="Modal" />
      </Modal>
    </section>
  );
};

export default Gallery;
