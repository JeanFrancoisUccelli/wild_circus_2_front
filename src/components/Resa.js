import React, { useState, useEffect } from "react";
import axios from "axios";
import "./resa.css";

export default function Reservation(props) {
    const [newResa, setNewResa] = useState({  })
    const [lieu, setLieu] = useState([]);
    const [resas, setResas] = useState([]);

    const getData = () => {
      axios
        .get("https://wildcircus2back.herokuapp.com/lieux")
        //  .then((res) => {res.data.map(e=>{lieu.push(e)})})
        .then((res) => setLieu(res.data))
        // .then(res=>{console.log(res.data[0].name , res.data[0].lat)})
        
        .then (axios
        .get("https://wildcircus2back.herokuapp.com/resas")
        //  .then((res) => {res.data.map(e=>{lieu.push(e)})})
        .then((res) => setResas(res.data))
        // .then(res=>{console.log(res.data[0].name , res.data[0].lat)})
        .catch((error) => {
          console.log(error);
        }));
    };
  
    useEffect(() => {
      getData();
    }, []);


    const validateNewResa = (e) => {
        setNewResa({ ...newResa, [e.target.name]: e.target.value, [e.target.date]: e.target.value, [e.target.nbPlace]: e.target.value})
    }

    const makeResa = (e) => {
        e.preventDefault();
        axios // envoi ds la bdd
            .post(`https://wildcircus2back.herokuapp.com/resas`, newResa)
            .then(res => {
                if (res.err) {
                    alert(res.err);
                } else {
                    alert(`La réservation pour le ${newResa.date} au nom de ${newResa.name} a été enregistrée avec succès!`);
                }
            });
    };

console.log(resas)

    return (
        <div className="reservation">
            <h1>Booking</h1>
            <form className="form_resa">
            <div className="reservationInput">
                <div>
                    <label htmlFor="spectacle_id">Shows :</label><br />
                    <select name="spectale_id" onChange={validateNewResa}>
                       { lieu.map((e) => {
                            return (
                        <option key={e.id}>
                           { e.name}
                        </option>)})}
                    </select>
                </div>

                <div>
                    <label htmlFor="name">Your name :</label><br />
                    <input name="name" onChange={validateNewResa} />
                </div>

                <div>
                        <label htmlFor="date">date :</label><br />
                    <input type="date" name="date" onChange={validateNewResa} />
                </div>

                

                <div>
                        <label htmlFor="nbPlaces">show tickets :</label><br />
                    <select name="nbPlace" onChange={validateNewResa}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                </div>
                <div className="boutonsClass">
                <div className="btn-resa">
                    <button style={{marginLeft: 'auto', marginRight: 'auto', width: '70%'}} class="btn btn-secondary btn-lg btn-block btn-sm" onClick={props.handlePopup}>
                        Cancel
          </button>
                    <button style={{marginLeft: 'auto', marginRight: 'auto', width: '70%'}} class="btn btn-primary btn-lg btn-block btn-sm" onClick={makeResa}>Book here</button>
                    <a style={{marginLeft: 'auto', marginRight: 'auto', width: '70%'}} class="btn btn-info btn-lg btn-block btn-sm" href="/User">Back</a>
                </div>
                </div>
            </form>
        </div>
    );
}