import React from "react";
import './skillCircle.css';
import Illustrator from "../../assets/illustrator.png";
import Photoshop from "../../assets/photoshop.png";
import WordPress from "../../assets/wordpress.png";
export default function  SkillCircle(){
    return (

        <div className="skillBox col-6">
            <div className="imgBox skill-item col-1"><img src="../../assets/illustrator.png" alt="" /></div>
            <div className="imgBox skill-item col-1"><img src={Photoshop} alt="" /></div>

            <div className="imgBox skill-item col-1"><img src={WordPress} alt="" /></div>

        </div>
        
    )
}

