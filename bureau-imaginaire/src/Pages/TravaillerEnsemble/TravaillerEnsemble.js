import * as React from "react";

import {Header} from "../../Components/Header/Header.js"
import {Footer} from "../../Components/Footer/Footer.js"

import './TravaillerEnsemble.css'

export function TravaillerEnsemble(){
    return (
        <div>
            <Header />

                <h1 className="titre">Travailler Ensemble</h1>

                <div className="flex containerEnsemble">

                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
                        type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
                        essentially unchanged.
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its 
                        layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to 
                        using 'Content here, content here', making it look like readable English.
                    </p>

                </div>

                <section className="sectionConstructionProjet">
                    <ol>
                        <li>Réunion d’échange pour définir votre projet et votre contexte.</li>
                        <li>Présentation du devis, d’un rétroplanning.</li>
                        <li>Points d’étapes et de validations.</li>
                        <li>Livraison du produit</li>
                        <li>Retour d’expérience sur la base de mini enquête de satifaction </li>
                    </ol>
                </section>

            <Footer />

        </div>
    )
}