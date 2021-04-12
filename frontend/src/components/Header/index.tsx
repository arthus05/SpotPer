import React from "react";
import { Link } from "react-router-dom";

import { ContainerHeader } from "./styles";
import logo from '../../utils/imagens/logoSpotpng.png'
import Icon from '../../utils/imagens/iconSearch.svg'



export function Header() {
  return (
    <ContainerHeader>
      <section className="container__logo">
        <img src={logo} alt=""/>
      </section>

      <section className="container__central">
        <ul>
          <li>
          <Link to="/" >HOME</Link>
          </li>
          <li>
          <Link to="/playlists" >PLAYLIST</Link>

          </li>
          <li>
          <Link to="/albums" >EDITAR PLAYLIST</Link>
          </li>
         
        </ul>
      </section>

      <div id="divBusca">
        <input type="text" id="txtBusca" placeholder="Buscar"/>
        <img src={Icon} alt=""/>
        
      </div>
    </ContainerHeader>
  );
}
