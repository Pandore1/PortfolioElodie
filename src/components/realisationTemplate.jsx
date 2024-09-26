import {useContext, useState} from "react";
import OpenMoreBtn from "./moreBtn";



export default function RealisationTemplate({
    title,
    id,
    desc,
    type,
    competence,
    previewImage,
    fullImage,
    year,
})

{
    const [isRealisationOpen,setIsRealisationOpen]=useState(false);

    const realisationModalOpen=()=>{
        setIsRealisationOpen(true);
    }
    const realisationModalClose=()=>{
        setIsRealisationOpen(false);
    }
  
    return (
        <>
        <div className="realisation" >
            <div className="realisationTab">
            <h3>{title}</h3>
            <OpenMoreBtn clicked={realisationModalOpen}/>
            </div>
            <div className="imgBox">
            <img src={previewImage} alt="" />
            <div className="resumeRealisation">
                <p>{desc}</p>
            </div>
            </div>

          
        </div>
        { <div className={`realisationModal ${isRealisationOpen?'open':''}`}>
        
            <div className="imgBox">
            <img src={fullImage} alt="" />
            </div> 
            <div className="realisationInfo">
            <OpenMoreBtn isOpen={false} clicked={realisationModalClose}/>

            <h2>
                {title}
            </h2>
            <p>{desc}</p>
            
            </div>
           
        </div>
        }
       
        </>
    )

}
 