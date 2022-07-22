import * as React from "react";
import {useState} from "react";
import {Link} from "react-router-dom";
import image from "../../img/logo_carre_BI_nav.png";
import './Header.css';

export function Header (){

    const [showLinks, setShowLinks] = useState(false)
    
    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }

    return (
        
        <header>


            <nav className={`mobile-menu-section ${showLinks ? "show-nav" : "hide-nav"}`} >   
                <Link to="/"><img src={image} alt="Logo" width="130"></img></Link>
                
                <ul className="mobile-menu-links">
                    <li><Link to="/NosRealisations" onClick={handleShowLinks}>Nos réalisations</Link></li>
                    <li><Link to="/APropos" onClick={handleShowLinks}>Qui sommes-nous?</Link></li>
                    <li><Link to="/TravaillerEnsemble" onClick={handleShowLinks}>Travailler ensemble</Link></li>
                    <li><Link to="/FabriqueProjet" onClick={handleShowLinks}>La Fabrique à Projets</Link></li>
                </ul>
                <button className="mobile-menu-burger" onClick={handleShowLinks}>
                    <span className="burger-bar"></span>
                </button>
            </nav>


            <nav className="desktop-menu">
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

