import React from "react";
import './navbar.css';
const Navbar=()=>{
    return(
        <nav className="menuBox">
            <a  href="#"><h1 className="logoName">Logo</h1></a>
            <ul className="menu col-5">
                <li className="tab"><a className="tabLink" link-name='Accueil' href="">Accueil</a></li>
                <li className="tab"><a className="tabLink" link-name='Réalisation' href="">Réalisation</a></li>
                <li className="tab"><a className="tabLink" link-name='Contact' href="">Contact</a></li>

            </ul>
        </nav>
    )
}
export default Navbar