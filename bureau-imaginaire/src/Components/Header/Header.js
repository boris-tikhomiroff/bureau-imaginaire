import * as React from "react";
import {Link} from "react-router-dom";
import image from "../../img/logo_carre_BI_nav.png";
import './Header.css';

export function Header (){
    return (
        
        <header>
            <nav>
                <ul>
                    <li><Link to="/NosRealisations">Nos réalisations</Link></li>
                    <li><Link to="/APropos">Qui sommes-nous?</Link></li>
                    <li><Link to="/"><img src={image} alt="Logo" width="170"></img></Link></li>
                    <li><Link to="/TravaillerEnsemble">Travailler ensemble</Link></li>
                    <li><Link to="/FabriqueProjet">La Fabrique à Projets</Link></li>
                </ul>
            </nav>
        </header>
    )
}

