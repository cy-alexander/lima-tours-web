import React from 'react';
import { Link } from 'react-router-dom';
import imgCatedral from '../images/catedral1.jpg';
import imgCatedralMain from '../images/catedral3.jpg';
import imgCatedral1 from '../images/catedral4.jpg';
import imgCatedral2 from '../images/catedral5.jpeg';
import imgCatedral3 from '../images/catedral6.jpg';
import imgCatedral4 from '../images/catedral7.jpg';
import imgCatedral5 from '../images/catedral8.jpg';
import imgCatedral6 from '../images/catedral9.jpg';
import '../css/page-content.css';

const CatedralLima = () => {
    return (
        <div className="page-catedral">
            <div className='page-content'>
                <h2><em>Un recorrido por la fe y el legado de la Catedral de Lima</em></h2>
                <article className="container1">
                    <div className="image-content">
                        <img src={imgCatedral} alt="Imagen de la Catedral de Lima" />
                    </div>
                    <div className="text">
                        <p>
                            <em>
                                La Catedral de Lima, ubicada en la Plaza Mayor, es una de las principales joyas arquitectónicas
                                de la capital peruana.
                                Construida en el siglo XVI sobre las bases de una iglesia original, su imponente estilo
                                renacentista y barroco refleja
                                la historia y la fe de la ciudad. En su interior, se encuentran valiosas obras de arte y las
                                tumbas de importantes figuras
                                históricas, como el conquistador Francisco Pizarro. La catedral no solo es un centro de culto,
                                sino también un testigo de
                                la evolución de Lima a lo largo de los siglos, siendo un punto de encuentro entre la historia
                                colonial y el presente de la ciudad.
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
                            <li><i className='bx bxs-calendar'></i><em>Horario de salida: 3:00 pm</em></li>
                            <li><i className='bx bxs-time'></i><em>Duración: 2 horas</em></li>
                            <li><i className='bx bxs-briefcase-alt-2'></i><em>Incluye: Transporte y guía turístico</em></li>
                            <li><i className='bx bxs-calendar-check'></i><em>Disponibilidad: Todos los días</em></li>
                            <li><i className='bx bxs-purchase-tag-alt'></i><em>Precio: S/70.00</em></li>
                        </ul>
                        <Link to="/reservation">
                            <button><em>Reservar</em></button>
                        </Link>
                    </div>

                    <figure>
                        <img src={imgCatedralMain} alt="Imagen de la Catedral de Lima" />
                        <figcaption><em>Fotografía de la Catedral de Lima</em></figcaption>
                    </figure>

                    <div className="line"></div>
                </article>

                <article className="photos">
                    <h2><em>Galería de Fotos</em></h2>
                    <div>
                        <div className="gallery">
                            <img src={imgCatedral1} alt="Imagen para galería" />
                            <img src={imgCatedral2} alt="Imagen para galería" />
                            <img src={imgCatedral3} alt="Imagen para galería" />
                            <img src={imgCatedral4} alt="Imagen para galería" />
                            <img src={imgCatedral5} alt="Imagen para galería" />
                            <img src={imgCatedral6} alt="Imagen para galería" />
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

export default CatedralLima;
