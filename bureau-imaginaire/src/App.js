import * as React from "react";
import { Routes, Route} from "react-router-dom";
import {Home} from "./Pages/Home/Home.js";
import {FabriqueProjet} from "./Pages/FabriqueProjet/FabriqueProjet.js";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FabriqueProjet" element={<FabriqueProjet />} />
      </Routes>
    </div>
  );
}



export default App;
