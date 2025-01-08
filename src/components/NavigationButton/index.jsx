import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./NavigationButton.css"; // Opcional para estilização

const NavigationButton = ({ to, label }) => {
  return (
    <BrowserRouter>
      <Link to={to} className="nav-button">
        {label}
      </Link>
    </BrowserRouter>
  );
};

export default NavigationButton;
