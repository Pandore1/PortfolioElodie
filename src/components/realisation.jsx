import { useCallback, useState } from "react";
import RealisationTemplate from "./realisationTemplate";
import meHeader from "../assets/personne.png";
export default function Realisation() {
  const realisation = [
    {
      title: "Chien",
      desc: "Le Chien est la sous-espèce domestique de Canis lupus, un mammifère de la famille des Canidés, laquelle comprend également le dingo, chien domestique retourné à l'état",
      type: "Design",
      competence: "Figma",
      previewImage: "./dog.jpg",
      fullImage: "./chaton.jpg",
      year: "2020",
    },
    {
        title: "Chat",
        desc: "Le Chien est la sous-espèce domestique de Canis lupus, un mammifère de la famille des Canidés, laquelle comprend également le dingo, chien domestique retourné à l'état",
        type: "Design",
        competence: "Figma",
        previewImage: "./chaton.jpeg",
        fullImage: "./chaton.jpeg",
        year: "2020",
      },
  ];
  return (
    <>
    <nav className="realisationNav">

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
    <section className="realisationSection">
    

      {realisation.map((realisationItem, idx) => (
        <RealisationTemplate
          id={idx}
          title={realisationItem.title}
          desc={realisationItem.desc}
          previewImage={realisationItem.previewImage}
          fullImage={realisationItem.fullImage}
          type={realisationItem.type}
          year={realisationItem.year}
        />
      ))}
    </section>
    </>
  );
}
