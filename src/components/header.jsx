import { useCallback, useState } from "react"
import ArrowScroll from "../assets/arrow.png"

import Navbar from "./navbar";
export default function Header() {
    return (
        <header>
            <Navbar></Navbar>

            <div className="backgroundHeader">

                <h1>
                    Élodie Picard
                </h1>
                <p>Développeuse Front-end, Designeuse</p>
                    
             
                <button className="arrowScrollBtn"> <img src={ArrowScroll} alt="" /></button>
            </div>
         
          
        </header>
    )
}
