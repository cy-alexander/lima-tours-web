import React from 'react';
import { Link } from 'react-router-dom';
import imgMuseo from '../images/museo.webp';
import imgMuseoMain from '../images/museo1.jpg';
import imgMuseo2 from '../images/museo2.jpg';
import imgMuseo3 from '../images/museo3.jpg';
import imgMuseo4 from '../images/museo4.jpg';
import imgMuseo5 from '../images/museo5.jpg';
import imgMuseo6 from '../images/museo6.jpg';
import imgMuseo7 from '../images/museo7.jpg';
import '../css/page-content.css';

const MuseoLarco = () => {
    return (
        <div className="page-museo-larco">
            <div className="page-content">
                <h2><em>Una exploración del arte y la historia de las civilizaciones peruanas</em></h2>
                <article className="container1">
                    <div className="image-content">
                        <img src={imgMuseo} alt="Imagen del Museo Larco" />
                    </div>
                    <div className="text">
                        <p>
                            <em>
                                El Museo Larco, ubicado en Lima, es un referente cultural que alberga una impresionante
                                colección de arte precolombino peruano.
                                Fundado en 1926, el museo presenta más de 5,000 años de historia, desde las antiguas
                                civilizaciones hasta la época colonial. Sus
                                salas exhiben piezas únicas, como cerámica, textiles y orfebrería, que muestran la sofisticación
                                y riqueza de las culturas andinas.
                                Además, el museo está ubicado en una hermosa mansión virreinal, lo que añade un encanto especial
                                a la experiencia, permitiendo a los
                                visitantes sumergirse en la historia de Perú mientras disfrutan de su arquitectura y jardines.
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
                            <li><i className='bx bxs-calendar'></i><em>Horario de salida: 2:30 pm</em></li>
                            <li><i className='bx bxs-time'></i><em>Duración: 3 horas</em></li>
                            <li><i className='bx bxs-briefcase-alt-2'></i><em>Incluye: Transporte y guía turístico</em></li>
                            <li><i className='bx bxs-calendar-check'></i><em>Disponibilidad: Todos los días</em></li>
                            <li><i className='bx bxs-purchase-tag-alt'></i><em>Precio: S/65.00</em></li>
                        </ul>

                        <Link to="/reservation">
                            <button><em>Reservar</em></button>
                        </Link>
                    </div>

                    <figure>
                        <img src={imgMuseoMain} alt="Imagen del Museo Larco" />
                        <figcaption><em>Fotografía del Museo Larco</em></figcaption>
                    </figure>

                    <div className="line"></div>
                </article>

                <article className="photos">
                    <h2><em>Galería de Fotos</em></h2>
                    <div>
                        <div className="gallery">
                            <img src={imgMuseo2} alt="Imagen para galería" />
                            <img src={imgMuseo3} alt="Imagen para galería" />
                            <img src={imgMuseo4} alt="Imagen para galería" />
                            <img src={imgMuseo5} alt="Imagen para galería" />
                            <img src={imgMuseo6} alt="Imagen para galería" />
                            <img src={imgMuseo7} alt="Imagen para galería" />
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

export default MuseoLarco;
