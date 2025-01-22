import React from "react";
import "./style.css";

const Relatorios = () => {
    const pedidos = "SELECT * FROM pedidos";
    const reservas = "SELECT * FROM reservas";
    const estoque = "SELECT * FROM estoque";
  
    return (
    <div className="relatorios-container">
      <header className="relatorios-header">
        <h1>Relatorios de Gerenciamento</h1>
      </header>

      <main className="relatorios-content">
        <section className="relatorios">
            <h2>Relatórios de Pedidos</h2>
            <p>Acompanhe os pedidos em tempo real.</p>
            {pedidos}
            <div className="grafico-relatorios">Gráfico de Pedidos</div>
        </section>

        <section className="relatorios">
            <h2>Relatório de Reservas</h2>
            <p>Acompanhe as mesas reservadas</p>
            {reservas}
            <div className="grafico-relatorios"></div>
        </section>

        <section className="relatorios">
            <h2>Relatório de Estoque</h2>
            <p>Acompanhe o seu estoque aqui!</p>
            {estoque}
            <div className="grafico-relatorios">Gráfico de Estoque</div>
        </section>
      </main>

      <footer className="relatorios-footer">
        <p>&copy; 2025 - Sistema de Gerenciamento de Restaurantes</p>
      </footer>
    </div>
  );
};

export default Relatorios;