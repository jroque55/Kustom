import Header from "./components/Header/Header";
import Carrousel from "./features/Carrousel/Carrousel";
import Servicios from "./components/ServiciosUp/Servicios"
import AboutUs from "./components/AboutUs/AboutUs";
import WppButton from "./features/WppButton/WppButton";

export default function Home() {
  return (
    <>
    <Header/>
    <Carrousel/>
    <Servicios/>
    <AboutUs/>
    <WppButton/>
    </>
  );
}
