import "./Carrousel.css"
import InformacionCard from "../../components/InformacionCard/InformacionCard";

export default function Carrousel() {
    return (
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" className="active"></button>
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2"></button>
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="3"></button>
            </div>

            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="carrousel-img" src="/horizontal-1.jpeg" alt="Corte de pelo" />
                    <div className="hero-content">
                        <h1>KUSTOM BARBER</h1>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="carrousel-img" src="/horizontal-2.jpeg" alt="Corte de pelo" />
                </div>
                <div className="carousel-item">
                    <img className="carrousel-img" src="/horizontal-3.jpeg" alt="Corte de pelo" />
                </div>
                <div className="carousel-item">
                    <img className="carrousel-img" src="/horizontal-4.jpeg" alt="Corte de pelo" />
                </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Anterior</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Siguiente</span>
            </button>
        </div>
    );
}