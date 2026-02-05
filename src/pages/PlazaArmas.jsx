import React from 'react';
import { Link } from 'react-router-dom';
import imgPlaza2 from '../images/plaza2.jpeg';
import imgPlaza3 from '../images/plaza3.jpg';
import imgPlaza4 from '../images/plaza4.jpeg';
import imgPlaza5 from '../images/plaza5.jpeg';
import imgPlaza6 from '../images/plaza6.jpeg';
import imgPlaza7 from '../images/plaza7.jpeg';
import imgPlaza8 from '../images/plaza8.jpeg';
import imgPlaza9 from '../images/plaza9.jpeg';
import '../css/page-content.css';

const PlazaArmas = () => {
    return (
        <div className="page-plaza-armas">
            <div className="page-content">
                <h2><em>Un recorrido por la historia y el corazón de Lima</em></h2>
                <article className="container1">
                    <div className="image-content">
                        <img src={imgPlaza2} alt="Imagen de Plaza de Armas" />
                    </div>
                    <div className="text">
                        <p>
                            <em>
                                La Plaza de Armas de Lima es el epicentro histórico de la ciudad, rodeada de imponentes
                                edificios coloniales que narran siglos de historia. En su centro se erige la majestuosa
                                Catedral de Lima, junto al Palacio de Gobierno, ambos símbolos de la riqueza cultural y
                                arquitectónica del país. Este lugar ha sido testigo de numerosos momentos clave en la
                                historia de Perú, convirtiéndose en un espacio lleno de tradición, donde el pasado y el
                                presente se encuentran en cada rincón. Un lugar imprescindible para entender la esencia de Lima.
                            </em>
                        </p>
                    </div>
                </article>

                <article className="container2">
                    <div className="data">
                        <div>
                            <h2><em>Datos del Turismo</em></h2>
                            <div className="line"></div>
                        </div>
                        <p>
                            <em>¡Reserva ahora tu lugar para una experiencia única!</em>
                        </p>
                        <ul>
                            <li><i className='bx bxs-user'></i><em>Pasajeros mínimos: 1</em></li>
                            <li><i className='bx bxs-calendar'></i><em>Horario de salida: 12:00 pm</em></li>
                            <li><i className='bx bxs-time'></i><em>Duración: 4 horas</em></li>
                            <li><i className='bx bxs-briefcase-alt-2'></i><em>Incluye: Transporte y guía turístico</em></li>
                            <li><i className='bx bxs-calendar-check'></i><em>Disponibilidad: Todos los días</em></li>
                            <li><i className='bx bxs-purchase-tag-alt'></i><em>Precio: S/70.00</em></li>
                        </ul>
                        <Link to="/reservation">
                            <button><em>Reservar</em></button>
                        </Link>
                    </div>

                    <figure>
                        <img src={imgPlaza3} alt="Imagen de Plaza de Armas" />
                        <figcaption><em>Fotografía de la Plaza de Armas</em></figcaption>
                    </figure>

                    <div className="line"></div>
                </article>

                <article className="photos">
                    <h2><em>Galería de Fotos</em></h2>
                    <div>
                        <div className="gallery">
                            <img src={imgPlaza4} alt="Imagen para galería" />
                            <img src={imgPlaza5} alt="Imagen para galería" />
                            <img src={imgPlaza6} alt="Imagen para galería" />
                            <img src={imgPlaza7} alt="Imagen para galería" />
                            <img src={imgPlaza8} alt="Imagen para galería" />
                            <img src={imgPlaza9} alt="Imagen para galería" />
                        </div>
                    </div>
                    <br />
                    <div className="line"></div>
                    <br />
                </article>
            </div>
        </div>
    );
};

export default PlazaArmas;