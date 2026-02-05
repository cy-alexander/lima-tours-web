import React from 'react';
import imgBlog6 from '../images/blog6.jpg';
import imgBlog3 from '../images/blog3.png';
import imgBlog1 from '../images/blog1.jpeg';
import imgBlog5 from '../images/blog5.jpeg';
import '../css/blog.css';

const opinions = [
    {
        image: imgBlog3,
        title: "Un paseo por el alma de la ciudad",
        description: "La Plaza de Armas es impresionante, con su historia y edificios coloniales como la Catedral y el Palacio de Gobierno. Es ideal para pasear y vivir la esencia de la ciudad. No te pierdas el cambio de guardia.",
        date: "26 Enero 2025"
    },
    {
        image: imgBlog1,
        title: "El lugar perfecto para los enamorados",
        description: "El Parque del Amor es el lugar ideal para disfrutar de una hermosa vista al mar y un ambiente súper romántico. Con sus mosaicos coloridos y la famosa escultura del beso, es perfecto para relajarse y pasar un buen rato en pareja.",
        date: "7 Febrero 2025"
    },
    {
        image: imgBlog5,
        title: "Viviendo la esencia de Lima",
        description: "La Plaza de Armas es un lugar lleno de historia y encanto. Su ambiente tranquilo y su arquitectura colonial la convierten en el lugar perfecto para pasear y disfrutar de la esencia de la ciudad. El cambio de guardia es un momento único que no te puedes perder.",
        date: "12 Febrero 2025"
    }
];

const Blog = () => {
    return (
        <div className='page-blog'>
            <h2><em>En Lima, cada rincón cuenta una historia, ¡no dejes de explorar sus secretos!</em></h2>
            <section>
                <article className="container1">
                    <div className="image">
                        <img src={imgBlog6} alt="imagen para blog" />
                    </div>
                    <div className="content">
                        <h2><em>Consejos de Viaje</em></h2>
                        <ul>
                            <li>
                                Lima tiene niebla en invierno y sol en verano, así que es recomendable llevar ropa ligera y
                                una chaqueta, especialmente por las tardes cuando la temperatura puede bajar.
                            </li>
                            <li>
                                Lima es famosa por su comida, así que no puedes dejar de probar el ceviche, la causa y los
                                anticuchos. Visita mercados locales como Surquillo para disfrutar de sabores auténticos.
                            </li>
                            <li>
                                El tráfico en Lima es intenso, por lo que es mejor usar el Metropolitano o aplicaciones como
                                Uber. Si tomas un taxi, asegúrate de que sea de una empresa confiable.
                            </li>
                        </ul>
                        <hr />
                        <i className='bx bx-calendar'>
                            <p>Fecha de publicación: 12 Enero 2025</p>
                        </i>
                    </div>
                </article>

                <div className="container2">
                    <h2><em>Opiniones de turistas</em></h2>
                    {opinions.map((opinion, index) => (
                        <div className="card" key={index}>
                            <div className="photo">
                                <img src={opinion.image} alt="imagen para reseñas" />
                            </div>
                            <div className="text">
                                <h3><em>{opinion.title}</em></h3>
                                <p>{opinion.description}</p>
                                <i className='bx bx-calendar'>
                                    <p>Fecha de publicación: {opinion.date}</p>
                                </i>
                            </div>
                        </div>
                    ))}
                    <br />
                </div>
            </section>
        </div>
    );
};

export default Blog;