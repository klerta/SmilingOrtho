import "./product.css";
import { useTranslation } from "react-i18next";

export default function Product() {
  const { t } = useTranslation();

  const product = [
    {
      name: t("Products") + " 1",
      price: 75.24,
      image: "/assets/products/product1.jpg",
    },
    {
      name: t("Products") + " 2",
      price: 67.81,
      image: "/assets/products/product10.jpg",
    },
    {
      name: t("Products") + " 3",
      price: 59.33,
      image: "/assets/products/product11.jpg",
    },
    {
      name: t("Products") + " 4",
      price: 82.45,
      image: "/assets/products/product12.jpg",
    },
    {
      name: t("Products") + " 5",
      price: 54.76,
      image: "/assets/products/product13.jpg",
    },
    {
      name: t("Products") + " 6",
      price: 70.92,
      image: "/assets/products/product14.jpg",
    },
    {
      name: t("Products") + " 7",
      price: 88.1,
      image: "/assets/products/product2.jpg",
    },
    {
      name: t("Products") + " 8",
      price: 56.29,
      image: "/assets/products/product3.jpg",
    },
    {
      name: t("Products") + " 9",
      price: 63.17,
      image: "/assets/products/product9.jpg",
    },
    {
      name: t("Products") + " 10",
      price: 71.83,
      image: "/assets/products/product10.jpg",
    },
    {
      name: t("Products") + " 11",
      price: 85.49,
      image: "/assets/products/product6.jpg",
    },
    {
      name: t("Products") + " 12",
      price: 52.76,
      image: "/assets/products/product12.jpg",
    },
    {
      name: t("Products") + " 13",
      price: 79.12,
      image: "/assets/products/product8.jpg",
    },
    {
      name: t("Products") + " 14",
      price: 60.28,
      image: "/assets/products/product9.jpg",
    },
  ];
  return (
    <section className="shop_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>Latest Products</h2>
        </div>
        <div className="row">
          {product.map((product, index) => (
            <div key={index} className="col-sm-6 col-md-4 col-lg-3">
              <div className="box shadow custom-rounded  border">
                <a href="#">
                  <div className="img-box">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="detail-box">
                    <h6>{product.name}</h6>
                    <h6>
                    { t('price', { price: product.price.toFixed(2) }) }

                    </h6>
                  </div>
                  
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
