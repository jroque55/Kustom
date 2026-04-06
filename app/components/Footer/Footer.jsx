// Footer.jsx
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-vibrant-top"></div> { /* 1. New dynamic border */}
            <div className="footer-content">
                <div className="footer-icons-group"> { /* 2. Icons grouping */}
                    <a href="https://www.instagram.com/kustombarber_?igsh=MWJvZTN5amxzZ21xMA==" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-instagram"></i>
                    </a>
                </div>
                <div className="footer-separator-line"></div>

                <p className="copyright-text">2026 KUSTOM BARBER</p>
            </div>
        </footer>
    )
}
export default Footer;