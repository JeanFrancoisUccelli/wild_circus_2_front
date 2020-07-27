import React, { useState } from "react";
import axios from "axios";
import "./resa.css";

export default function Reservation(props) {
    const [newResa, setNewResa] = useState({  })


    const validateNewResa = (e) => {
        setNewResa({ ...newResa, [e.target.name]: e.target.value, [e.target.date]: e.target.value, [e.target.nbPlace]: e.target.value})
    }

    const makeResa = (e) => {
        e.preventDefault();
        axios // envoi ds la bdd
            .post(`http://localhost:8080/resas`, newResa)
            .then(res => {
                if (res.err) {
                    alert(res.err);
                } else {
                    alert(`La réservation pour ${newResa.nom} a été enregistrée avec succès!`);
                }
            });
    };

    return (
        <div className="reservation">
            <h1>Réservation</h1>
            <form className="form_resa">
            <div className="reservationInput">
                {/* <div>
                    <label htmlFor="spectacle_id">Spectacle :</label>
                    <select name="spectale_id" onChange={validateNewResa}>
                        <option value={props.datas.id}>
                            {props.datas.titre} {props.datas.dates}
                        </option>
                    </select>
                </div> */}

                <div>
                    <label htmlFor="name">Nom :</label><br />
                    <input name="name" onChange={validateNewResa} />
                </div>

                <div>
                        <label htmlFor="date">date :</label><br />
                    <input name="date" onChange={validateNewResa} />
                </div>

                

                <div>
                        <label htmlFor="nbPlaces">Places :</label><br />
                    <select name="nbPlace" onChange={validateNewResa}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                </div>
                <div className="boutonsClass">
                <div className="btn-resa">
                    <button class="btn btn-secondary btn-lg btn-block btn-sm" onClick={props.handlePopup}>
                        Annuler
          </button>
                    <button class="btn btn-primary btn-lg btn-block btn-sm" onClick={makeResa}>Réserver</button>
                    <a class="btn btn-info btn-lg btn-block btn-sm" href="/User">Retour</a>
                </div>
                </div>
            </form>
        </div>
    );
}