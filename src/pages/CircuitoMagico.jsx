import React from 'react';
import { Link } from 'react-router-dom';
import imgCircuito4 from '../images/circuito4.jpg';
import imgCircuito2 from '../images/circuito2.jpg';
import imgCircuito3 from '../images/circuito3.jpg';
import imgGaleria1 from '../images/galeria1.jpeg';
import imgGaleria2 from '../images/galeria2.jpg';
import imgGaleria3 from '../images/galeria3.jpg';
import imgGaleria4 from '../images/galeria4.avif';
import imgGaleria5 from '../images/galeria5.webp';
import '../css/page-content.css';

const CircuitoMagico = () => {
    return (
        <div className="page-circuito-magico">
            <div className='page-content'>
                <h2><em>Un viaje por la historia y la magia del agua</em></h2>
                <article className="container1">
                    <div className="image-content">
                        <img src={imgCircuito4} alt="Imagen del Parque de las Aguas" />
                    </div>
                    <div className="text">
                        <p>
                            <em>
                                El Circuito Mágico del Agua, ubicado en el emblemático Parque de la Reserva en el corazón de
                                Lima, Perú, es uno de los destinos turísticos más impresionantes del país y un destacado
                                referente cultural. Este complejo ha logrado posicionarse como uno de los parques de fuentes
                                de agua más grandes y modernos a nivel mundial, y su inigualable belleza lo convierte en un
                                lugar mágico para todos los visitantes. Inaugurado en 2007, el parque ha sido testigo de un
                                constante crecimiento en popularidad, tanto entre los locales como los turistas, gracias a su
                                combinación perfecta de arte, tecnología y naturaleza.
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
                        <p><em>¡Reserva ahora tu lugar para una experiencia única!</em></p>
                        <ul>
                            <li><i className='bx bxs-user'></i><em>Pasajeros mínimos: 1</em></li>
                            <li><i className='bx bxs-calendar'></i><em>Horario de salida: 2:00 pm</em></li>
                            <li><i className='bx bxs-time'></i><em>Duración: 3 horas</em></li>
                            <li><i className='bx bxs-briefcase-alt-2'></i><em>Incluye: Transporte y guía turístico</em></li>
                            <li><i className='bx bxs-calendar-check'></i><em>Disponibilidad: Todos los días</em></li>
                            <li><i className='bx bxs-purchase-tag-alt'></i><em>Precio: S/60.00</em></li>
                        </ul>
                        <Link to="/reservation">
                            <button><em>Reservar</em></button>
                        </Link>
                    </div>

                    <figure>
                        <img src={imgCircuito2} alt="Imagen del Circuito Mágico del Agua" />
                        <figcaption><em>Fotografía del Parque de las Aguas</em></figcaption>
                    </figure>

                    <div className="line"></div>
                </article>

                <article className="photos">
                    <h2><em>Galería de Fotos</em></h2>
                    <div>
                        <div className="gallery">
                            <img src={imgCircuito3} alt="Imagen para galería" />
                            <img src={imgGaleria1} alt="Imagen para galería" />
                            <img src={imgGaleria2} alt="Imagen para galería" />
                            <img src={imgGaleria3} alt="Imagen para galería" />
                            <img src={imgGaleria4} alt="Imagen para galería" />
                            <img src={imgGaleria5} alt="Imagen para galería" />
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

export default CircuitoMagico;