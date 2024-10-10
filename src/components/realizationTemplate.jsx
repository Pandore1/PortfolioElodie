import { useState } from "react";
import OpenMoreBtn from "./moreBtn";

export default function RealizationTemplate({
    title,
    id,
    desc,
    type,
    skills,
    previewImage,
    fullImage,
    year,
}) {
    const [isRealizationOpen, setIsRealizationOpen] = useState(false);

    const realizationModalOpen = () => {
        setIsRealizationOpen(true);
    }
    const realizationModalClose = () => {
        setIsRealizationOpen(false);
    }
  
    return (
        <>
            <div className="realization col-3">
                <div className="realizationTab">
                    <h3>{title}</h3>
                    <OpenMoreBtn isOpen={true} clicked={realizationModalOpen} />
                </div>
                <div className="imgBox">
                    <img src={previewImage} alt="" />
                    <div className="resumeRealization">
                        <p>{desc}</p>
                    </div>
                </div>
            </div>
            <div className={`realizationModal ${isRealizationOpen ? 'open' : ''}`}>
                <div className="imgBox">
                    <img src={fullImage} alt={title} />
                </div>
                <div className="realizationInfo">
                    <OpenMoreBtn isOpen={false} clicked={realizationModalClose} />
                    <h2>{title}</h2>
                    <p>{desc}</p>
                    <div className="skillList">
                        <h3>Compétences nécessaires</h3>
                        {skills.map((skill, index) => (
                            <button disabled key={index} className={`skill ${skill.skillClass}`}>
                                {skill.skillName}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}