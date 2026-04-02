import "./Carrousel.css"
import Image from 'next/image';
import InformacionCard from "@/app/components/InformacionCard/InformacionCard";

export default function Carrousel() {
    return (
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" className="active"></button>
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2"></button>
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="3"></button>
            </div>

            <div className="carousel-static-info">
                <InformacionCard title="Horarios" description="Martes a Sabados de 12:00 a 20:00" logo="clock" />
                <InformacionCard title="Ubicación" description="Concepción Arenales 3876, Chacarita, CABA" logo="geo-alt" />
            </div>

            <div className="carousel-inner">
                {/* Slide 1 */}
                <div className="carousel-item active">
                    <div style={{ position: 'relative', height: '35rem', width: '100%' }}>
                        <Image
                            src="/horizontal-1.jpeg"
                            alt="Corte de pelo"
                            fill
                            priority
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                </div>
                {/* Slide 2 */}
                <div className="carousel-item">
                    <div style={{ position: 'relative', height: '35rem', width: '100%' }}>
                        <Image
                            src="/horizontal-2.jpeg"
                            alt="Corte de pelo"
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                </div>
                {/* Slide 3 */}
                <div className="carousel-item">
                    <div style={{ position: 'relative', height: '35rem', width: '100%' }}>
                        <Image
                            src="/horizontal-3.jpeg"
                            alt="Corte de pelo"
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                </div>
                {/* Slide 4 */}
                <div className="carousel-item">
                    <div style={{ position: 'relative', height: '35rem', width: '100%' }}>
                        <Image
                            src="/horizontal-4.jpeg"
                            alt="Corte de pelo"
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
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