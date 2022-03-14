import React from "react";
import "../../assets/header.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  console.log(props);
  return (
    <div className="header">
      <div className="header_top">
        <h1>MundoNovelas</h1>
        <h2>Webnovels chinas en español</h2>
      </div>
      <div className="header_nav">
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/novels">Novelas</Link>
          </li>
          <li>
            <Link to="/recommendations">Recomendaciones</Link>
          </li>
          <li>
            <Link to="/donate">Donaciones</Link>
          </li>
          <li>
            <input type="text" placeholder="Buscar" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
