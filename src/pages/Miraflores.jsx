import React from 'react';
import { Link } from 'react-router-dom';
import imgMiraflores from '../images/miraflores.jpeg';
import imgMirafloresMain from '../images/imagen3.jpg';
import imgMiraflores1 from '../images/miraflores1.jpeg';
import imgMiraflores2 from '../images/miraflores2.jpg';
import imgMiraflores3 from '../images/miraflores3.jpg';
import imgMiraflores4 from '../images/miraflores4.jpg';
import imgMiraflores5 from '../images/miraflores5.jpg';
import imgMiraflores6 from '../images/miraflores6.jpg';
import '../css/page-content.css';

const Miraflores = () => {
    return (
        <div className="page-miraflores">
            <div className='page-content'>
                <h2><em>Un viaje por la vista y la esencia del mar</em></h2>
                <article className="container1">
                    <div className="image-content">
                        <img src={imgMiraflores} alt="Imagen del Malecón de Miraflores" />
                    </div>
                    <div className="text">
                        <p>
                            <em>
                                El Malecón de Miraflores es uno de los lugares más emblemáticos de Lima, un extenso paseo que
                                ofrece impresionantes vistas del océano Pacífico
                                y de los acantilados de la costa limeña. A lo largo de sus kilómetros de jardines, parques y
                                miradores, los visitantes pueden disfrutar de una
                                combinación perfecta entre la naturaleza y la modernidad, mientras se respira la brisa fresca
                                del mar. Es un lugar ideal para caminar, practicar
                                deportes al aire libre o simplemente relajarse mientras se contempla la inmensidad del océano y
                                el paisaje urbano de Lima.
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
                            <li><i className='bx bxs-user'></i><em>Pasajeros mínimos: 2</em></li>
                            <li><i className='bx bxs-calendar'></i><em>Horario de salida: 1:30 pm</em></li>
                            <li><i className='bx bxs-time'></i><em>Duración: 2 horas</em></li>
                            <li><i className='bx bxs-briefcase-alt-2'></i><em>Incluye: Transporte y alojamiento</em></li>
                            <li><i className='bx bxs-calendar-check'></i><em>Disponibilidad: Todos los días</em></li>
                            <li><i className='bx bxs-purchase-tag-alt'></i><em>Precio: S/70.00</em></li>
                        </ul>
                        <Link to="/reservation">
                            <button><em>Reservar</em></button>
                        </Link>
                    </div>

                    <figure>
                        <img src={imgMirafloresMain} alt="Imagen del Malecón de Miraflores" />
                        <figcaption><em>Fotografía del Malecón de Miraflores</em></figcaption>
                    </figure>

                    <div className="line"></div>
                </article>

                <article className="photos">
                    <h2><em>Galería de Fotos</em></h2>
                    <div>
                        <div className="gallery">
                            <img src={imgMiraflores1} alt="Imagen para galería" />
                            <img src={imgMiraflores2} alt="Imagen para galería" />
                            <img src={imgMiraflores3} alt="Imagen para galería" />
                            <img src={imgMiraflores4} alt="Imagen para galería" />
                            <img src={imgMiraflores5} alt="Imagen para galería" />
                            <img src={imgMiraflores6} alt="Imagen para galería" />
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

export default Miraflores;
