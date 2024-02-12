import "./PortfolioStyle.css";
import Footer from "../../Components/Footer";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Header from "../../Components/Header";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <>
      <Header></Header>
      <main>
        <section id="portfolio">
          <img
            className="topImg"
            src="src/assets/Images/data-research.jpg"
            alt="Rayons de lumière bleu sur un fond de couleur noir."
            width={375}
          />

          <div className="portfolioContainer">
            <h1 style={{ fontWeight: "600" }}>PORTFOLIO</h1>
            <p>Voici quelqueles-unes de mes réalisations.</p>
            <div className="blueLine"></div>

            {/* -------------------------------- CARDS -----------------------------------------------*/}
            <div>
              <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3">
                <div className="d-flex justify-content-center p-3">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src="src/assets/Images/vegetables-790022_1280.jpg"
                      alt="Panier de lègumes."
                    />
                    <Card.Body>
                      <Card.Title
                        style={{
                          fontSize: "1.5em",
                          fontWeight: "600",
                          color: "black",
                        }}
                      >
                        Fresh food
                      </Card.Title>
                      <Card.Text>
                        Réalisation d'un site avec commande en ligne.
                      </Card.Text>
                      <Link to="/NoPages" className="btn">
                        Voir
                      </Link>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item className="listGroup">
                        Site réalisé avec PHP et MySQL
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </div>
                <div className="d-flex justify-content-center p-3">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src="src/assets/Images/sushi-354628_1280.jpg"
                      alt=" Plat avec différent sushi."
                    />
                    <Card.Body>
                      <Card.Title
                        style={{
                          fontSize: "1.5em",
                          fontWeight: "600",
                          color: "black",
                        }}
                      >
                        Restaurant Akira
                      </Card.Title>
                      <Card.Text>Réalisation d'un site vitrine.</Card.Text>
                      <Link to="/NoPages" className="btn">
                        Voir
                      </Link>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item className="listGroup">
                        Site réalisé avec WordPress
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </div>
                <div className="d-flex justify-content-center p-3">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src="src/assets/Images/buddha-708490_1280.jpg"
                      alt="Statue de buddha avec à sa droite, une fleur de lotus et des pierres en équilibre."
                    />
                    <Card.Body>
                      <Card.Title
                        style={{
                          fontSize: "1.5em",
                          fontWeight: "600",
                          color: "black",
                        }}
                      >
                        Espace Bien-être
                      </Card.Title>
                      <Card.Text>
                        Réalisation d'un site vitrine pour un praticien de
                        bien-être.
                      </Card.Text>
                      <Link to="/NoPages" className="btn">
                        Voir
                      </Link>
                    </Card.Body>

                    <ListGroup className="list-group-flush">
                      <ListGroup.Item className="listGroup">
                        Site réalisé en HTML/CSS
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Portfolio;
