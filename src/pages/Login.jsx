import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../firebase/auth';
import Navigation from '../components/Navigation';
import '../css/login.css';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const result = await loginUser(email, password);

            if (result.success) {
                alert('¡Inicio de sesión exitoso!');
                navigate('/');
            } else {
                alert('Error: ' + result.error);
            }
        } catch (error) {
            alert('Error inesperado: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='page-login'>
            <Navigation />
            <div className='cuadro'>
                <form onSubmit={handleSubmit}>
                    <h1><em>Iniciar Sesión</em></h1>
                    <hr />
                    <p className='texto'>
                        <em>Ingresa tu correo electrónico y contraseña</em>
                    </p>
                    <br />

                    <p className='bloque'><em>Correo</em></p>
                    <input
                        type="email"
                        className='campo'
                        name='correo'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Correo electrónico*'
                        required
                        disabled={loading}
                    />

                    <p className='bloque'><em>Contraseña</em></p>
                    <input
                        type="password"
                        className='campo'
                        name='contraseña'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Contraseña*'
                        required
                        disabled={loading}
                    />
                    <br />

                    <div className='boton'>
                        <input
                            type="submit"
                            className='boton'
                            value={loading ? "Iniciando sesión..." : "Iniciar Sesión"}
                            disabled={loading}
                        />
                    </div>

                    <div className="crear">
                        <p><em>¿Eres nuevo en Lima Tours?</em></p>
                        <Link to="/register">Crear cuenta</Link>
                    </div>
                </form>
            </div >
        </div>
    );
};

export default Login;