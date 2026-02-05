import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getUserReservations, updateReservation } from '../firebase/firestore';
import Navigation from '../components/Navigation';
import '../css/my-reservations.css';

const MyReservations = () => {
    const { currentUser } = useAuth();
    const navigate = useNavigate();
    const [reservations, setReservations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchReservations = async () => {
            // Si hay usuario logueado, cargar sus reservas
            if (currentUser) {
                const result = await getUserReservations(currentUser.uid);
                if (result.success) {
                    setReservations(result.reservations);
                } else {
                    console.error('Error al cargar reservas:', result.error);
                }
            }
            setLoading(false);
        };

        fetchReservations();
    }, [currentUser]);

    // Formatear fecha
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('es-PE', {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit'
        });
    };

    // Cancelar reserva
    const handleCancel = async (reservationId) => {
        const confirmCancel = window.confirm('¿Estás seguro de que deseas cancelar esta reserva?');

        if (confirmCancel) {
            const result = await updateReservation(reservationId, { status: 'cancelled' });

            if (result.success) {
                alert('Reserva cancelada exitosamente');
                // Actualizar el estado local
                setReservations(reservations.map(res =>
                    res.id === reservationId
                        ? { ...res, status: 'cancelled' }
                        : res
                ));
            } else {
                alert('Error al cancelar reserva: ' + result.error);
            }
        }
    };

    // Manejar click en botones cuando no está logueado
    const handleActionClick = (e, action) => {
        if (!currentUser) {
            e.preventDefault();
            alert('Debes iniciar sesión para ' + action);
            navigate('/login');
        }
    };

    if (loading) {
        return (
            <div className="page-my-reservations">
                <Navigation />
                <div className="reservations-header">
                    <h1><em>Cargando...</em></h1>
                </div>
            </div>
        );
    }

    return (
        <div className="page-my-reservations">
            <Navigation />

            <div className="reservations-header">
                <h1><em>Mis Reservas</em></h1>
                <div className="user-info">
                    {currentUser ? (
                        <>
                            <p><strong>👤 Usuario:</strong> {currentUser.email}</p>
                            <p><strong>📊 Total de reservas:</strong> {reservations.length}</p>
                        </>
                    ) : (
                        <p><em>Inicia sesión para ver tus reservas</em></p>
                    )}
                </div>
            </div>

            <div className="cuadro-my-reservations">
                {!currentUser || reservations.length === 0 ? (
                    // Si NO está logueado O NO hay reservas
                    <div className="no-reservations">
                        <h2>📭</h2>
                        <p><em>No tienes reservas aún</em></p>
                        <br />
                        <Link
                            to={currentUser ? "/reservation" : "/login"}
                            onClick={(e) => handleActionClick(e, 'hacer reservas')}
                            className="boton"
                        >
                            Explorar Paquetes
                        </Link>
                    </div>
                ) : (
                    // Si SÍ hay reservas
                    <div className="table-reservations">
                        <table>
                            <thead>
                                <tr>
                                    <th>Paquete</th>
                                    <th>Fecha</th>
                                    <th>Personas</th>
                                    <th>Total</th>
                                    <th>Estado</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {reservations.map((reservation) => (
                                    <tr key={reservation.id} className={`reservation-row ${reservation.status}`}>
                                        <td><strong>{reservation.packageName}</strong></td>
                                        <td>{formatDate(reservation.date)}</td>
                                        <td>{reservation.numberOfPeople}</td>
                                        <td>S/{reservation.totalPrice}</td>
                                        <td>
                                            <span className={`status-badge ${reservation.status}`}>
                                                {reservation.status === 'confirmed' ? '✅ Confirmada' : ''}
                                                {reservation.status === 'cancelled' ? '❌ Cancelada' : ''}
                                                {reservation.status === 'completed' ? '🔵 Completada' : ''}
                                            </span>
                                        </td>
                                        <td>
                                            {reservation.status === 'confirmed' && (
                                                <button
                                                    className="btn-cancel"
                                                    onClick={() => handleCancel(reservation.id)}
                                                >
                                                    ❌ Cancelar
                                                </button>
                                            )}
                                            {reservation.status !== 'confirmed' && (
                                                <span className="no-action">---</span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="table-footer">
                            <Link
                                to={currentUser ? "/reservation" : "/login"}
                                onClick={(e) => handleActionClick(e, 'hacer reservas')}
                                className="btn-new-reservation"
                            >
                                ➕ Nueva Reserva
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyReservations;