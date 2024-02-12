import "./HomeStyle.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

const titleOneStyle = { fontWeight: "600", fontSize: "3em", color: "white" };
const titleTwoStyle = {
  fontWeight: "600",
  fontSize: "1.5em",
  color: "white",
  margin: "4%",
};

function Home() {
  return (
    <>
      <Header></Header>
      <main>
        {/* ------------------------ HOME SECTION ------------------------------------*/}
        <section id="home">
          <img
            className="backgroundImage"
            src="src/assets/Images/software-developer-6521720_1920.jpg"
            alt="Homme dans un bureau travaillant sur son ordinateur avec un casque audio."
            width={375}
          />
          <div className="homeContainer">
            <h1 style={titleOneStyle}>Bonjour, je suis John Doe</h1>
            <h2 style={titleTwoStyle}>Développeur web full stack</h2>
            <a href="#about" className="homeBtn">
              En savoir plus
            </a>
          </div>
        </section>

        {/* -------------------------ABOUT SECTION ----------------------------------*/}
        <section id="about">
          <div className="AboutContainer">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2  p-5">
              <div>
                <h2>À propos </h2>
                <div className="blueLine"></div>
                <div>
                  <p>
                    Passionné par l'informatique et les nouvelles technologies,
                    j'ai suivi une formation d'
                    <strong>intégrateur-développeur web</strong> au CEF. Au
                    cours de cette formation, j'ai pu acquérir des bases solides
                    pour travailler dans le domaine du
                    <strong>développement web.</strong>
                  </p>
                  <p>
                    Basé à Lyon, je suis en recherche d'une alternance au sein
                    d'une agence digitale pour consolider ma formation de
                    <strong>développeur web full stack.</strong>
                  </p>
                  <p>
                    J'accorde une attention particulière à la qualité du code
                    que j'écris et je respecte les bonnes pratiques du web.
                  </p>
                </div>
              </div>

              <div>
                <img
                  className="profilPic"
                  src="src/assets/Images/man-597178_1920.jpg"
                  alt="Homme dans un bureau travaillant"
                  width={375}
                />
                <div className="skillContainer">
                  <h2>Mes compétences</h2>

                  <div>
                    HTML5 90%
                    <ProgressBar variant="danger" now={90} />
                  </div>

                  <div>
                    CSS3 80%
                    <ProgressBar variant="info" now={80} />
                  </div>

                  <div>
                    {" "}
                    JAVASCRIPT 70%
                    <ProgressBar variant="warning" now={70} />
                  </div>

                  <div>
                    PHP 60%
                    <ProgressBar variant="success" now={60} />
                  </div>

                  <div>
                    REACT 50%
                    <ProgressBar variant="" now={50} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*-----------------------------------------------------------------------*/}
      </main>
      <Footer></Footer>
    </>
  );
}

export default Home;
