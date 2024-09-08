import React from "react";
import meHeader from "../../assets/personne.png";
import Blob from "../Shapes/blob";
import './header.css';
const Header=() => {
    return (
        <header>
            <h1 className="col-12"> Mes Réalisations</h1>

            <div className="imgBox col-6">
            <img className="" src={meHeader} alt="" />

            </div>
             <div className="col-6">
                <div className="specialityChoice design">
                    <a href=""><h2>Design</h2></a>
                    
                </div>
                <div className="specialityChoice design">
                    <h2>Développement</h2>
                </div>
             </div>
        </header>
    )
}
export default Header;