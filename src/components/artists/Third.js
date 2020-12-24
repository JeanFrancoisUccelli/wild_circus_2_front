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
          <h3>Aerial hoop</h3>
          <p className="overview">
          After having seduced the Parisian public with his acts of
             contortions and aerial tissue,
             <br />
             the charming Valentine returns this year for the biggest
             everyone's pleasure with a magnificent aerial hoop number.
             <br />
             A number combining grace, flexibility and of course the
             talent of this young artist.
          </p>
        </div>
      </div>
      </div>
    );
  }


export default Third;
