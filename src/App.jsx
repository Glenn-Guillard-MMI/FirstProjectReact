import React from "react";
import Bande from "./banderoleGustaveiffel";
import "./App.css";

function App() {
  return (
    <div>
      <Bande />
      <main>
        <h1>Connexion</h1>
        <label htmlFor="email">E-mail :</label>
        <input id="email" name="email" type="email" />
        <label htmlFor="password">Mot de passe :</label>
        <input id="password" name="password" type="password" />
        <div id="btn">
          <a href="sqdsq">Page inscription</a>
          <a>Se connecter</a>
        </div>
      </main>
    </div>
  );
}

export default App;
