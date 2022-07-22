import * as React from "react";

import './FormFabriqueProjet.css'

export default function FormFabriqueProjetComponent(){


    return (
        <div className="form-container-fabrique">

            <h2 className="sous-titre">Construisez votre projet depuis notre Fabrique :</h2>

            <form className="form-fabrique">

            {/*------------------------------DUREE--------------------------- */}

                <fieldset className="form-field field-duree">

                    <legend>Durée</legend>
                    
                        <div>
                            <input type="radio" name="duree" id="1h" value="1h"/>
                            <label htmlFor="1h">1 heure</label>
                        </div>

                        <div>
                            <input type="radio" name="duree" id="2h" value="2h"/>
                            <label htmlFor="2h">2 heures</label>
                        </div>  

                        <div>
                            <input type="radio" name="duree" id="3h" value="3h"/>
                            <label htmlFor="3h">3 heures</label>
                        </div> 

                        <div>
                            <input type="radio" name="duree" id="jour" value="jour"/>
                            <label htmlFor="jour">Une journée</label>
                        </div> 

                        <div>
                            <input type="radio" name="duree" id="autreDuree"  value="autreDuree"/>
                            <label htmlFor="autreDuree">Autre</label>
                        </div> 
                    
                </fieldset>

                {/*------------------------------Nmbr de personnes--------------------------- */}

                <fieldset className="form-field field-nbr-participant">

                    <legend>Nombre de participants</legend>
                    
                        <div>
                            <input type="radio" name="nombre" id="1a3" value="1a3"/>
                            <label htmlFor="1a3">1 à 3</label>
                        </div>

                        <div>
                            <input type="radio" name="nombre" id="4a6" value="4a6"/>
                            <label htmlFor="4a6">4 à 6   </label>
                        </div>  

                        <div>
                            <input type="radio" name="nombre" id="7a12" value="7a12"/>
                            <label htmlFor="7a12">7 à 12</label>
                        </div> 

                        <div>
                            <input type="radio" name="nombre" id="13a25" value="13a25"/>
                            <label htmlFor="13a25">13 à 25</label>
                        </div> 

                        <div>
                            <input type="radio" name="nombre" id="+25"  value="+25"/>
                            <label htmlFor="+25">+ de 25</label>
                        </div> 
                    
                </fieldset>

                
                {/*------------------------------Nmbr de session--------------------------- */}

                <fieldset className="form-field field-nbr-session">

                    <legend>Nombre de session</legend>
                    
                        <div>
                            <label htmlFor="1session">Une seule session</label>
                            <input type="radio" name="session" id="1session" value="1session"/>
                        </div>

                        <div>
                            <label htmlFor="XsessionJour">Plusieurs sessions dans la même journée</label>
                            <input type="radio" name="session" id="XsessionJour" value="XsessionJour"/>
                        </div>  

                        <div>
                            <label htmlFor="XsessionSemaine">Plusieurs sessions dans la même semaine</label>
                            <input type="radio" name="session" id="XsessionSemaine" value="XsessionSemaine"/>
                        </div> 

                        <div>
                            <label htmlFor="XsessionAnne">Plusieurs sessions dans l'année</label>
                            <input type="radio" name="session" id="XsessionAnne" value="XsessionAnne"/>
                        </div> 
                    
                </fieldset>

                 {/*------------------------------Type de jeu--------------------------- */}

                 <fieldset className="form-field field-type-jeu">

                    <legend>Type de jeu</legend>

                    <div>
                        <label htmlFor="escapeGame">Escape Game</label>
                        <input type="radio" name="type" id="escapeGame" value="escapeGame"/>
                    </div>

                    <div>
                        <label htmlFor="jeuDenquete">Jeu d'enquête</label>
                        <input type="radio" name="type" id="jeuDenquete" value="jeuDenquete"/>      
                    </div>  

                    <div>
                        <label htmlFor="coachingScenarise">Coaching scénarisé</label>
                        <input type="radio" name="type" id="coachingScenarise" value="coachingScenarise"/>                       
                    </div> 

                    <div>
                        <label htmlFor="jeuPisteScenarise">Jeu de piste scénarisé</label>
                        <input type="radio" name="type" id="jeuPisteScenarise" value="jeuPisteScenarise"/>           
                    </div> 

                    <div>
                        <label htmlFor="jeuSocietePersonnalise">Jeu de société personnalisé</label>
                        <input type="radio" name="type" id="jeuSocietePersonnalise" value="jeuSocietePersonnalise"/>   
                    </div> 

                    <div>
                        <label htmlFor="autreJeu">Autre</label>
                        <input type="radio" name="type" id="autreJeu" value="autreJeu"/> 
                    </div> 

                </fieldset>

                {/*------------------------------DIFFICULTE--------------------------- */}

                <fieldset className="form-field field-difficulte">

                    <legend>Difficulté</legend>
                    
                        <div>
                            <input type="radio" name="difficulte" id="grandPublic" value="grandPublic"/>
                            <label htmlFor="grandPublic">Grand public</label>
                        </div>

                        <div>
                            <input type="radio" name="difficulte" id="joueursHabitue" value="joueursHabitue"/>
                            <label htmlFor="joueursHabitue">Joueurs habitués</label>
                        </div>  

                        <div>
                            <input type="radio" name="difficulte" id="specialistes" value="specialistes"/>
                            <label htmlFor="specialistes">Spécialistes du sujet / thème</label>
                        </div> 
                    
                </fieldset>

                {/*------------------------------HANDICAP--------------------------- */}

                <fieldset className="form-field field-handicap">

                    <legend>Un handicap à prendre en compte ?</legend>
                    
                        <div>
                            <label htmlFor="handicapP">Oui : physique</label>
                            <input type="radio" name="handicap" id="handicapP" value="handicapP"/>                       
                        </div>

                        <div>
                            <label htmlFor="handicapM">Oui : mental</label>
                            <input type="radio" name="handicap" id="handicapM" value="handicapM"/>                    
                        </div>  

                        <div>
                            <label htmlFor="handicapPM">Oui : physique & mental</label>
                            <input type="radio" name="handicap" id="handicapPM" value="handicapPM"/>                     
                        </div> 

                        <div>
                            <label htmlFor="HandicapNull">Aucun handicap</label>
                            <input type="radio" name="handicap" id="HandicapNull" value="HandicapNull"/>                     
                        </div> 
                    
                </fieldset>

                 {/*------------------------------BUDGET--------------------------- */}

                 <fieldset className="form-field field-budget">

                    <legend>Budget alloué</legend>

                    <div>
                        <label htmlFor="approximatif">Budget approximatif</label>
                        <input type="radio" name="budget" id="approximatif" value="approximatif"/>                 
                    </div>

                    <div>
                        <label htmlFor="ferme">Budget ferme</label>
                        <input type="radio" name="budget" id="ferme" value="ferme"/>                 
                    </div>  

                    <div>
                        <label htmlFor="sansBudget">Pas de notion pour le budget</label>
                        <input type="radio" name="budget" id="sansBudget" value="sansBudget"/>                 
                    </div> 

                </fieldset>

                {/*------------------------------Lieu--------------------------- */}

                <fieldset className="form-field field-lieu">

                    <legend>Lieu</legend>

                    <div>
                        <label htmlFor="entreprise">Dans mon entreprise</label>
                        <input type="radio" name="lieu" id="entreprise" value="entreprise"/>
                    </div>

                    <div>
                        <label htmlFor="lieuPrivatiser">Dans un lieu à privatiser</label>
                        <input type="radio" name="lieu" id="lieuPrivatiser" value="lieuPrivatiser"/>                
                    </div>  

                    <div>
                        <label htmlFor="voiePublique">Sur la voie publique</label>
                        <input type="radio" name="lieu" id="voiePublique" value="voiePublique"/> 
                    </div> 

                    <div>
                        <label htmlFor="autreLieu">Autre</label>
                        <input type="radio" name="lieu" id="autreLieu" value="autreLieu"/>               
                    </div> 

                </fieldset>

                {/*------------------------------ZONE GEOGRAPHIQUE--------------------------- */}

                <fieldset className="form-field field-zone-geographique">

                    <legend>Zone géographique</legend>

                    <div>
                        <label htmlFor="paysLoire">Pays de la Loire</label>
                        <input type="radio" name="zone" id="paysLoire" value="paysLoire"/>
                    </div>

                    <div>
                        <label htmlFor="ileDeFrance">Ile de France</label>
                        <input type="radio" name="zone" id="ileDeFrance" value="ileDeFrance"/>                       
                    </div>  

                    <div>
                        <label htmlFor="bretagne">Bretagne</label>
                        <input type="radio" name="zone" id="bretagne" value="bretagne"/>                     
                    </div> 

                    <div>
                        <label htmlFor="ValDeLoire">Centre Val-de-Loire</label>
                        <input type="radio" name="zone" id="ValDeLoire" value="ValDeLoire"/>                 
                    </div> 

                    <div>
                        <label htmlFor="normandie">Normandie</label>
                        <input type="radio" name="zone" id="normandie" value="normandie"/>                 
                    </div> 

                    <div>
                        <label htmlFor="autreZone">Autre</label>
                        <input type="radio" name="zone" id="autreZone" value="autreZone"/>                 
                    </div> 

                </fieldset>

                {/*------------------------------ENJEUX OBJECTIFS--------------------------- */}

                <fieldset className="form-field field-enjeux">

                    <legend>Enjeux & objectifs</legend>

                    <div>
                        <label htmlFor="teamBuilding">TeamBuilding</label>
                        <input type="checkbox" name="enjeux" id="teamBuilding" value="teamBuilding"/>
                    </div>

                    <div>
                        <label htmlFor="profilEvolutif">Identifier des profils évolutifs</label>
                        <input type="checkbox" name="enjeux" id="profilEvolutif" value="profilEvolutif"/>                       
                    </div>  

                    <div>
                        <label htmlFor="communication">Communication</label>
                        <input type="checkbox" name="enjeux" id="communication" value="communication"/>                     
                    </div> 

                    <div>
                        <label htmlFor="softskills">Softskills</label>
                        <input type="checkbox" name="enjeux" id="softskills" value="softskills"/>                 
                    </div> 

                    <div>
                        <label htmlFor="creativiteAgilite">Créativité et Agilité</label>
                        <input type="checkbox" name="enjeux" id="creativiteAgilite" value="creativiteAgilite"/>                 
                    </div> 

                    <div>
                        <label htmlFor="autreEnjeux">Autre</label>
                        <input type="checkbox" name="enjeux" id="autreEnjeux" value="autreEnjeux"/>                 
                    </div> 

                </fieldset>

                {/*------------------------------THEME--------------------------- */}
            <div className="container-themeAnim">
                <fieldset className="form-field field-theme">

                    <legend>Choix du thème / sujet</legend>

                    <div>
                        <label htmlFor="themeImpose">J'ai un thème imposé</label>
                        <input type="radio" name="theme" id="themeImpose" value="themeImpose"/>   
                    </div>

                    <div>
                        <label htmlFor="sansTheme">Le thème est proposé par le Bureau Imaginaire</label>
                        <input type="radio" name="theme" id="sansTheme" value="sansTheme"/> 
                    </div>  

                </fieldset>

                {/*------------------------------ANIMATION--------------------------- */}

                <fieldset className="form-field field-animation">

                    <legend>Méthode d'animation</legend>

                    <div>
                        <label htmlFor="animAutonome">Jeu animé de manière autonome</label>
                        <input type="radio" name="animation" id="animAutonome" value="animAutonome"/>   
                    </div>

                    <div>
                        <label htmlFor="animBureau">Jeu animé par le Bureau Imaginaire</label>
                        <input type="radio" name="animation" id="animBureau" value="animBureau"/> 
                    </div>  

                </fieldset>
            </div>
                {/*------------------------------CONTENU NUMERIQUE--------------------------- */}

                <fieldset className="form-field field-contenu-numerique">

                    <legend>Contenu numérique</legend>

                    <div>
                        <label htmlFor="avecOutil">Je souhaite éviter les outils numériques</label>
                        <input type="radio" name="contenu" id="avecOutil" value="avecOutil"/>   
                    </div>

                    <div>
                        <label htmlFor="sansOutil">Je souhaite que le jeu intègre des outils numériques</label>
                        <input type="radio" name="contenu" id="sansOutil" value="sansOutil"/> 
                    </div>  

                    <div>
                        <label htmlFor="sansAvis">Je n'ai pas d'avis</label>
                        <input type="radio" name="contenu" id="sansAvis" value="sansAvis"/> 
                    </div>  

                </fieldset>


            </form>

            <div>
                <h2 className="sous-titre">Récapitulatif de votre projet : </h2>
                <ol>

                </ol>
            </div>
            <button type="button" className="envoiDevis">Envoyer votre projet</button>
        </div>
    )
}