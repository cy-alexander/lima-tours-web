import React from 'react';
import { Link } from 'react-router-dom';
import circuito_magico from '../images/Circuitomagico.jpg';
import plaza_armas from '../images/imagen2.jpg';
import miraflores from '../images/imagen3.jpg';
import museo_larco from '../images/imagen6.jpg';
import san_martin from '../images/imagen4.jpg';
import catedral_lima from '../images/imagen7.png';
import '../css/destinations.css'

const destinos = [
    {
        img: circuito_magico,
        tittle: "Circuito Mágico del Agua",
        description: "Disfruta de nuestra ciudad y vive una experiencia única de vistas espectaculares",
        route: "/destinations/circuito-magico",
        alt: "imagen del Circuito Mágico"
    },
    {
        img: plaza_armas,
        tittle: "Plaza de Armas",
        description: "Es el corazón histórico de Lima, rodeada de monumentos como el Palacio de Gobierno y la Catedral",
        route: "/destinations/plaza-armas",
        alt: "imagen de la Plaza de Armas"
    },
    {
        img: miraflores,
        tittle: "Malecón de Miraflores",
        description: "Un paseo que conecta la brisa del océano con la magia de la ciudad, ofreciendo vistas inigualables del mar y el horizonte limeño",
        route: "/destinations/miraflores",
        alt: "imagen del Malecón Miraflores"
    },
    {
        img: museo_larco,
        tittle: "Museo Larco",
        description: "Exhibe galerías que muestran los 5000 años de desarrollo de la historia del Perú precolombino",
        route: "/destinations/museo-larco",
        alt: "imagen del Museo Larco"
    },
    {
        img: san_martin,
        tittle: "Plaza San Martín",
        description: "Disfruta de nuestra ciudad y vive una experiencia única de vistas espectaculares",
        route: "/destinations/plaza-san-martin",
        alt: "imagen de la Plaza San Martín"
    },
    {
        img: catedral_lima,
        tittle: "Catedral de Lima",
        description: "Es el corazón histórico de Lima, rodeada de monumentos como el Palacio de Gobierno y la Catedral",
        route: "/destinations/catedral-lima",
        alt: "imagen de la Catedral de Lima"
    }
];

const Destinations = () => {
    return (
        <div className='page-destinations'>
            <div className='destinations-intro'>
                <h2><em>Explora Lugares Increíbles</em></h2>
                <p>
                    <em>
                        Disfruta de nuestra ciudad y vive una experiencia única que combina tradición, cultura,
                        gastronomía y vistas espectaculares
                    </em>
                </p>
            </div>

            <section className='block-destinations'>
                {destinos.map((destino, index) => (
                    <article className='card' key={index}>
                        <div className="image">
                            <img src={destino.img} alt={destino.alt} />
                        </div>

                        <div className="content">
                            <h2><em>{destino.tittle}</em></h2>
                            <p>{destino.description}</p>

                            <Link to={destino.route}>Ver más</Link>
                        </div>
                    </article>
                ))}
            </section>
        </div>
    );
};

export default Destinations;
