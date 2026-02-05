import React from 'react';
import { Link } from 'react-router-dom';
import imgLuxuryMain from '../images/paquetelujoimg.jpg';
import imgLarcomar from '../images/larcomar.jpeg';
import imgLuxuryHotel from '../images/paquetehotellujo.jpg';
import '../css/tourism.css'
import '../css/page-content.css';

const TourismLuxury = () => {
    return (
        <div className="page-luxury-package">
            <div className="page-content">
                <article className="container1">
                    <div className="image-content">
                        <img src={imgLuxuryMain} alt="imagen de turismo de lujo" />
                    </div>
                    <div className="text">
                        <p>
                            Larcomar es un famoso centro comercial y destino turístico ubicado en el distrito de Miraflores,
                            Lima, Perú. Construido sobre un
                            acantilado con vistas al océano Pacífico, ofrece una experiencia única con su combinación de tiendas
                            de lujo, restaurantes de alta
                            cocina y entretenimiento. Es un lugar ideal para turistas, ya que cuenta con miradores panorámicos,
                            bares y cafés con terrazas al aire
                            libre. Además, su proximidad a hoteles de cinco estrellas y la Costa Verde lo convierte en un punto
                            clave para quienes visitan Lima.
                            Larcomar también alberga teatros, galerías de arte y opciones de vida nocturna. Su ubicación
                            privilegiada y su oferta variada lo hacen
                            un atractivo imperdible en la ciudad.
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
                            <li><i className='bx bxs-calendar'></i><em>Horario de salida: 2:30 pm</em></li>
                            <li><i className='bx bxs-time'></i><em>Duración: 4 días</em></li>
                            <li><i className='bx bxs-briefcase-alt-2'></i><em>Incluye: Transporte y alojamiento</em></li>
                            <li><i className='bx bxs-calendar-check'></i><em>Disponibilidad: Todos los días</em></li>
                            <li><i className='bx bxs-purchase-tag-alt'></i><em>Precio: S/ 695.00</em></li>
                        </ul>
                        <Link to="/reservation">
                            <button><em>Reservar</em></button>
                        </Link>
                    </div>

                    <figure>
                        <img src={imgLarcomar} alt="Imagen del Parque de las Aguas" />
                        <figcaption><em>Fotografía de Larcomar</em></figcaption>
                    </figure>
                </article>

                <article className="block">
                    <div className="photo">
                        <img src={imgLuxuryHotel} alt="imagen de turismo de lujo" />
                    </div>
                    <div className="text">
                        <h2><em>Alojamiento</em></h2>
                        <br />
                        <p>
                            El JW Marriott Hotel Lima es un lujoso hotel de cinco estrellas ubicado en el distrito de
                            Miraflores, frente al centro comercial Larcomar.
                            Ofrece impresionantes vistas al océano Pacífico desde sus elegantes habitaciones y suites. Es
                            una opción ideal para turistas y viajeros de negocios
                            gracias a su ubicación estratégica y su servicio de alta calidad. Cuenta con restaurantes de
                            primera categoría que sirven gastronomía peruana e internacional.
                            Además, dispone de un moderno gimnasio, un spa y una piscina climatizada. Su centro de
                            convenciones y salones para eventos lo convierten en un lugar ideal para
                            reuniones y celebraciones. La atención personalizada y el confort de sus instalaciones
                            garantizan una estadía inolvidable. Su cercanía a la Costa Verde permite a
                            los huéspedes disfrutar de paseos y actividades al aire libre. Es uno de los hoteles más
                            exclusivos de Lima y una opción destacada para quienes buscan lujo y comodidad.
                        </p>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default TourismLuxury;
