import React from 'react';
import { Link } from 'react-router-dom';
import '../css/footer.css';
import logoPie from '../images/Logopie.png';

const Footer = () => {
    return (
        <footer className="pie">
            <div className="footer-logo">
                <img src={logoPie} alt="Logo Lima Tours" width="80px" />
            </div>

            <ul className="opciones">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/acerca">Acerca de</Link></li>
                <li><Link to="/destinos">Destinos</Link></li>
                <li><Link to="/paquetes">Paquetes</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contacto">Contáctanos</Link></li>
            </ul>

            <ul className="iconos">
                <li>
                    <a href="https://www.facebook.com" className="icon" target="_blank" rel="noopener noreferrer">
                        <i className='bx bxl-facebook-square'></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com" className="icon" target="_blank" rel="noopener noreferrer">
                        <i className='bx bxl-instagram'></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.x.com" className="icon" target="_blank" rel="noopener noreferrer">
                        <i className='bx bxl-twitter'></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com" className="icon" target="_blank" rel="noopener noreferrer">
                        <i className='bx bxl-youtube'></i>
                    </a>
                </li>
            </ul>

            <p>Lima Tours &copy; 2026 | Derechos reservados</p>

        </footer>
    );
};

export default Footer;