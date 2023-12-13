import "../App.css";
import "../i18nConfig";

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
export default function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
