import * as React from "react";



import './TravaillerEnsemble.css'

export function TravaillerEnsemble(){
    return (
        <div>
            <main>
            <h1 className="titre">Travailler Ensemble</h1>

            <article className="center containerEnsemble">

                <p className="desc">
                    D’une manière globale, nous travaillons en transparence sur l’avancée du projet et soumettons à votre validation 
                    l’ensemble des éléments structurants ( moodboard, scénario, game design… )
                </p>

            </article>

            <section className="grid">

                {/*Column 1 */}

                <article className="card"></article>
                <article className="card">
                    <p>1</p>
                </article>
                <article className="card">
                    <p>Réunion d’échange pour définir votre projet et votre contexte</p>
                </article>


                {/*Column 2 */}

                <div className="card"></div>
                <article className="card">
                    <p>Présentation du devis, d’un rétroplanning</p>
                </article>
                <article className="card">
                    <p>2</p>
                </article>


                {/*Column 3 */}

                <article className="card"></article>
                <article className="card">
                    <p>3</p>
                </article>
                <article className="card">
                    <p>Points d’étapes et de validations</p>
                </article>


                {/*Column 4 */}

                <article className="card"></article>
                <article className="card">
                    <p>Livraison du produit</p>
                </article>
                <article className="card">
                    <p>4</p>
                </article>


                {/*Column 5 */}
                
                <article className="card"></article>
                <article className="card">
                    <p>Retour d’expérience sur la base de mini enquête de satisfaction</p>
                </article>
                <article className="card">
                    <p>5</p>
                </article>

                
                
            </section>
            </main>
        </div>
    )
}