import React from "react";
import Header from './Header'
import {Schwifty} from './Styles/Styles'

export const WelcomePage = () => {
  return (
    <section className="welcome-page">
      <Header /> <br />
      <header>
          <Schwifty>GET SCHWIFTY!</Schwifty>
        <img
          className="main-img ui centered medium circular image"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />

      </header>
    </section>
  );
}
