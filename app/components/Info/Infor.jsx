import InformacionCard from "../InformacionCard/InformacionCard";
import "./Infor.css"


const Infor = () => {
    return (
        <section id="info" className="info-section">
            <div className="container">
                <div className="info-grid">
                    <InformacionCard
                        title="Horarios"
                        description="Martes a Sabado de 12:00 a 20:00"
                        logo="clock"
                    />
                    <InformacionCard
                        title="Ubicación"
                        description="Concepción Arenales 3876, Chacarita, CABA"
                        logo="geo-alt"
                    />
                </div>
            </div>
        </section>
    );
}

export default Infor