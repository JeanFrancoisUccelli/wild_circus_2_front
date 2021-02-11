import React, { useState, useEffect } from "react";
import axios from "axios";
import "./resa.css";

export default function Reservation(props) {
  const [newResa, setNewResa] = useState({});
  const [lieu, setLieu] = useState([]);
  const [resas, setResas] = useState([]);

  const getData = () => {
    axios
      .get("https://wildcircus2back.herokuapp.com/lieux")
      //  .then((res) => {res.data.map(e=>{lieu.push(e)})})
      .then((res) => setLieu(res.data))
      // .then(res=>{console.log(res.data[0].name , res.data[0].lat)})

      .then(
        axios
          .get("https://wildcircus2back.herokuapp.com/resas")
          //  .then((res) => {res.data.map(e=>{lieu.push(e)})})
          .then((res) => setResas(res.data))
          // .then(res=>{console.log(res.data[0].name , res.data[0].lat)})
          .catch((error) => {
            console.log(error);
          })
      );
  };

  useEffect(() => {
    getData();
  }, []);

  const validateNewResa = (e) => {
    setNewResa({
      ...newResa,
      [e.target.name]: e.target.value,
      [e.target.date]: e.target.value,
      [e.target.nbPlace]: e.target.value,
    });
  };

  const makeResa = (e) => {
    e.preventDefault();
    axios // envoi ds la bdd
      .post(`https://wildcircus2back.herokuapp.com/resas`, newResa)
      .then((res) => {
        if (res.err) {
          alert(res.err);
        } else {
          alert(
            `La réservation pour le ${newResa.date} au nom de ${newResa.name} a été enregistrée avec succès!`
          );
        }
      });
  };

  console.log(window.location.search.substring(1))

  return (
    <div className="reservation">
      <h1>Booking</h1>
      <form className="form_resa">
        <div className="reservationInput">
          <div>
            <label htmlFor="spectacle_id">Shows :</label>
            <br />
            {window.location.search.substring(1) ? (
                <select name="spectale_id" onChange={validateNewResa}>
                <option>{window.location.search.substring(1)}</option>
                </select>
            ) : (
            <select name="spectale_id" onChange={validateNewResa}>
              {lieu.map((e) => {
                return <option key={e.id}>{e.name}</option>;
              })}
            </select>)}
          </div>

          <div>
            <label htmlFor="name">Your name :</label>
            <br />
            <input name="name" onChange={validateNewResa} />
          </div>

          <div>
            <label htmlFor="date">date :</label>
            <br />
            <input type="date" name="date" onChange={validateNewResa} />
          </div>

          <div>
            <label htmlFor="nbPlaces">show tickets :</label>
            <br />
            <input name="nbPlace" onChange={validateNewResa} />
              {/* <option>Choose how many tickets</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select> */}
          </div>
        </div>
        <div className="boutonsClass">
            
            <button
              style={{ width: "30%" }}
              class="btn btn-outline-success btn-lg btn-sm"
              onClick={makeResa}
            >
              OK !
            </button>
            <a
              style={{ width: "30%" }}
              class="btn btn-outline-warning btn-lg btn-sm"
              href="/User"
            >
              Back
            </a>
            <button
              style={{ width: "30%" }}
              class="btn btn-outline-info btn-lg btn-sm"
              onClick={props.handlePopup}
            >
              Cancel
            </button>
        </div>
      </form>
    </div>
  );
}
