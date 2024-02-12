import "./FooterStyle.css";
import { Link } from "react-router-dom";

import React, { useState } from "react";

function App() {
  return (
    <footer className="container-fluid">
      <div className=" row row-cols-1 row-cols-sm-2 row-cols-md-4  p-4">
        {/* COL 1 ----------------------------------------------------------*/}
        <div className="col mb-1">
          <h5 style={{ fontWeight: "600" }}>John Doe</h5>
          <div>
            <a
              href="https://www.google.com/maps/place/40+Rue+Laure+Diebold,+69009+Lyon/@45.778662,4.7989789,17z/data=!3m1!4b1!4m6!3m5!1s0x47f4eb65edac5b3f:0xe01c47049cb2e2b9!8m2!3d45.778662!4d4.7989789!16s%2Fg%2F11c24790th?entry=ttu"
              target="_blank"
              className="nav-link  p-0 text-muted link-dark"
            >
              40 Rue Laure Diebold <br /> 69009 Lyon, France
            </a>
            <a
              href="tel:0620304050"
              className="nav-link  p-0 text-muted link-dark"
            >
              {" "}
              Téléphone : 06 20 30 40 50
            </a>
            <div className="mt-3 mb-3">
              <a
                href="https://github.com/github-john-doe"
                className="m-2"
                target="_blank"
              >
                <img
                  src="src/assets/Images/github.png"
                  alt="Logo de github."
                  width={24}
                />
              </a>
              <a href="https://twitter.com/" target="_blank" className="m-2">
                <img
                  src="src/assets/Images/logo-twitter-sur-fond-noir.png"
                  alt="Logo de twitter."
                  width={24}
                />
              </a>
              <a
                href="https://fr.linkedin.com/"
                target="_blank"
                className="m-2"
              >
                <img
                  src="src/assets/Images/logo-linkedin.png"
                  alt="Logo de linkedin"
                  width={24}
                />
              </a>
            </div>
          </div>
        </div>
        {/* COL 2 ----------------------------------------------------------*/}

        <div className="col mb-3 text-dark ">
          <h5 style={{ fontWeight: "600" }}>Liens utiles</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2 ">
              <Link to="/home" className="nav-link  p-0 text-muted link-dark">
                <img
                  src="src/assets/Images/fleche-droite.png"
                  alt="flèche-droite."
                  width={18}
                />
                Accueil
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/home" className="nav-link  p-0 text-muted link-dark">
                <img
                  src="src/assets/Images/fleche-droite.png"
                  alt="flèche-droite."
                  width={18}
                />
                À propos
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link
                to="/assistance"
                className="nav-link  p-0 text-muted link-dark"
              >
                <img
                  src="src/assets/Images/fleche-droite.png"
                  alt="flèche-droite."
                  width={18}
                />
                Services
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link
                to="/contact"
                className="nav-link  p-0 text-muted link-dark"
              >
                <img
                  src="src/assets/Images/fleche-droite.png"
                  alt="flèche-droite."
                  width={18}
                />
                Me contacter
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link
                to="/mentions"
                className="nav-link  p-0 text-muted link-dark"
              >
                <img
                  src="src/assets/Images/fleche-droite.png"
                  alt="flèche-droite."
                  width={18}
                />
                Mentions légales
              </Link>
            </li>
          </ul>
        </div>
        {/* COL 3 ----------------------------------------------------------*/}

        <div className="col mb-3">
          <h5 style={{ fontWeight: "600" }}>Mes dernières réalisations</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link
                to="/portfolio"
                className="nav-link  p-0 text-muted link-dark"
              >
                <img
                  src="src/assets/Images/fleche-droite.png"
                  alt="flèche-droite."
                  width={18}
                />
                Fresh food
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link
                to="/portfolio"
                className="nav-link  p-0 text-muted link-dark"
              >
                <img
                  src="src/assets/Images/fleche-droite.png"
                  alt="flèche-droite."
                  width={18}
                />
                Restaurant Akira
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link
                to="/portfolio"
                className="nav-link  p-0 text-muted link-dark"
              >
                <img
                  src="src/assets/Images/fleche-droite.png"
                  alt="flèche-droite."
                  width={18}
                />
                Espace bien-être
              </Link>
            </li>
          </ul>
        </div>
        {/* COL 4 ----------------------------------------------------------*/}

        <div className="col mb-3">
          <h5 style={{ fontWeight: "600" }}>Mes derniers articles</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link to="/blog" className="nav-link  p-0 text-muted link-dark">
                <img
                  src="src/assets/Images/fleche-droite.png"
                  alt="flèche-droite."
                  width={18}
                />
                Coder son site en HTML/CSS
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/blog" className="nav-link  p-0 text-muted link-dark">
                <img
                  src="src/assets/Images/fleche-droite.png"
                  alt="flèche-droite."
                  width={18}
                />
                Vendre ses pour sur le web
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/blog" className="nav-link  p-0 text-muted link-dark">
                <img
                  src="src/assets/Images/fleche-droite.png"
                  alt="flèche-droite."
                  width={18}
                />
                Se positionner sur Google
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="row row-cols-1  pb-4">
        <div className="nav-link text-center text-light bg-dark col  p-3 text-muted">
          <a className="nav-link text-center text-light bg-dark" href="#top">
            &copy; Designed by John Doe
          </a>
        </div>
      </div>
    </footer>
  );
}

export default App;
