import React from "react";
import "./artist.css";

const Second = () => {
    return (
      <div className="container">
      <div className="card">
        <img
            class="card-img-top img-fluid"
          src="http://cirquepinder.com/wp-content/uploads/2019/10/1.jpg"
          alt=""
        />

        <div className="title">
          <h2>Loïc del Egido</h2>
          <h3>Diabolos</h3>
          <p className="overview">
            Loïc del Egido, formé à l’Escola de Circ Rogelio Rivel de Barcelone
            de 2006 à 2009 il se spécialise en diabolos.
            <br />
            Il intègre la Scuola di Circo Flic di Torino en 2009 et se
            perfectionne en diabolos et acrobatie au sol.
            <br />
            Il travaille ensuite dans le célèbre cirque Suisse « Starlight » ou
            encore sur la Comédie Music-Hall « Quelle Histoire » produit par la
            Flambée.
          </p>
        </div>
      </div>
      </div>
    );
  }


export default Second;
