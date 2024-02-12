import "./MentionsStyle.css";
import Accordion from "react-bootstrap/Accordion";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

function Mentions() {
  return (
    <>
      <Header></Header>
      <main>
        <section id="mentions">
          <div className="mentionsContainer">
            <h1 style={{ fontWeight: "600" }}>MENTIONS LÉGALES</h1>

            <div className="blueLine"></div>

            {/* ---------------- ACCORDION -----------------------------------------*/}

            <Accordion className="accordion" defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header className="accordionHeader">
                  Éditeur du site
                </Accordion.Header>
                <Accordion.Body>
                  <h2>John Doe</h2>
                  <div>
                    <img
                      className="contactIcones"
                      src="src/assets/Images/cartes-et-drapeaux.png"
                      alt="Icone de l'adresse postale"
                      width={24}
                    />
                    <a
                      className="contactAdressLink"
                      href="https://www.google.com/maps/place/40+Rue+Laure+Diebold,+69009+Lyon/@45.778662,4.7989789,17z/data=!3m1!4b1!4m6!3m5!1s0x47f4eb65edac5b3f:0xe01c47049cb2e2b9!8m2!3d45.778662!4d4.7989789!16s%2Fg%2F11c24790th?entry=ttu"
                    >
                      40 Rue Laure Diebold <br /> 69009 Lyon, France
                    </a>
                    <br></br>
                    <img
                      className="contactIcones"
                      src="src/assets/Images/mobile.png"
                      alt="Icone d'un téléphone portable."
                      width={24}
                    />
                    <a className="contactLink" href="tel:0620304050">
                      06 20 30 40 50
                    </a>
                    <br />
                    <img
                      className="contactIcones"
                      src="src/assets/Images/enveloppe.png"
                      alt="Icon d'une enveloppe."
                      width={24}
                    />
                    <a className="contactLink" href="mailto:john.doe@gmail.com">
                      John.doe@gmail.com
                    </a>
                  </div>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header className="accordionHeader">
                  Hébergeur
                </Accordion.Header>
                <Accordion.Body>
                  <h2>Always Data</h2>
                  <div>
                    <a
                      className="contactAdressLink"
                      href="https://www.google.com/maps/place/40+Rue+Laure+Diebold,+69009+Lyon/@45.778662,4.7989789,17z/data=!3m1!4b1!4m6!3m5!1s0x47f4eb65edac5b3f:0xe01c47049cb2e2b9!8m2!3d45.778662!4d4.7989789!16s%2Fg%2F11c24790th?entry=ttu"
                    >
                      91 rue du faubourg Saint Honoré <br />
                      75008 Paris
                    </a>
                    <br></br>
                    <img
                      className="contactIcones"
                      src="src/assets/Images/la-toile.png"
                      alt="Icon internet."
                      width={24}
                    />
                    <a
                      className="contactLink"
                      href="https://www.alwaysdata.com"
                    >
                      www.alwaysdata.com
                    </a>
                  </div>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header className="accordionHeader">
                  Crédits
                </Accordion.Header>
                <Accordion.Body>
                  <h2>Crédits</h2>

                  <p>
                    {" "}
                    Site développpé par John Doe, étudiant du CEF.
                    <br />
                    Les images libres de droit sont issues du site{" "}
                    <a className="contactLink" href="https://pixabay.com/fr/" style={{ color:"#0d6efd" }}>
                      Pixabay
                    </a>
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Mentions;
