import React from 'react';
import { Link } from 'react-router-dom';
import imgCulturalMain from '../images/paqueteculturalimg.jpg';
import imgCatedral from '../images/catedral1.jpg';
import imgHotelCultural from '../images/paquetehotelcultural.jpg';
import '../css/tourism.css'
import '../css/page-content.css';

const TourismCultural = () => {
    return (
        <div className="page-tourism-cultural">
            <div className="page-content">
                <article className="container1">
                    <div className="image-content">
                        <img src={imgCulturalMain} alt="imagen de turismo cultural" />
                    </div>
                    <div className="text">
                        <p>
                            La Catedral de Lima, ubicada en la Plaza Mayor, es una joya arquitectónica que refleja siglos de
                            historia y fe. Construida en 1535 por orden de Francisco Pizarro, ha sufrido varias reconstrucciones
                            debido a terremotos, manteniendo su imponente estilo colonial y barroco. Su fachada es majestuosa,
                            con altos campanarios y un interior decorado con retablos dorados, bóvedas elegantes y una
                            impresionante
                            colección de arte religioso. En su interior se encuentran las criptas donde reposan importantes
                            figuras
                            históricas, incluido Pizarro. Actualmente, es un espacio de culto, historia y cultura, ofreciendo
                            misas, visitas guiadas
                            y exposiciones de arte sacro.
                        </p>
                    </div>
                </article>

                <article className="container2">
                    <div className="data">
                        <div>
                            <h2><em>Datos del Paquete</em></h2>
                            <div className="line"></div>
                        </div>
                        <p><em>¡Reserva ahora tu lugar para una experiencia única!</em></p>
                        <ul>
                            <li><i className='bx bxs-user'></i><em>Pasajeros máximo: 4</em></li>
                            <li><i className='bx bxs-calendar'></i><em>Horario de salida: 12:00 pm</em></li>
                            <li><i className='bx bxs-time'></i><em>Duración: 3 días</em></li>
                            <li><i className='bx bxs-briefcase-alt-2'></i><em>Incluye: Transporte y alojamiento</em></li>
                            <li><i className='bx bxs-calendar-check'></i><em>Disponibilidad: Todos los días</em></li>
                            <li><i className='bx bxs-purchase-tag-alt'></i><em>Precio: S/ 595.00</em></li>
                        </ul>
                        <Link to="/reservation">
                            <button><em>Reservar</em></button>
                        </Link>
                    </div>

                    <figure>
                        <img src={imgCatedral} alt="Imagen de la Catedral de Lima" />
                        <figcaption><em>Fotografía de la Catedral de Lima</em></figcaption>
                    </figure>
                </article>

                <article className="block">
                    <div className="photo">
                        <img src={imgHotelCultural} alt="imagen de turismo cultural" />
                    </div>
                    <div className="text">
                        <h2><em>Alojamiento</em></h2>
                        <br />
                        <p>
                            Ubicado en el exclusivo distrito de San Isidro, el Hyatt Centric San Isidro Lima es un hotel moderno
                            y sofisticado, ideal para
                            viajeros de negocios y turismo de lujo. Sus habitaciones combinan diseño contemporáneo con
                            comodidad, ofreciendo vistas panorámicas
                            de la ciudad. Destaca por su restaurante Isidro Bistró Limeño, donde se puede disfrutar de una
                            propuesta gastronómica de alto nivel
                            basada en ingredientes peruanos. También cuenta con piscina al aire libre, gimnasio y espacios
                            exclusivos para eventos. Su ubicación
                            estratégica permite fácil acceso al Parque de la Reserva - Circuito Mágico del Agua, además de
                            centros financieros y culturales.
                            Es una excelente opción para quienes buscan lujo, modernidad y una experiencia exclusiva en Lima.
                        </p>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default TourismCultural;
