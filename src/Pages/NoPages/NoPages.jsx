import { Link } from "react-router-dom";
import "./NoPagesStyle.css";

function NoPage() {
  return (
    <>
      <main>
        <section id="NoPages">
          <div className="NoPagesContainer">
            <h1>Error 404 : Not found</h1>
            <Link to="/home" className="nav-link  NoPagesBtn">
              Back to Home
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default NoPage;
