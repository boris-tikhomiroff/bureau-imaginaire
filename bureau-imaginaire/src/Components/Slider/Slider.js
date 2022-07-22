import * as React from "react";


import un from "../../img/projet1/un.jpeg"
import deux from "../../img/projet1/deux.jpeg"
import trois from "../../img/projet1/trois.jpeg"
import quatre from "../../img/projet1/quatre.jpeg"

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import './Slider.css'

export function Slider(){

    const data = [
        {
            id:1,
            image: un
        },
        {
            id:2,
            image: deux
        },
        {
            id:3,
            image: trois
        },
        {
            id: 4,
            image: quatre
        }

    ]

    return (
        <Carousel 
            showIndicators={false}
        >
            {data.map (slide =>(
                <div key={slide.id}>
                    <img src={slide.image} alt=""></img>
                </div>
            ))}
        </Carousel>
    )
}