import { useState } from "react";
import RealizationTemplate from "./realizationTemplate";
import realizationData from "../realizationData";
import SkillBtn from "./skillBtn";
import meHeader from "../assets/personne.png";

export default function Realization() {
  const [realization, setRealization] = useState(realizationData);

  const menuSkill = [
    ...new Set(
      realizationData.flatMap((item) => 
        item.skills.map((skill) => ({
          skillName: skill.skillName,
          skillClass: skill.skillClass,
        }))
      )
    ),
  ];

  
const filterSkill = (skillName) => {
  const newRealizationDisplay = realizationData.filter((realizationItem) =>
    realizationItem.skills.some((skill) => skill.skillName === skillName) // Correct filtering condition
  );
  setRealization(newRealizationDisplay);
};

return (
  <>
    <nav className="realizationNav">
      <div className="imgBox col-5">
        <img className="" src={meHeader} alt="" />
      </div>
      <div className="col-6">
        <div id="design" className="specialityChoice">
          <a href="">
            <h2>Design</h2>
          </a>
        </div>
        <div id="developpement" className="specialityChoice">
          <h2>Développement</h2>
        </div>
      </div>
    </nav>
    <section className="realizationSection">
      <div className="skillFilter col-12">
        <p>Chercher par skill:</p>
        <SkillBtn filterSkill={filterSkill} menuSkill={menuSkill} />
      </div>
      {realization.map((realizationItem, idx) => ( // Render filtered realizations
        <RealizationTemplate 
          key={idx}
          id={idx}
          title={realizationItem.title}
          desc={realizationItem.desc}
          previewImage={realizationItem.previewImage}
          skills={realizationItem.skills}  
          fullImage={realizationItem.fullImage}
          type={realizationItem.type}
          year={realizationItem.year}
        />
      ))}
    </section>
  </>
);
}