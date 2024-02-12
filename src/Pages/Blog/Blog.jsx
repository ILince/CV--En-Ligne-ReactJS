import "./BlogsTyle.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { Link, NavLink } from "react-router-dom";
function Blog() {
  return (
    <>
      <Header></Header>
      <main>
        <section id="blog">
          <img
            className="topImg"
            src="src/assets/Images/data-research.jpg"
            alt="Rayons de lumière bleu sur un fond de couleur noir."
            width={375}
          />

          <div className="blogContainer">
            <h1 style={{ fontWeight: "600" }}>BLOG</h1>
            <p>Retrouver ici quelques articles sur le développement web.</p>
            <div className="blueLine"></div>

            {/* CARDS ----------------------------------------------------------*/}
            <div className="blogContainers">
              <Row xs={1} md={3} className="g-4 p-5 ">
                {Array.from({ length: 1 }).map((_, idx) => (
                  <Col key={idx}>
                    <Card style={{ height: "100%" }} className="carBody">
                      <Card.Img
                        variant="top"
                        src="src/assets/Images/code-1076533_1280.jpg"
                        alt="Interface de programation."
                        style={{ height: "100%" }}
                      />
                      <Card.Body>
                        <Card.Title
                          style={{
                            fontSize: "1.3em",
                            fontWeight: "600",
                            color: "black",
                          }}
                        >
                          Coder son site en HTML/CSS
                        </Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of card's content.
                        </Card.Text>
                        <Link to="/NoPages" className="cardBtn">
                          Lire la suite
                        </Link>
                      </Card.Body>
                      <ListGroup className="list-group-flush">
                        <ListGroup.Item className="listGroup">
                          Publié
                          <time dateTime="2022-08-20T19:00">
                            {" "}
                            le 22 août 2022
                          </time>
                        </ListGroup.Item>
                      </ListGroup>
                    </Card>
                  </Col>
                ))}
                {Array.from({ length: 1 }).map((_, idx) => (
                  <Col key={idx}>
                    <Card style={{ height: "100%" }}>
                      <Card.Img
                        variant="bottom"
                        src="src/assets/Images/money-2724241_1280.jpg"
                        alt="Bocaux remplis de piece en cuivre avec des plantes sur le dessus."
                        style={{ height: "100%" }}
                      />
                      <Card.Body>
                        <Card.Title
                          style={{
                            fontSize: "1.3em",
                            fontWeight: "600",
                            color: "black",
                          }}
                        >
                          Vendre ses produits sur le web
                        </Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of card's content.
                        </Card.Text>
                        <Link to="/NoPages" className="cardBtn">
                          Lire la suite
                        </Link>
                      </Card.Body>
                      <ListGroup className="list-group-flush">
                        <ListGroup.Item className="listGroup">
                          Publié
                          <time dateTime="2022-08-20T19:00">
                            {" "}
                            le 20 août 2022
                          </time>
                        </ListGroup.Item>
                      </ListGroup>
                    </Card>
                  </Col>
                ))}
                {Array.from({ length: 1 }).map((_, idx) => (
                  <Col key={idx}>
                    <Card style={{ height: "100%" }}>
                      <Card.Img
                        variant="top"
                        src="src/assets/Images/macbook-459196_1280.jpg"
                        alt="Ordinateur portable avec le navigateur Google affiché."
                        style={{ height: "100%" }}
                      />
                      <Card.Body>
                        <Card.Title
                          style={{
                            fontSize: "1.3em",
                            fontWeight: "600",
                            color: "black",
                          }}
                        >
                          Se positionner sur Google
                        </Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of card's content.
                        </Card.Text>
                        <Link to="/NoPages" className="cardBtn">
                          Lire la suite
                        </Link>
                      </Card.Body>
                      <ListGroup className="list-group-flush">
                        <ListGroup.Item className="listGroup">
                          Publié
                          <time dateTime="2022-08-01T19:00">
                            {" "}
                            le 1 août 2022
                          </time>
                        </ListGroup.Item>
                      </ListGroup>
                    </Card>
                  </Col>
                ))}
                {Array.from({ length: 1 }).map((_, idx) => (
                  <Col key={idx}>
                    <Card style={{ height: "100%" }}>
                      <Card.Img
                        variant="top"
                        src="src/assets/Images/macbook-606763_1280.jpg"
                        alt="Un odinateur de bureau, ordinateur portable et une tablette."
                        style={{ height: "100%" }}
                      />
                      <Card.Body>
                        <Card.Title
                          style={{
                            fontSize: "1.3em",
                            fontWeight: "600",
                            color: "black",
                          }}
                        >
                          Coder en responsive design
                        </Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of card's content.
                        </Card.Text>
                        <Link to="/NoPages" className="cardBtn">
                          Lire la suite
                        </Link>
                      </Card.Body>
                      <ListGroup className="list-group-flush">
                        <ListGroup.Item className="listGroup">
                          Publié
                          <time dateTime="2022-07-31T19:00">
                            le 31 juillet 2022
                          </time>
                        </ListGroup.Item>
                      </ListGroup>
                    </Card>
                  </Col>
                ))}
                {Array.from({ length: 1 }).map((_, idx) => (
                  <Col key={idx}>
                    <Card style={{ height: "100%" }}>
                      <Card.Img
                        variant="top"
                        src="src/assets/Images/seo-referencement-strategie-1024x624.webp"
                        alt="Nuage de mots appartenant au champ-lexical du web marketing sur fond bleu."
                        style={{ height: "100%" }}
                      />
                      <Card.Body>
                        <Card.Title
                          style={{
                            fontSize: "1.3em",
                            fontWeight: "600",
                            color: "black",
                          }}
                        >
                          Techniques de référencement
                        </Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of card's content.
                        </Card.Text>
                        <Link to="/NoPages" className="cardBtn">
                          Lire la suite
                        </Link>
                      </Card.Body>
                      <ListGroup className="list-group-flush">
                        <ListGroup.Item className="listGroup">
                          Publié
                          <time dateTime="2022-08-15T19:00">
                            le 30 juillet 2022
                          </time>
                        </ListGroup.Item>
                      </ListGroup>
                    </Card>
                  </Col>
                ))}
                {Array.from({ length: 1 }).map((_, idx) => (
                  <Col key={idx}>
                    <Card style={{ height: "100%" }}>
                      <Card.Img
                        variant="top"
                        src="src/assets/Images/programation_logo.png"
                        alt="Logos les plus connus des différents langages de développement web."
                        style={{ height: "100%" }}
                      />
                      <Card.Body>
                        <Card.Title
                          style={{
                            fontSize: "1.3em",
                            fontWeight: "600",
                            color: "black",
                          }}
                        >
                          Apprendre à coder
                        </Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of card's content.
                        </Card.Text>
                        <Link to="/NoPages" className="cardBtn">
                          Lire la suite
                        </Link>
                      </Card.Body>
                      <ListGroup className="list-group-flush">
                        <ListGroup.Item className="listGroup">
                          Publié
                          <time dateTime="2022-07-12T19:00">
                            le 12 juillet 2022
                          </time>
                        </ListGroup.Item>
                      </ListGroup>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Blog;
