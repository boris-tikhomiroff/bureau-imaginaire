import * as React from "react";

import {Slider} from "../../Components/Slider/Slider.js"

import './NosRealisations.css';

export default function NosRealisations(){
    return (
        <div>
            <main>
                <section className="nos-realisations-section">

                    <article>
                        <h1 className="titre">Nos réalisations</h1>
                        <p className="center desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                            type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                            *remaining essentially unchanged. 
                        </p>
                    </article>

                    <article class="projet projet1"></article>
                    <article class="projet projet2"></article>

                </section>
                <Slider />
            </main>
        </div>
    )
}