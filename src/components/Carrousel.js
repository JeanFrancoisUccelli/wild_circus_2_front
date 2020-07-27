import React from 'react';
import "./carrousel.css";
import Clown from '../assets/performers/Clown.jpg'
import Cracheur from '../assets/performers/Cracheur.jpg'
import Dompteur from '../assets/performers/Dompteur.jpg'
import Trapezistes from '../assets/performers/Trapezistes.jpg'
import elephant from '../assets/animals/elephant.jpg'
import lion from '../assets/animals/lion.jpg'
import tigre from '../assets/animals/tigre.jpg'
import macaque from '../assets/animals/macaque.jpg'
import gorille from '../assets/animals/gorille.png'

const Carrousel = () => {
    return(
        
        <section id="slideshow">
            <div class="entire-content">
                <div class="content-carrousel">
                    <figure class="shadow"><img src={Clown} alt="clown"/></figure>
                    <figure class="shadow"><img src={Trapezistes} alt="trapezistes"/></figure>
                    <figure class="shadow"><img src={Cracheur} alt="cracheurs"/></figure>
                    <figure class="shadow"><img src={Dompteur} alt="dompteur"/></figure>
                    <figure class="shadow"><img src={elephant} alt="elephant"/></figure>
                    <figure class="shadow"><img src={lion} alt="lion" /></figure>
                    <figure class="shadow"><img src={tigre} alt="tigre" /></figure>
                    <figure class="shadow"><img src={macaque} alt="macaque" /></figure>
                    <figure class="shadow"><img src={gorille} alt="gorille" /></figure>
                </div>
            </div>
        </section>
    )
}
export default Carrousel