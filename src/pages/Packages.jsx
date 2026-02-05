import React from 'react';
import { Link } from 'react-router-dom';
import fotoPaquetes from '../images/paquetes.avif';
import imgCultural from '../images/paquetecultural.jpg';
import imgNocturno from '../images/paquetenocturno.png';
import imgLujo from '../images/paquetelujo.jpg';
import '../css/packages.css';

const packages = [
    {
        title: "Turismo Cultural",
        description: "Descubre el misterio y la grandeza de la Catedral de Lima bajo la magia de la noche. Recorre este majestuoso templo iluminado, donde cada rincón guarda siglos de historia y arte colonial.",
        route: "/tourism/cultural",
        image: imgCultural,
        alt: "Imagen de Turismo Cultural"
    },
    {
        title: "Turismo Nocturno",
        description: "Déjate maravillar por la magia de la noche en el impresionante Parque de las Aguas de Lima. Un espectáculo de fuentes, luces y colores te espera en el circuito acuático más grande del Perú.",
        route: "/tourism/nocturnal",
        image: imgNocturno,
        alt: "Imagen de Turismo Nocturno"
    },
    {
        title: "Turismo de Lujo",
        description: "Vive una noche inolvidable en Larcomar, el icónico centro de entretenimiento y lujo frente al majestuoso océano Pacífico. Disfruta de una cena gourmet con vista al mar.",
        route: "/tourism/luxury",
        image: imgLujo,
        alt: "Imagen de Turismo de Lujo"
    }
];

const Packages = () => {
    return (
        <div className='page-packages'>
            <div className="intro-packages">
                <h2><em>Paquetes Turísticos con Descuentos</em></h2>
                <p>
                    Convierte tus sueños en realidad con nuestros paquetes turísticos personalizados,
                    donde cada detalle está pensado para que vivas momentos únicos en los destinos más
                    espectaculares.
                </p>
                <img className="photo" src={fotoPaquetes} alt="imagen para paquetes" />
            </div>

            <section className="cards-container">
                {packages.map((pack, index) => (
                    <article className="card" key={index}>
                        <div className="package-content">
                            <h2><em>{pack.title}</em></h2>
                            <p>{pack.description}</p>
                            <Link to={pack.route}>Visitar</Link>
                        </div>
                        <img src={pack.image} alt={pack.alt} />
                    </article>
                ))}
            </section>
        </div>
    );
};

export default Packages;