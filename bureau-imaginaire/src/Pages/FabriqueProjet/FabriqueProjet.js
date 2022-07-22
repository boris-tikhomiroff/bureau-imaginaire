import * as React from "react";

import FormFabriqueProjetComponent from "../../Components/FormFabriqueProjet/FormFabriqueProjet.js"

export function FabriqueProjet() {
    return (
        <div>
            <main>
                <h1 className="titre">La fabrique à projet</h1>
                <FormFabriqueProjetComponent />
            </main>
        </div>
    )
}