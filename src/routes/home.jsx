import "../App.css";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Features from "../components/Features";
import Gallery from "../components/Gallery";
import Clients from "../components/Clients";
import Map from "../components/Map";
export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Features />
      <Gallery />
      <Clients />
      <Map />
    </>
  );
}
