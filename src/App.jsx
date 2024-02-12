import UserProfil from "./Components/UserProfil";

import "./App.css";

import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Assistance from "./Pages/Assistance/Assistance";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import Mentions from "./Pages/Mentions/Mentions";
import NoPage from "./Pages/NoPages/NoPages";

function App() {
  return (
    <>
      <UserProfil>
        {/* Affichage du profil Git dans l'interface navigateur */}
      </UserProfil>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/assistance" element={<Assistance />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/mentions" element={<Mentions />}></Route>
        <Route path="*" element={<NoPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
