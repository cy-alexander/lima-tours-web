import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, title, description, bgClass }) => {
  return (
    <div className="layout">
      <Header 
        title={title}
        description={description}
        bgClass={bgClass}
      />

      <main className="main-content">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;