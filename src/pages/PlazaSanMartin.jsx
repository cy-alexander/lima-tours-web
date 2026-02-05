import React from 'react';
import { Link } from 'react-router-dom';
import imgSanMartin from '../images/sanmartin1.webp';
import imgSanMartinMain from '../images/imagen4.jpg';
import imgSanMartin1 from '../images/sanmartin2.jpg';
import imgSanMartin2 from '../images/sanmartin3.jpg';
import imgSanMartin3 from '../images/sanmartin4.jpg';
import imgSanMartin4 from '../images/sanmartin5.webp';
import imgSanMartin5 from '../images/sanmartin6.jpg';
import imgSanMartin6 from '../images/sanmartin7.jpg';
import '../css/page-content.css';

const PlazaSanMartin = () => {
    return (
        <div className="page-sanmartin">
            <div className='page-content'>
                <h2><em>Un viaje por la historia y la gloria de Lima</em></h2>
                <article className="container1">
                    <div className="image-content">
                        <img src={imgSanMartin} alt="Imagen de Plaza San Martín" />
                    </div>
                    <div className="text">
                        <p>
                            <em>
                                La Plaza San Martín, ubicada en el corazón de Lima, es uno de los espacios más emblemáticos de
                                la ciudad. Inaugurada en 1921 para
                                conmemorar el centenario de la independencia del Perú, la plaza lleva el nombre del libertador
                                argentino José de San Martín, quien
                                jugó un papel crucial en la independencia sudamericana. Rodeada de imponentes edificaciones de
                                estilo neoclásico, como el Palacio
                                de la Municipalidad y el Hotel Bolívar, la plaza es un punto de encuentro tanto para turistas
                                como para los limeños. Su gran monumento
                                ecuestre de San Martín, erigido en el centro, es una de las principales atracciones y simboliza
                                la lucha por la libertad. Este espacio
                                también es conocido por ser un lugar de eventos culturales, manifestaciones políticas y
                                celebraciones populares, haciendo de él
                                un centro de vida y movimiento en la capital peruana.
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
                        <img src={imgSanMartinMain} alt="Imagen de Plaza San Martín" />
                        <figcaption><em>Fotografía de la Plaza San Martín - Lima</em></figcaption>
                    </figure>
                    <div className="line"></div>
                </article>

                <article className="photos">
                    <h2><em>Galería de Fotos</em></h2>
                    <div>
                        <div className="gallery">
                            <img src={imgSanMartin1} alt="Imagen para galería" />
                            <img src={imgSanMartin2} alt="Imagen para galería" />
                            <img src={imgSanMartin3} alt="Imagen para galería" />
                            <img src={imgSanMartin4} alt="Imagen para galería" />
                            <img src={imgSanMartin5} alt="Imagen para galería" />
                            <img src={imgSanMartin6} alt="Imagen para galería" />
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

export default PlazaSanMartin;
