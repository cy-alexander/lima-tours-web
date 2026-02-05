import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../firebase/auth';
import { createUserProfile } from '../firebase/firestore';
import Navigation from '../components/Navigation';
import '../css/login.css';

const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [dni, setDni] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validar DNI (8 dígitos)
        if (dni.length !== 8 || !/^\d+$/.test(dni)) {
            alert('El DNI debe tener 8 dígitos numéricos');
            return;
        }

        // Validar contraseñas
        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }

        // Validar longitud de contraseña
        if (password.length < 6) {
            alert('La contraseña debe tener al menos 6 caracteres');
            return;
        }

        setLoading(true);

        try {
            // 1. Registrar usuario en Firebase Auth
            const result = await registerUser(email, password);

            if (result.success) {
                // 2. Guardar datos adicionales en Firestore
                const profileResult = await createUserProfile(result.user.uid, {
                    name,
                    apellido,
                    email,
                    dni,
                    fullName: `${name} ${apellido}`
                });

                if (profileResult.success) {
                    alert('¡Cuenta creada exitosamente!');
                    navigate('/login');
                } else {
                    alert('Usuario creado pero error al guardar perfil: ' + profileResult.error);
                }
            } else {
                alert('Error al crear cuenta: ' + result.error);
            }
        } catch (error) {
            alert('Error inesperado: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='page-register'>
            <Navigation />
            <div className='cuadro'>
                <form onSubmit={handleSubmit}>
                    <h1><em>Crear Cuenta</em></h1>
                    <hr />
                    <p className='texto'>
                        <em>
                            Regístrate y accede a nuestros servicios, disfrutando de un proceso de compra más rápido y
                            fácil
                        </em>
                    </p>
                    <br />

                    <p className='bloque'><em>Nombre</em></p>
                    <input
                        type="text"
                        className='campo'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Nombre*'
                        required
                        disabled={loading}
                    />

                    <p className='bloque'><em>Apellido</em></p>
                    <input
                        type='text'
                        className='campo'
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                        placeholder='Apellido*'
                        required
                        disabled={loading}
                    />

                    <p className='bloque'><em>Correo</em></p>
                    <input
                        type="email"
                        className='campo'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Correo electrónico*'
                        required
                        disabled={loading}
                    />

                    <p className='bloque'><em>DNI</em></p>
                    <input
                        type="text"
                        className='campo'
                        value={dni}
                        onChange={(e) => setDni(e.target.value)}
                        placeholder='DNI* (8 dígitos)'
                        maxLength="8"
                        required
                        disabled={loading}
                    />

                    <p className='bloque'><em>Crea tu contraseña</em></p>
                    <input
                        type="password"
                        className='campo'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Contraseña* (mínimo 6 caracteres)'
                        required
                        disabled={loading}
                    />

                    <p className='bloque'><em>Confirmar contraseña</em></p>
                    <input
                        type="password"
                        className='campo'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder='Confirmar contraseña*'
                        required
                        disabled={loading}
                    />
                    <br />

                    <div className='terminos'>
                        <input
                            required
                            className='check'
                            type='checkbox'
                            disabled={loading}
                        />
                        <p>Aceptar términos y condiciones de tratamiento de los datos</p>
                    </div>

                    <div className="boton">
                        <input
                            type="submit"
                            className='boton'
                            value={loading ? "Creando cuenta..." : "Crear cuenta"}
                            disabled={loading}
                        />
                    </div>

                    <div className="crear">
                        <p><em>¿Ya tienes cuenta?</em></p>
                        <Link to="/login">Iniciar Sesión</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;