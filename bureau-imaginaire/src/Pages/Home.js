import * as React from "react";
import {Header} from "../Components/Header/Header.js"
import {Link} from "react-router-dom";

export function Home() {
    return (
      <div>
        <Header />
        <Link to="/about">About</Link>
      </div>
    )
}

