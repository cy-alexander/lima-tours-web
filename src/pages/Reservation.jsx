import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { createReservation } from '../firebase/firestore';
import { packagesData, getPackagePrice } from '../utils/packageData';
import '../css/login.css';
import Navigation from '../components/Navigation';

const Reservation = () => {
    const { currentUser } = useAuth();
    const navigate = useNavigate();

    const [selectedPackage, setSelectedPackage] = useState('');
    const [date, setDate] = useState('');
    const [numberOfPeople, setNumberOfPeople] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);
    const [loading, setLoading] = useState(false);

    // Calcular precio total cuando cambia el paquete o número de personas
    useEffect(() => {
        if (selectedPackage) {
            const pricePerPerson = getPackagePrice(selectedPackage);
            setTotalPrice(pricePerPerson * numberOfPeople);
        } else {
            setTotalPrice(0);
        }
    }, [selectedPackage, numberOfPeople]);

    // Obtener fecha mínima (hoy)
    const getMinDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validar que el usuario esté logueado
        if (!currentUser) {
            alert('Debes iniciar sesión para hacer una reserva');
            navigate('/login');
            return;
        }

        // Validar que se haya seleccionado un paquete
        if (!selectedPackage) {
            alert('Por favor selecciona un paquete');
            return;
        }

        // Validar fecha
        if (!date) {
            alert('Por favor selecciona una fecha');
            return;
        }

        // Validar número de personas
        if (numberOfPeople < 1) {
            alert('El número de personas debe ser al menos 1');
            return;
        }

        setLoading(true);

        try {
            // Obtener info del paquete seleccionado
            const packageInfo = packagesData.find(pkg => pkg.id === selectedPackage);

            // Crear objeto de reserva
            const reservationData = {
                userId: currentUser.uid,
                userEmail: currentUser.email,
                packageId: selectedPackage,
                packageName: packageInfo.title,
                date: date,
                numberOfPeople: numberOfPeople,
                pricePerPerson: packageInfo.price,
                totalPrice: totalPrice,
                status: 'confirmed'
            };

            // Guardar en Firestore
            const result = await createReservation(reservationData);

            if (result.success) {
                alert('¡Reserva creada exitosamente!');
                navigate('/my-reservations');
            } else {
                alert('Error al crear reserva: ' + result.error);
            }
        } catch (error) {
            alert('Error inesperado: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="page-reservation">
            <Navigation />
            <div className='cuadro'>
                <form className="form-reservar" onSubmit={handleSubmit}>
                    <h1>
                        <em>Reserva tu destino o paquete</em>
                    </h1>
                    <hr />
                    <p className="texto">
                        <em>Completa los datos para seguir con tu reserva</em>
                    </p>

                    {/* Mostrar info del usuario si está logueado */}
                    {currentUser && (
                        <div className="bloque">
                            <p><strong>Usuario:</strong> {currentUser.email}</p>
                        </div>
                    )}

                    {/* Dropdown de paquetes */}
                    <div className="bloque">
                        <label htmlFor="paquete">Selecciona un Paquete</label>
                        <select
                            className="campo"
                            id="paquete"
                            value={selectedPackage}
                            onChange={(e) => setSelectedPackage(e.target.value)}
                            required
                            disabled={loading}
                        >
                            <option value="">-- Selecciona un paquete --</option>
                            {packagesData.map(pkg => (
                                <option key={pkg.id} value={pkg.id}>
                                    {pkg.title} - S/{pkg.price} por persona
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="bloque">
                        <label htmlFor="fecha">Fecha de la Reserva</label>
                        <input
                            className="campo"
                            type="date"
                            id="fecha"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            min={getMinDate()}
                            required
                            disabled={loading}
                        />
                    </div>

                    <div className="bloque">
                        <label htmlFor="personas">Cantidad de Pasajeros</label>
                        <input
                            className="campo"
                            type="number"
                            id="personas"
                            value={numberOfPeople}
                            onChange={(e) => setNumberOfPeople(parseInt(e.target.value) || 1)}
                            min="1"
                            max={selectedPackage ? packagesData.find(p => p.id === selectedPackage)?.maxCapacity : 50}
                            required
                            disabled={loading}
                        />
                        {selectedPackage && (
                            <p style={{ color: '#fff', fontSize: '14px', marginTop: '5px' }}>
                                Máximo: {packagesData.find(p => p.id === selectedPackage)?.maxCapacity} personas
                            </p>
                        )}
                    </div>

                    {totalPrice > 0 && (
                        <div className="bloque">
                            <p><strong>Precio Total: S/{totalPrice}</strong></p>
                        </div>
                    )}

                    <div className="boton">
                        <input
                            type="submit"
                            value={loading ? "Procesando..." : "Confirmar Reserva"}
                            disabled={loading}
                        />
                    </div>

                    <div className="linea"></div>

                    {!currentUser && (
                        <div className="crear">
                            <p>¿Ya tienes cuenta?</p>
                            <Link to="/login">Iniciar Sesión</Link>
                            <p>¿Aún no tienes cuenta?</p>
                            <Link to="/register">Crear Cuenta</Link>
                        </div>
                    )}

                    {currentUser && (
                        <div className="crear">
                            <p>¿Quieres ver tus reservas?</p>
                            <Link to="/my-reservations">Mis Reservas</Link>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Reservation;