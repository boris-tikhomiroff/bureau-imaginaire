import * as React from "react";

import {Header} from "../../Components/Header/Header.js"
import {Footer} from "../../Components/Footer/Footer.js"

import FormFabriqueProjetComponent from "../../Components/FormFabriqueProjet/FormFabriqueProjet.js"

export function FabriqueProjet() {
    return (
        <div>
            <Header /> 
                <FormFabriqueProjetComponent />
            <Footer />
        </div>
    )
}