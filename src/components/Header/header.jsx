import React from "react";
import meHeader from "../../assets/personne.png";
import Blob from "../Shapes/blob";
import './header.css';
import Navbar from "../Navbar/navbar";
const Header=() => {
    return (
        <header>
            <Navbar></Navbar>
            <section className="realisationNav">

            
            <h1 className="col-12"> Mes Réalisations</h1>

            <div className="imgBox col-5">
            <img className="" src={meHeader} alt="" />

            </div>
             <div className="col-6">
                <div id="design" className="specialityChoice">
                    <a href=""><h2>Design</h2></a>
                    
                </div>
                <div id="developpement" className="specialityChoice">
                    <h2>Développement</h2>
                </div>
             </div>
             </section>
        </header>
    )
}
export default Header;