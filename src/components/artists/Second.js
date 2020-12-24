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
          Loïc del Egido, trained at the Escola de Circ Rogelio Rivel in Barcelona
             from 2006 to 2009 he specialized in diabolos.
             <br />
             He joined the Scuola di Circo Flic di Torino in 2009 and
             perfects in diabolos and acrobatics on the floor.
             <br />
             He then worked in the famous Swiss circus "Starlight" or
             again on the Comédie Music-Hall "Quelle Histoire" produced by the
             Outbreak.
          </p>
        </div>
      </div>
      </div>
    );
  }


export default Second;
