import React, { useState, useEffect } from "react";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

import "./AssistanceStyle.css";

function Assistance() {
  // Effet : la couleur de l’icône devient #cde1f8 au survol de l’article. -----//
  const [isHoveringOne, setIsHoveringOne] = useState(false);
  const [isHoveringTwo, setIsHoveringTwo] = useState(false);
  const [isHoveringThree, setIsHoveringThree] = useState(false);

  // je n'ai pas trouvé comment factoriser ces fonctions en une seule. -----//
  const handleMouseEnterOne = (e) => {
    setIsHoveringOne(true);
  };
  const handleMouseEnterTwo = (e) => {
    setIsHoveringTwo(true);
  };
  const handleMouseEnterThree = (e) => {
    setIsHoveringThree(true);
  };
  const handleMouseLeave = (e) => {
    setIsHoveringOne(false);
    setIsHoveringTwo(false);
    setIsHoveringThree(false);
  };

  let toggleClassOne = isHoveringOne ? "active" : "";
  let toggleClassTwo = isHoveringTwo ? "active" : "";
  let toggleClassThree = isHoveringThree ? "active" : "";

  return (
    <>
      <Header></Header>
      <main>
        <section id="assistance">
          <img
            className="topImg"
            src="src/assets/Images/data-research.jpg"
            alt="Rayons de lumière bleu sur un fond de couleur noir."
            width={375}
          />
          <div className="assistance">
            <h1 style={{ fontWeight: "600", margin: "12px" }}>
              MON OFFRE DE SERVICES
            </h1>
            <h3 style={{ fontSize: "1em", fontWeight: "400" }}>
              Voici les prestations sur les quelles je peux intervenir.
            </h3>
            <div className="blueLine"></div>

            <div className="articleContainer">
              <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3">
                {/*------------------------ Article 1 ------------------------------- */}
                <article>
                  <div
                    className="articleContainers"
                    onMouseEnter={handleMouseEnterOne}
                    onMouseLeave={handleMouseLeave}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className={`icones${toggleClassOne}`}
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5M13.991 3l.024.001a1.5 1.5 0 0 1 .538.143.76.76 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.5 1.5 0 0 1-.143.538.76.76 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.5 1.5 0 0 1-.538-.143.76.76 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.5 1.5 0 0 1 .143-.538.76.76 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2" />
                    </svg>
                    <h2
                      style={{
                        fontSize: "1.3em",
                        fontWeight: "600",
                        margin: "12px",
                      }}
                    >
                      UX DESIGN
                    </h2>
                    <p>
                      L'
                      <strong>UX Design</strong> est un méthode de conception
                      centrée sur l'utilisateur. Son but est d'offrir une
                      expérience de navigation optimale à l'internaute.
                    </p>
                  </div>
                </article>
                {/*------------------------ Article 2 ------------------------------- */}
                <article>
                  <div
                    className="articleContainers"
                    onMouseEnter={handleMouseEnterTwo}
                    onMouseLeave={handleMouseLeave}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className={`icones${toggleClassTwo}`}
                      viewBox="0 0 16 16"
                    >
                      <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M6.646 7.646a.5.5 0 1 1 .708.708L5.707 10l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708zm2.708 0 2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 10 8.646 8.354a.5.5 0 1 1 .708-.708" />
                    </svg>
                    <h2
                      style={{
                        fontSize: "1.3em",
                        fontWeight: "600",
                        margin: "12px",
                      }}
                    >
                      DÉVELOPPEMENT WEB
                    </h2>
                    <p>
                      Le <strong>développement de site web </strong>repose sur
                      l'utilisation des langages HTML, CSS, JavaScript et PHP.
                    </p>
                  </div>
                </article>
                {/*------------------------ Article 3 ------------------------------- */}
                <article>
                  <div
                    className="articleContainers"
                    onMouseEnter={handleMouseEnterThree}
                    onMouseLeave={handleMouseLeave}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className={`icones${toggleClassThree}`}
                      width={24}
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>
                    <h2
                      style={{
                        fontSize: "1.3em",
                        fontWeight: "600",
                        margin: "12px",
                      }}
                    >
                      RÉFÉRENCEMENT
                    </h2>
                    <p>
                      Le <strong>référencement naturel d'un site</strong>, aussi
                      appelé SEO, consiste à mettre des techniques en oeuvre
                      pour améliorer sa position dans les résultats des moteurs
                      de recherche.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Assistance;
