import React from "react";
import "./artist.css";

const Third = () => {
    return (
          <div className="container">
      <div className="card">
        <img
            class="card-img-top img-fluid"
          src="http://cirquepinder.com/wp-content/uploads/2019/10/4-1.jpg"
          alt=""
        />

        <div className="title">
          <h2>Valentine</h2>
          <h3>Cerceau aérien</h3>
          <p className="overview">
            Après avoir séduit le public parisien avec ses numéros de
            contorsions et de tissus aérien,
            <br />
            la charmante Valentine revient cette année pour le plus grand
            plaisir de tous avec un magnifique numéro de cerceau aérien.
            <br />
            Un numéro alliant la grâce, la souplesse et bien évidemment le
            talent de cette jeune artiste.
          </p>
        </div>
      </div>
      </div>
    );
  }


export default Third;
