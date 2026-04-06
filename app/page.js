import Header from "./components/Header/Header";
import Carrousel from "./features/Carrousel/Carrousel";
import Servicios from "./components/ServiciosUp/Servicios"
import AboutUs from "./components/AboutUs/AboutUs";
import WppButton from "./features/WppButton/WppButton";
import Infor from "./components/Info/Infor"
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <div>
    <Header/>
    <Carrousel/>
    <Infor/>
    <Servicios/>
    <AboutUs/>
    <WppButton/>
    <Footer/>
    </div>
  );
}
