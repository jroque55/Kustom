import Image from 'next/image';
import './Servicios.css';
import { misServicios } from '../../features/Services/serviciosBarber.js';

const Servicios = () => {
    return (
        <section id="servicios" className="servicios-section">
            <h2 className="servicios-main-title">Nuestros servicios</h2>

            <div className="servicios-grid">
                {misServicios.map((servicio, index) => (
                    <div className="servicio-item" key={index}>
                        <div className="servicio-image-container">
                            <img className="servicio-img"
                                src={servicio.image}
                                alt={servicio.title}
                            />
                        </div>
                        <div className="servicio-text-content">
                            <h3>{servicio.title}</h3>
                            <p className='servicio-description'>{servicio.description}</p>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}
export default Servicios;