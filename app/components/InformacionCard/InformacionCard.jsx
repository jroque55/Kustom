import "./InformacionCard.css"
import 'bootstrap-icons/font/bootstrap-icons.css';

const InformacionCard = ({ title, description, logo }) => {
    return (
        <div className="card-container-info">
            <i className={`bi bi-${logo}`} style={{ fontSize: "5rem", color: "black" }} ></i>
            <div className="text-container">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default InformacionCard;