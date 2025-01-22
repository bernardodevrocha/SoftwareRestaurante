import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Relatorios from "../Relatorios/index";

const Home = () => {
  return (
      <div className="home-container">
        <header className="home-header">
          <h1>Bem-vindo ao seu sistema de gerenciamento</h1>
        </header>

        <main className="home-content">
          <section className="summary-section">
            <div className="summary-card">
              <h2>Pedidos em andamento</h2>
              <p>25</p>
            </div>

            <div className="summary-card">
              <h2>Reservas para hoje</h2>
              <p>10</p>
            </div>

            <div className="summary-card">
              <h2>Estoque crítico</h2>
              <p>5 itens</p>
            </div>
          </section>

          <nav className="home-navigation">
            <Link to="/pedidos" className="nav-button">
              Gerenciar Pedidos
            </Link>
            <Link to="/reservas" className="nav-button">
              Reservas
            </Link>
            <Link to="/estoque" className="nav-button">
              Controle de Estoque
            </Link>
            <Link to="/relatorios" className="nav-button">
              Relatorios
            </Link>
          </nav>
        </main>

        <footer className="home-footer">
          <p>&copy; 2025 - Sistema de Gerenciamento de Restaurantes</p>
        </footer>
      </div>
  );
};

export default Home;