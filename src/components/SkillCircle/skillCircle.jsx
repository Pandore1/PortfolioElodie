import React, { useState } from "react";
import './skillCircle.css';
// import Illustrator from "../../assets/illustrator.png";
// import Photoshop from "../../assets/photoshop.png";
// import WordPress from "../../assets/wordpress.png";
export default function  SkillCircle(){
/*
        const [index,setIndex]=useState(0);
        const length=6;
        const handlePrevious=()=>{
            const newIndex=index-1;
            setIndex(newIndex<0?length-1:newIndex);
        }
        const handleNext=()=>{
            const newIndex=index+1;
            setIndex(newIndex>=length?0:newIndex);
        }*/

    return (

        
        <section className="skillBox col-6">
            <article className="skillItem col-3">
            <div className="imgBox">
                <img src="src\assets\illustrator.png" alt="" />
            </div>
            </article>
           
            <div className="imgBox skillItem col-3"><img src="src\assets\photoshop.png" alt="Photoshop" /></div>

            <div className="imgBox skillItem col-3"><img src="src\assets\wordpress.png" alt="" /></div>

        </section>
        
    )
}

