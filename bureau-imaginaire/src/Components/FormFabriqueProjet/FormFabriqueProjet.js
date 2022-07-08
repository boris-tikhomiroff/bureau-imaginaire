import * as React from "react";

import './FormFabriqueProjet.css'

export default function FormFabriqueProjetComponent(){
    return (
        <div className="form-container-fabrique">

            <h2 className="title">Construisez votre projet depuis notre Fabrique :</h2>

            <form className="form-fabrique">

            {/*------------------------------DUREE--------------------------- */}

                <fieldset className="form-field field-duree">

                    <legend>Durée</legend>
                    
                        <div>
                            <input type="radio" name="duree" id="1h" value="1h"/>
                            <label for="1h">1 heure</label>
                        </div>

                        <div>
                            <input type="radio" name="duree" id="2h" value="2h"/>
                            <label for="2h">2 heures</label>
                        </div>  

                        <div>
                            <input type="radio" name="duree" id="3h" value="3h"/>
                            <label for="3h">3 heures</label>
                        </div> 

                        <div>
                            <input type="radio" name="duree" id="jour" value="jour"/>
                            <label for="jour">Une journée</label>
                        </div> 

                        <div>
                            <input type="radio" name="duree" id="autre"  value="autre"/>
                            <label for="autre">Autre</label>
                        </div> 
                    
                </fieldset>

                {/*------------------------------Nmbr de personnes--------------------------- */}

                <fieldset className="form-field field-nbr-participant">

                    <legend>Nombre de participants</legend>
                    
                        <div>
                            <input type="radio" name="nombre" id="1a3" value="1a3"/>
                            <label for="1a3">1 à 3</label>
                        </div>

                        <div>
                            <input type="radio" name="nombre" id="4a6" value="4a6"/>
                            <label for="4a6">4 à 6   </label>
                        </div>  

                        <div>
                            <input type="radio" name="nombre" id="7a12" value="7a12"/>
                            <label for="7a12">7 à 12</label>
                        </div> 

                        <div>
                            <input type="radio" name="nombre" id="13a25" value="13a25"/>
                            <label for="13a25">13 à 25</label>
                        </div> 

                        <div>
                            <input type="radio" name="nombre" id="+25"  value="+25"/>
                            <label for="+25">+ de 25</label>
                        </div> 
                    
                </fieldset>

                
                {/*------------------------------Nmbr de session--------------------------- */}

                <fieldset className="form-field field-nbr-session">

                    <legend>Nombre de session</legend>
                    
                        <div>
                            <input type="radio" name="session" id="1session" value="1session"/>
                            <label for="1session">Une seule session</label>
                        </div>

                        <div>
                            <input type="radio" name="session" id="XsessionJour" value="XsessionJour"/>
                            <label for="XsessionJour">Plusieurs sessions dans la même journée</label>
                        </div>  

                        <div>
                            <input type="radio" name="session" id="XsessionSemaine" value="XsessionSemaine"/>
                            <label for="XsessionSemaine">Plusieurs sessions dans la même semaine</label>
                        </div> 

                        <div>
                            <input type="radio" name="session" id="XsessionAnne" value="XsessionAnne"/>
                            <label for="XsessionAnne">Plusieurs sessions dans l'année</label>
                        </div> 
                    
                </fieldset>

            </form>
        </div>
    )
}