import * as React from "react";
import {Link} from "react-router-dom";
import image from "../../img/logo_carre_BI.png";
import './Footer.css';

export function Footer (){
    return (
        
        <footer>
            <ul>
                <li><Link to="/NosRealisations">Nos réalisations</Link></li>
                <li><Link to="/APropos">Qui sommes-nous?</Link></li>
                <li><Link to="/TravaillerEnsemble">Travailler ensemble</Link></li>
                <li><Link to="/Devis">Devis</Link></li>
            </ul>
            <div>
                {/* <li><Link to="/"><img src={image} alt="Logo" width="200"></img></Link></li> */}
            </div>
        </footer>
    )
}