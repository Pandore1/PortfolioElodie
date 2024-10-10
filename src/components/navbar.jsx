import { useCallback, useState } from "react"

export default function Navbar(){
    const [burgerOpen, setBurgerOpen] = useState(false);
    const toggleBurgerNav=()=>{
    setBurgerOpen(!burgerOpen);
}
    return(
        <nav  className={`menuBox${burgerOpen?' open':''}`}>
            <button className="burgerIcon" onClick={toggleBurgerNav}>
                <span className="burgerLine"></span>
                <span className="burgerLine"></span>
                <span className="burgerLine"></span>
            </button>
            <ul className="menu col-5">
                <li className="tab"><a className="tabLink" link-name='Accueil' href="">Accueil</a></li>
                <li className="tab"><a className="tabLink" link-name='Réalisation' href="">Réalisation</a></li>
                <li className="tab"><a className="tabLink" link-name='Contact' href="">Contact</a></li>

            </ul>
        </nav>
    )
}
