import React from 'react';
import Navigation from './Navigation';
import '../css/header.css';

const Header = ({ title, description, bgClass }) => {
  return (
    <header className={`cabecera ${bgClass || ''}`}>
      <Navigation />

      {(title || description) && (
        <div className="encabezado encabezado--normal">
          {title && <h1>{title}</h1>}
          {description && <p>{description}</p>}
        </div>
      )}
    </header>
  );
};

export default Header;