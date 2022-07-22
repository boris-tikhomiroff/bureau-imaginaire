import * as React from "react";

import './Home.css';

import Logo from "../../Components/Logo.js";


export function Home() {
    return (
      <div>
        <main>

          <Logo />

          <div className="container container-presta">
            <h2 className="sous-titre">Ce que nous proposons</h2>
            <ol>
              <li>Escape Game</li>
              <li>Jeu de piste scénarisé</li>
              <li>Jeu d'enquête</li>
              <li>Coaching scénarisé</li>
              <li>Jeu de société personnalisé</li>
            </ol>

            <div className="callAction">
              <p>Envie de créer votre aventure ? </p>
              <button>Travailler ensemble</button>
            </div>

            <h3 className="marquise">Et toutes sortes de solutions ludiques adaptées à votre contexte !</h3>
          </div>

          <div className="section-realisation-home">
            <h2 className="sous-titre">Nos réalisations</h2>

            <div>
              <h2>Myrtille</h2>
              <p>un scénario inspiré d’Alice au Pays des Merveilles, où les joueurs, aidés par le FBI (Fabuleux Bureau Imaginaire) doivent récolter 
              et répondre aux énigmes laissées dans les locaux de la bibliothèque par Myrtille, une ancienne usagère recherchée pour trafic de drogue.</p>
              <button>Découvrir</button>
            </div>

            <div>
              <h2>Le voyageur</h2>
              <p>L’histoire d’un mystérieux employé de la médiathèque qui cherche à retrouver la mémoire auprès des joueurs. Inspiré de Docteur Who, 
              ce jeu invite les joueurs à découvrir les différents espaces de la médiathèque ainsi que les technologies proposées par le Fab Lab.</p>
              <button>Découvrir</button>
            </div>

          </div>

          <div className="container-enjeux">
            <h3>Bureau Imaginaire</h3>
            <ol>
                <li>Softskills</li>
                <li>Agilité</li>
                <li>Créativité</li>
                <li>Communication entre services</li>
                <li>Compétences managériales</li>
                <li>Potentiels évolutifs</li>
                <li>Adaptable à vos besoins</li>
            </ol>
          </div>

        </main>
      </div>
    )
}



