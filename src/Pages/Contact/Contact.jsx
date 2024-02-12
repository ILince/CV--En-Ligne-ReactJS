import "./ContactStyle.css";
import Button from "react-bootstrap/Button";
import Header from "../../Components/Header";
import Form from "react-bootstrap/Form";
import Footer from "../../Components/Footer";

function Contact() {
  return (
    <>
      <Header></Header>
      <main>
        <section id="contact" className="contactBackground">
          <div className="overlay">
            <div className="contactContainer">
              <h1 style={{ fontWeight: "600", fontSize: "2em" }}>
                ME CONTACTER
              </h1>
              <p style={{ fontSize: "1em", fontWeight: "400" }}>
                Pour me contacter en vue d'un entretien ou d'une future
                collaboration, merci de remplir le formulaire de contact.
              </p>

              <div className="blueLine"></div>

              {/* ------------------------------------------------"FORMULAIRE DE CONTACTE" ------------------------------------------------------*/}
              <div className="w-100 row row-cols-1 row-cols-sm-2 row-cols-md-2">
                <div>
                  <div className="contactForm">
                    <h2 style={{ fontWeight: "600", fontSize: "2em" }}>
                      Formulaire de contact
                    </h2>
                    <div className="blueLineForm"></div>
                    <Form className="w-10">
                      <Form.Group className="mb-3">
                        <Form.Control
                          id="fname"
                          type="text"
                          placeholder="Votre nom"
                          required
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Control
                          id="email"
                          type="email"
                          placeholder="Votre adresse email"
                          required
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Control
                          id="phone"
                          placeholder="Votre numéro de téléphone"
                          required
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Control placeholder="Sujet" required />
                      </Form.Group>

                      <Form.Group
                        className="mb-3 h-10"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Control
                          as="textarea"
                          rows={5}
                          placeholder="Votre message"
                          required
                        />
                      </Form.Group>

                      <Button
                        className="contactBtn"
                        variant="primary"
                        type="submit"
                      >
                        Envoyer
                      </Button>
                    </Form>
                  </div>
                </div>

                {/* ---------------------------------------------"MES COORDONEES" -------------------------------------------------------------*/}
                <div>
                  <div className="contactForm">
                    <h2 style={{ fontWeight: "600", fontSize: "2em" }}>
                      Mes coordonnées
                    </h2>
                    <div className="blueLineForm"></div>
                    <div className="contactLinkContainer">
                      <img
                        className="contactIcones"
                        src="src/assets/Images/cartes-et-drapeaux.png"
                        alt=""
                        width={24}
                      />
                      <a
                        className="contactLink"
                        href="https://www.google.com/maps/place/40+Rue+Laure+Diebold,+69009+Lyon/@45.778662,4.7989789,17z/data=!3m1!4b1!4m6!3m5!1s0x47f4eb65edac5b3f:0xe01c47049cb2e2b9!8m2!3d45.778662!4d4.7989789!16s%2Fg%2F11c24790th?entry=ttu"
                      >
                        40 Rue Laure Diebold, 69009 Lyon, France
                      </a>
                      <br></br>
                      <img
                        className="contactIcones"
                        src="src/assets/Images/mobile.png"
                        alt=""
                        width={24}
                      />
                      <a className="contactLink" href="tel:0620304050">
                        06 20 30 40 50
                      </a>
                    </div>

                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6269657480448!2d4.7964093403747!3d45.77866571252292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1705930181461!5m2!1sfr!2sfr"
                      height={330}
                      referrerPolicy={"no-referrer-when-downgrade"}
                      allowFullScreen={""}
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </main>
    </>
  );
}

export default Contact;
