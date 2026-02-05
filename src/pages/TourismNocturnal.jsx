import React from 'react';
import { Link } from 'react-router-dom';
import imgNightMain from '../images/paquetenocturnoimg.jpg';
import imgNightFigure from '../images/galeria3.jpg';
import imgNightHotel from '../images/paquetehotelnocturno.jpg';
import '../css/tourism.css'
import '../css/page-content.css';

const TourismNocturnal = () => {
    return (
        <div className="page-night-package">
            <div className="page-content">
                <article className="container1">
                    <div className="image-content">
                        <img src={imgNightMain} alt="Parque de las aguas" />
                    </div>
                    <div className="text">
                        <p>
                            El Parque de la Reserva - Circuito Mágico del Agua, ubicado en el corazón de Lima, es uno de los
                            atractivos nocturnos más impresionantes de la ciudad. Inaugurado en 2007, alberga el complejo de
                            fuentes
                            más grande del mundo en un parque público, reconocido con un récord Guinness. Su espectáculo
                            principal combina
                            agua, luces y música en una coreografía hipnotizante, destacando la majestuosa Fuente de la
                            Fantasía. Además,
                            cuenta con fuentes interactivas, túneles de agua y áreas recreativas ideales para toda la familia.
                            Es un destino
                            imperdible para disfrutar de la magia y el encanto nocturno de Lima.
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
                            <li><i className='bx bxs-user'></i><em>Pasajeros máximo: 5</em></li>
                            <li><i className='bx bxs-calendar'></i><em>Horario de salida: 7:00 pm</em></li>
                            <li><i className='bx bxs-time'></i><em>Duración: 3 días</em></li>
                            <li><i className='bx bxs-briefcase-alt-2'></i><em>Incluye: Transporte y alojamiento</em></li>
                            <li><i className='bx bxs-calendar-check'></i><em>Disponibilidad: Todos los días</em></li>
                            <li><i className='bx bxs-purchase-tag-alt'></i><em>Precio: S/ 615.00</em></li>
                        </ul>
                        <Link to="/reservation">
                            <button><em>Reservar</em></button>
                        </Link>
                    </div>

                    <figure>
                        <img src={imgNightFigure} alt="Imagen del Parque de las Aguas" />
                        <figcaption><em>Fotografía del Parque de las Aguas</em></figcaption>
                    </figure>
                </article>

                <article className="block">
                    <div className="photo">
                        <img src={imgNightHotel} alt="Hyatt Centric San Isidro Lima" />
                    </div>
                    <div className="text">
                        <h2><em>Alojamiento</em></h2>
                        <br />
                        <p>
                            Inaugurado en 1924, el Gran Hotel Bolívar es un símbolo de la Lima histórica y un referente de la
                            arquitectura republicana.
                            Ubicado en la icónica Plaza San Martín, este hotel ha hospedado a figuras célebres como Charles de
                            Gaulle y Ernest Hemingway.
                            Su impresionante diseño incluye una elegante cúpula de vidrio en el lobby, mobiliario clásico y una
                            atmósfera que transporta a la
                            época dorada de la ciudad. Sus habitaciones combinan comodidad con un estilo nostálgico, ofreciendo
                            una experiencia única. Su bar
                            es famoso por el Pisco Sour Catedral, una versión icónica del cóctel peruano. Además, su ubicación
                            privilegiada permite fácil acceso a
                            la Catedral de Lima, la Plaza Mayor y otras joyas del centro histórico.
                        </p>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default TourismNocturnal;
