import * as React from "react";
import { Routes, Route} from "react-router-dom";
import {Header} from "./Components/Header/Header.js"
import {Footer} from "./Components/Footer/Footer.js"
import {Home} from "./Pages/Home/Home.js";
import {FabriqueProjet} from "./Pages/FabriqueProjet/FabriqueProjet.js";
import {TravaillerEnsemble} from "./Pages/TravaillerEnsemble/TravaillerEnsemble.js";
import NosRealisations from "./Pages/NosRealisations/NosRealisations.js";

function App() {

  return (
    <div className="App">
    <Header />
        <Routes>
          <Route path="/" element={<Home />} title="Home"/>
          <Route path="/FabriqueProjet" element={<FabriqueProjet />} />
          <Route path="/TravaillerEnsemble" element={<TravaillerEnsemble />} />
          <Route path="/NosRealisations" element={<NosRealisations />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
