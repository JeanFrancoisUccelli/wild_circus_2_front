import React from "react";
import "./artist.css";

const First = () => {
    return (
      <div className="container">
        <div className="card">
          <img
            class="card-img-top img-fluid"
            src="http://cirquepinder.com/wp-content/uploads/2019/10/5.jpg"
            alt=""
          />
          <div className="title">
            <h2>Duo Pasha & Morris</h2>
            <h3>Les clowns</h3>

            <p className="overview">
              Personnages incontournables de la piste, attendus aussi bien des
              enfants que des parents.
              <br />
              Ils présentent des reprises tout au long du spectacle,
              <br />
              nous les retrouvons en fin de programme pour une entrée dans la
              plus grande tradition clownesque !
            </p>
          
                      </div>
        </div>
      </div>
    );
  }


export default First;
