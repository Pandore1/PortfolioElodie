import { useCallback, useState } from "react"


import Navbar from "./navbar";
export default function Header() {
    return (
        <header>
            <Navbar></Navbar>

            <div className="backgroundHeader">

                <h1>
                    Élodie Picard
                    <p>Développeuse front-end</p>
                </h1>
                <button className="arrowScrollBtn"> Flèche</button>
            </div>
         
          
        </header>
    )
}
