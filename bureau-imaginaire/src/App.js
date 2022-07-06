import * as React from "react";
import { Routes, Route} from "react-router-dom";
import {Home} from "./Pages/Home.js"

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}



export default App;
