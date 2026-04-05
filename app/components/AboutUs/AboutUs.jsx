import Image from 'next/image';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <section id="about-us" className="about-section">
            <div className="container">
                <div className="about-grid">
                    <div className="about-image-main">
                        <div className="image-wrapper">
                            <img className="about-img" src="/pato.jpeg" alt="Pato" />
                        </div>
                    </div>
                    <div className="about-content-right">

                        <div className="about-text">
                            <h2>EL ARTE DETRÁS DE KUSTOM</h2>
                            <p>
                                Kustom barber nace de una pasión que descubro en un momento que no
                                sabía que hacer con mi vida, empezó como un hobby y se transformó en un proyecto de vida dedicado a la imagen de cada cliente
                            </p>
                            <p>
                                Mi nombre es Patricio y entendí que la barbería no es solo un lugar para cortarse el pelo,
                                es un espacio de confianza en el que se busca la comodidad y siempre mejorar la imagen de cada persona
                            </p>
                        </div>

                        <div className="about-image-secondary">
                            <div className="experience-badge">
                                <strong>4+</strong>
                                <span>Años de Experiencia</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default AboutUs;