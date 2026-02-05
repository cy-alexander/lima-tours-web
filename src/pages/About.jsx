import React from 'react';
import imgAcercade1 from '../images/acercade1.jpg';
import imgAcercade2 from '../images/acercade2.jpg';
import '../css/about.css';

const About = () => {
    return (
        <div className='page-about'>
            <div className="about-intro">
                <h2><em>Somos Lima Tours</em></h2>
                <p>
                    Somos una empresa de turismo dedicada a crear experiencias inolvidables para nuestros clientes,
                    ofreciendo servicios de alta calidad y atención personalizada. Nos especializamos en diseñar viajes
                    únicos que combinan aventura, cultura y confort. Contamos con un equipo de expertos apasionados por el
                    turismo, comprometidos con la excelencia y la sostenibilidad. Nuestra misión es conectar a los viajeros
                    con destinos extraordinarios, promoviendo el respeto por el medio ambiente y las comunidades locales.
                    Buscamos innovar constantemente para ofrecer experiencias seguras, auténticas y enriquecedoras.
                </p>
            </div>

            <div className="container">
                <article className="block">
                    <div className="image">
                        <img src={imgAcercade1} alt="Nuestra Misión" />
                    </div>
                    <div className="text">
                        <h2><em>Nuestra Misión</em></h2>
                        <p>
                            Nuestra misión es ofrecer experiencias auténticas y enriquecedoras que conecten a los
                            visitantes con la rica historia, cultura y diversidad de la ciudad. Nos dedicamos a proporcionar
                            servicios de alta calidad, brindando atención personalizada a cada viajero para garantizar que
                            descubran lo mejor de Lima, desde su patrimonio colonial hasta su vibrante vida moderna. Promovemos
                            el turismo sostenible, respetuoso con el medio ambiente y las comunidades locales, fomentando el
                            cuidado de nuestros recursos naturales y el respeto por nuestras tradiciones. Nuestro objetivo es
                            crear viajes inolvidables que ofrezcan una inmersión total en la esencia de Lima.
                        </p>
                    </div>
                </article>

                <article className="bloque">
                    <div className="text">
                        <h2><em>Nuestra Visión</em></h2>
                        <p>
                            Nuestra visión es posicionar a la ciudad como un destino global de referencia, reconocido
                            por su diversidad cultural, su patrimonio histórico y su vibrante oferta gastronómica. Queremos
                            que Lima sea un lugar donde los viajeros encuentren experiencias únicas, combinando lo tradicional
                            con lo moderno, y puedan sumergirse en su rica herencia mientras disfrutan de la hospitalidad y el
                            confort. Buscamos promover un turismo responsable y sostenible, que impulse el desarrollo local,
                            proteja el medio ambiente y favorezca el bienestar de las comunidades. Nuestra visión es hacer de
                            Lima un destino turístico accesible, inclusivo y atractivo para todos.
                        </p>
                    </div>
                    <div className="image">
                        <img src={imgAcercade2} alt="Nuestra Visión" />
                    </div>
                </article>
            </div>
        </div>
    );
};

export default About;