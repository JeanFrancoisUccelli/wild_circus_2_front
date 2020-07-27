import React from "react";
// import { Container, Card, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './perf.css';

const Perf = () => {
  return (
     <div class="container">
      <h1>Performances</h1>
        <div class="card">
          <img
          class="card-img-top img-fluid"
            src="https://res.cloudinary.com/dcmfiobqe/image/upload/v1576597454/CCBB_Landingpage/WildCodeSchool/clown-678042_640_vjbofj.jpg"
            alt="clown"
          />
       
            <h2>Laugh</h2>
            <p>
              As an adult, come and discover our irresistible clowns, between
              practical jokes and pranks let yourself be carried away by their
              joy and fall back into childhood.
            </p>
        </div>

        <div class="card">
          <img
          class="card-img-top img-fluid"
            src="https://res.cloudinary.com/dcmfiobqe/image/upload/v1576741860/CCBB_Landingpage/WildCodeSchool/the-magician_va8obt.jpg"
            alt="Magician and his assistant"
          />
         
            <h2>Dream</h2>
            <p>
              Let yourself be carried away in a world where the real and the
              imaginary are one, in the company of our talented magicians,
              discover a wonderful world limited only by your imagination.
            </p>
        </div>

        <div class="card">
          <img
          class="card-img-top img-fluid"
            src="https://res.cloudinary.com/dcmfiobqe/image/upload/v1576597454/CCBB_Landingpage/WildCodeSchool/circus-828680_640_lnazza.jpg"
            alt="circus arena with elephants"
          />
     
            <h2>Marvel at</h2>
            <p>
              Tame the untameable in the company of our tamers, between roar and
              razor-sharp claws, watch these fierce felines turn into sweet
              kittens.
            </p>
        </div>
      <Link to="/AboutUs">
        Click here if you want to learn more about the Wild Circus.
      </Link>
      </div>
  );
}

export default Perf