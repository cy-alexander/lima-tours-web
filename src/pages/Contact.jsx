import React from 'react';
import '../css/contact.css';

const Contact = () => {
    return (
        <div className="page-contact">
            <section>
                <h2>
                    <em>Ponte en contacto con nosotros para recibir toda la información que necesitas</em>
                </h2>
                <p>
                    <em>
                        Queremos que tu experiencia con nosotros sea lo más satisfactoria posible. Si tienes alguna
                        pregunta, comentario o necesitas asistencia adicional, no dudes en ponerte en contacto con
                        nuestro equipo. Estamos aquí para escucharte y ofrecerte la mejor atención. ¡Será un placer ayudarte!
                    </em>
                </p>

                <article className="contact-block">
                    <div>
                        <i className='bx bxl-whatsapp'></i>
                        <div className="contact-info">
                            <h3><em>WhatsApp</em></h3>
                            <p>+51 956 587 053</p> {/*  */}
                        </div>
                    </div>

                    <div>
                        <i className='bx bxl-facebook-circle'></i>
                        <div className="contact-info">
                            <h3><em>Facebook</em></h3>
                            <p>LimaToursOficial</p>
                        </div>
                    </div>

                    <div className="youtube">
                        <i className='bx bxl-youtube'></i>
                        <div className="contact-info">
                            <h3><em>Youtube</em></h3>
                            <p>@LimaTours</p>
                        </div>
                    </div>

                    <div>
                        <i className='bx bxl-instagram-alt'></i>
                        <div className="contact-info">
                            <h3><em>Instagram</em></h3>
                            <p>@limatoursperu</p>
                        </div>
                    </div>

                    <div className="correo">
                        <i className='bx bxs-envelope'></i>
                        <div className="contact-info">
                            <h3><em>Correo</em></h3>
                            <p>limatours@gmail.com</p>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    );
};

export default Contact;