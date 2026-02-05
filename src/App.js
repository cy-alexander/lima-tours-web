import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';

import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Packages from './pages/Packages';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import CircuitoMagico from './pages/CircuitoMagico';
import PlazaArmas from './pages/PlazaArmas';
import Miraflores from './pages/Miraflores';
import MuseoLarco from './pages/MuseoLarco';
import PlazaSanMartin from './pages/PlazaSanMartin';
import CatedralLima from './pages/CatedralLima';
import TourismCultural from './pages/TourismCultural';
import TourismLuxury from './pages/TourismLuxury';
import TourismNocturnal from './pages/TourismNocturnal';
import Reservation from './pages/Reservation';
import Login from './pages/Login';
import Register from './pages/Register';
import MyReservations from './pages/MyReservations';

import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={
            <Layout
              title="Lima Tours"
              description="Tu guía para explorar lo mejor de esta fascinante ciudad. Descubre sus atractivos, cultura y experiencias únicas con nosotros"
              bgClass="bg-home"
            >
              <Home />
            </Layout>
          } />

          <Route path="/destinations" element={
            <Layout
              title="Tours en Lima"
              description="Descubre la historia y la cultura de Lima a través de sus increíbles tours, donde cada rincón te
                sorprenderá con su magia única"
              bgClass="bg-destinations"
            >
              <Destinations />
            </Layout>
          } />

          <Route path="/paquetes" element={
            <Layout
              title="Paquetes Turísticos"
              description="Descubre nuestros paquetes exclusivos diseñados para que vivas Lima al máximo"
              bgClass="bg-packages"
            >
              <Packages />
            </Layout>
          } />

          <Route path="/acerca" element={
            <Layout
              title="¿Quiénes Somos?"
              description="Conócenos en este espacio y descubre nuestro compromiso por ofrecerte lo mejor de Lima y Perú a través
                de experiencias únicas"
              bgClass="bg-acerca"
            >
              <About />
            </Layout>
          } />

          <Route path="/blog" element={
            <Layout
              title="Blog Turístico"
              description="Tu fuente de inspiración para explorar Lima con consejos, historias y todo lo que no puedes perderte en la ciudad"
              bgClass="bg-blog"
            >
              <Blog />
            </Layout>
          } />

          <Route path="/contacto" element={
            <Layout
              title="Contacto"
              description="¡Estamos aquí para ayudarte! Contáctanos y con gusto responderemos todas tus preguntas o te proporcionaremos la información que necesites"
              bgClass="bg-contact"
            >
              <Contact />
            </Layout>
          } />

          <Route path="/destinations/circuito-magico" element={
            <Layout
              title="Circuito Mágico del Agua"
              description="Disfruta de un espectáculo único de luces, agua y colores en el parque de fuentes más grande de Latinoamérica"
              bgClass="bg-circuito-magico"
            >
              <CircuitoMagico />
            </Layout>
          } />

          <Route path="/destinations/plaza-armas" element={
            <Layout
              title="Plaza de Armas"
              description="El corazón histórico de Lima, donde la tradición colonial y la cultura peruana se encuentran en cada rincón"
              bgClass="bg-plaza-armas"
            >
              <PlazaArmas />
            </Layout>
          } />

          <Route path="/destinations/miraflores" element={
            <Layout
              title="Malecón de Miraflores"
              description="Disfruta de la brisa del océano en el Malecón de Miraflores, donde las vistas panorámicas del mar y el
                cielo te envolverán en su belleza única"
              bgClass="bg-miraflores"
            >
              <Miraflores />
            </Layout>
          } />

          <Route path="/destinations/museo-larco" element={
            <Layout
              title="Museo Larco"
              description="Sumérgete en la historia del Perú en el Museo Larco, donde las fascinantes colecciones precolombinas te
                conectarán con la riqueza cultural de nuestra civilización ancestral"
              bgClass="bg-museo-larco"
            >
              <MuseoLarco />
            </Layout>
          } />

          <Route path="/destinations/plaza-san-martin" element={
            <Layout
              title="Plaza San Martín"
              description="Adéntrate en la historia de Lima en la Plaza San Martín, donde la majestuosidad de sus monumentos te
                conecta con los momentos llave de nuestra independencia y legado cultural"
              bgClass="bg-plaza-san-martin"
            >
              <PlazaSanMartin />
            </Layout>
          } />

          <Route path="/destinations/catedral-lima" element={
            <Layout
              title="Basílica Catedral de Lima"
              description="Descubre la historia de Lima en la Basílica Catedral, un símbolo de fe y legado de nuestra ciudad"
              bgClass="bg-catedral-lima"
            >
              <CatedralLima />
            </Layout>
          } />

          <Route path="/tourism/cultural" element={
            <Layout
              title="Turismo Cultural"
              description="Sumérgete en la rica historia y tradición de Lima. Descubre sus tesoros culturales, monumentos
                históricos y vivencias únicas a través de nuestro turismo cultural"
              bgClass="bg-tourism-cultural"
            >
              <TourismCultural />
            </Layout>
          } />

          <Route path="/tourism/luxury" element={
            <Layout
              title="Turismo de Lujo"
              description="Experimenta el lujo y la exclusividad en Larcomar, Lima. Disfruta de vistas espectaculares, tiendas de
                alto nivel y una experiencia única de turismo de lujo junto al mar"
              bgClass="bg-tourism-luxury"

            >
              <TourismLuxury />
            </Layout>
          } />

          <Route path="/tourism/nocturnal" element={
            <Layout
              title="Turismo Nocturno"
              description="Vive la magia de Lima al caer la noche. Disfruta de su vibrante vida nocturna, espectáculos y experiencias únicas en 
              nuestros tours nocturnos"
              bgClass="bg-tourism-nocturnal"

            >
              <TourismNocturnal />
            </Layout>
          } />

          <Route path="/reservation" element={
            <Reservation />
          } />

          <Route path="/my-reservations" element={
            <MyReservations />
          } />

          <Route path="/login" element={
            <Login />
          } />

          <Route path="/register" element={
            <Register />
          } />

        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;