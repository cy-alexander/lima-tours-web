import React from 'react';
import { Link } from 'react-router-dom';
import img2 from '../images/imagen2.jpg';
import img3 from '../images/imagen3.jpg';
import img4 from '../images/imagen4.jpg';
import '../css/home.css';

const tours = [
    {
        title: "Plaza de Armas",
        description: "Es el corazón histórico de Lima, rodeada de monumentos como el Palacio de Gobierno y la Catedral. Un lugar lleno de historia y cultura, perfecto para explorar el legado colonial de la ciudad.",
        route: "/destinations/plaza-armas",
        img: img2,
        alt: "Imagen de Plaza de Armas"
    },
    {
        title: "Malecón de Miraflores",
        description: "Disfruta de vistas impresionantes del océano Pacífico mientras recorres el Malecón, un lugar perfecto para relajarte y conectarte.",
        route: "/destinations/miraflores",
        img: img3,
        alt: "Imagen de Malecón de Miraflores"
    },
    {
        title: "Plaza San Martín",
        description: "En el corazón de la plaza, el monumento a José de San Martín se alza con imponente dignidad, evocando su fundamental contribución a la independencia de Perú.",
        route: "/destinations/plaza-san-martin",
        img: img4,
        alt: "Imagen de Plaza San Martín"
    }
]

const Home = () => {
    return (
        <div className='page-home'>
            <div>
                <h2><em>TOURS DESTACADOS</em></h2>
                <p>
                    <em>
                        La magia no está solo en llegar, sino en lo que aprendes, vives y compartes en el camino. Cada
                        paso, cada experiencia, cada
                        encuentro te transforma y te enseña algo nuevo. ¡Hazlo realidad hoy y comienza a vivir tu aventura!
                    </em>
                </p>
            </div>
            <section className='cards-container'>
                {tours.map((tour, index) => (
                    <article className='card' key={index}>
                        <div className='card-content'>
                            <h2><em>{tour.title}</em></h2>
                            <p><em>{tour.description}</em></p>
                            <Link to={tour.route}>Visitar</Link>
                        </div>
                        <img src={tour.img} alt={tour.alt} />
                    </article>
                ))}
            </section>
        </div>
    );
};

export default Home;