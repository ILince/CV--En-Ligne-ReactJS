import React, { useState, useEffect } from "react";


function App() {
  // Affichage du profil Git dans l'interface navigateur ----------

  const getUser = async () => {
    const res = await fetch("https://api.github.com/users/github-john-doe");
    const json = await res.json();
    console.log(json);
  };

  useEffect(() => {
    getUser();
  }),
    [];
}

export default App;
