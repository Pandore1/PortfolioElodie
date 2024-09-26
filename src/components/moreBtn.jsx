import {useContext, useState} from "react";
import MoreIcon from "../assets/plus.svg"

export default function OpenMoreBtn({ isOpen, clicked = () => {} }){
    return (
        <button 
        className={`openMoreBtn ${!isOpen ? 'close' : ''}`} 
        onClick={clicked}
    >
        <img className="moreIcon" src={MoreIcon} alt="More icon" />
        </button>


    )
}