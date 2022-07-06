import * as React from "react";
import {Link} from "react-router-dom";
import image from "public/logo_carre_BI.png"

export function Header (){
    return (
        <div>
            <ul>
                <li><Link to="/NosRealisations">Nos réalisations</Link></li>
                <li><Link to="/APropos">Qui sommes-nous?</Link></li>
                <li><Link to="/"><img src={image} alt="Logo"></img></Link></li>
                <li><Link to="/TravaillerEnsemble">Travailler ensemble</Link></li>
                <li><Link to="/Devis">Devis</Link></li>
            </ul>
        </div>
    )
}