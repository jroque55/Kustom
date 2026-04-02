import 'bootstrap-icons/font/bootstrap-icons.css';
import './WppButton.css';

const WppButton = () => {
    const numero = "5491130746788";
    const mensaje = "Hola, quisiera reservar un turno!";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    return (
        <a
            href={url}
            className="wpp-link-flotante"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat de WhatsApp"
        >
            <i className="bi bi-whatsapp"></i>
        </a>
    );
};

export default WppButton;