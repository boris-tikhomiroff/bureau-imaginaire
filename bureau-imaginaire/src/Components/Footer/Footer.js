import * as React from "react";
import {Link} from "react-router-dom";
import image from "../../img/logo_carre_BI_nav.png";
import './Footer.css';

export function Footer (){
    return (
        
        <footer>
            
            <ul>
                <li><Link to="/NosRealisations">Nos réalisations</Link></li>
                <li><Link to="/APropos">Qui sommes-nous?</Link></li>
                <li><Link to="/TravaillerEnsemble">Travailler ensemble</Link></li>
                <li><Link to="/FabriqueProjet">La Fabrique à Projets</Link></li>
            </ul>
            <div>
                <li className="footer-logo"><Link to="/"><img src={image} alt="Logo" width="190"></img></Link></li>
            </div>
            <article className="footer-bottom">
                <p>Bureau-imaginaire © 2021-2022</p>
            </article>
        </footer>
    )
}

