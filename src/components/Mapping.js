import React, { useState, useEffect } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import CircusTentIcon from "../assets/pictures/circusTentIcon.png";
import "leaflet/dist/leaflet.css";
import './Mapping.css'
const axios = require("axios");

const circusIcon = L.icon({
  iconUrl: CircusTentIcon,
  iconSize: [50, 80],
  shadowSize: [50, 64],
  iconAnchor: [12.5, 41],
  shadowAnchor: [4, 62],
  popupAnchor: [0, -41],
});

const Mapping = () => {
  const [lieu, setLieu] = useState([]);

  const getData = () => {
    axios
      .get("https://wildcircus2back.herokuapp.com/lieux")
      //  .then((res) => {res.data.map(e=>{lieu.push(e)})})
      .then((res) => setLieu(res.data))
      // .then(res=>{console.log(res.data[0].name , res.data[0].lat)})
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(lieu)
  // {lieu.forEach((clé, valeur)=>{return(console.log(clé+valeur))})}

  return (
    <div className="container">
    <h1>where to find us</h1>
    <Map
      center={[49, 2]}
      zoom={4}
      style={{
        height: "400px",
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "50px",
      }}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {lieu.map((e) => {
        return (
          <Marker position={[e.lat, e.long]} icon={circusIcon}>
            <Popup>
              <h4>{e.name}</h4>
              <h5>Want to book a show ?</h5>
              <a style={{ color: 'white' }} href={`/Resa?${e.name}`} class="btn btn-primary">
                Go !
              </a>
            </Popup>
          </Marker>
        );
      })}
    </Map>
    </div>
  );
};

export default Mapping;
