import {useContext} from "react";

export default function RealisationTemplate(){
    return (
        <>
        <div className="realisation">
            <div className="realisationTab">
            <h3>Chaton</h3>
                <button className="openRealisation">+</button>
            </div>
            <div className="imgBox">
            <img src="src\assets\chaton.jpeg" alt="" />
            <div className="resumeRealisation">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent erat arcu, convallis eget feugiat id, convallis in purus. Fusce ut eleifend dolor. Nulla dictum interdum bibendum. </p>
            </div>
            </div>

          
        </div>
       
        </>
    )

}
 