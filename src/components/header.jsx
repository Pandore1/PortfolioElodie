import { useCallback, useState } from "react"
import meHeader from "../assets/personne.png";
import Blob from "./blob";

import Navbar from "./navbar";
export default function Header() {
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
             <Blob></Blob>
        </header>
    )
}
