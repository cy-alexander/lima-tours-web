import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { logoutUser } from '../firebase/auth';
import '../css/global.css';
import '../css/navigation.css';
import logo from '../images/Logo.png';

const Navigation = () => {
    const { currentUser } = useAuth();

    const handleLogout = async () => {
        const result = await logoutUser();
        if (result.success) {
            alert('Sesión cerrada exitosamente');
        }
    };

    return ( 
        <nav className="menu">
            <Link to="/">
                <img src={logo} alt="Logo Lima Tours" width="130px" />
            </Link>
            <ul>
                <li><Link className="seccion" to="/">Inicio</Link></li>
                <li><Link className="seccion" to="/destinations">Destinos</Link></li>
                <li><Link className="seccion" to="/paquetes">Paquetes</Link></li>
                <li><Link className="seccion" to="/my-reservations">Mis Reservas</Link></li>
                <li><Link className="seccion" to="/acerca">Acerca de</Link></li>
                <li><Link className="seccion" to="/blog">Blog</Link></li>
                <li><Link className="seccion" to="/contacto">Contáctanos</Link></li>
            </ul>

            <div className="usuario">
                {currentUser ? (
                    <>
                        <span className="user-email">
                            <i className='bx bx-user-circle'></i> {currentUser.email}
                        </span>
                        <button onClick={handleLogout} className="logout-btn">
                            Cerrar Sesión
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="user">
                            <i className='bx bx-user-circle'></i>
                        </Link>
                        <Link className="login" to="/login">Iniciar Sesión</Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navigation;