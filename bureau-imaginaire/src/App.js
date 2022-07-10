import * as React from "react";
import { Routes, Route} from "react-router-dom";
import {Home} from "./Pages/Home/Home.js";
import {FabriqueProjet} from "./Pages/FabriqueProjet/FabriqueProjet.js";
import {TravaillerEnsemble} from "./Pages/TravaillerEnsemble/TravaillerEnsemble.js";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FabriqueProjet" element={<FabriqueProjet />} />
        <Route path="/TravaillerEnsemble" element={<TravaillerEnsemble />} />
      </Routes>
    </div>
  );
}



export default App;
