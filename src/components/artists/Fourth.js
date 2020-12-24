import React from "react";
import "./artist.css";

const Fourth = () => {
    return (
      <div className="container">
      <div className="card">
        <img
            class="card-img-top img-fluid"
          src="https://www.lamontagne.fr/photoSRC/Gw--/guillaume-dottin-magicien_4584013.jpeg"
          alt=""
        />

        <div className="title">
          <h2>Guillaume Dottin</h2>
          <h3>Great Illusions</h3>
          <p className="overview">
          It is in a dreamlike and mysterious universe that Guillaume Dottin
             will make you travel.
             <br />
             His great illusions are unique creations for the circus
             Pinder.
             <br />
             A surprising number that will take your breath away….
             <br />
             Besides, you will be able to hold your breath as much as our
             illusionist in his aquarium ...
          </p>
        </div>
      </div>
      </div>
    );
  }


export default Fourth;
