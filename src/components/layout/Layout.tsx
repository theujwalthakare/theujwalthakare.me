import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import MatrixRain from '../ui/MatrixRain';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen">
      <MatrixRain />
      <div className="relative z-10">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;