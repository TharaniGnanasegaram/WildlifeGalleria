/*
    Created by Tharani Gnanasegaram on 16/08/2023
*/

import React from 'react'


function AboutUs() {

    return (


        <div>

            <div>
                <img class="aboutimg" src="imgs/about.jpg" ></img>
            </div>

            <div id="headdescription">
                <h3 id="descripHead">Founded by passionate nature enthusiasts, our wildlife photography journey is a celebration of Earth's untamed wonders, frozen in time for all to marvel and protect</h3>
                Our journey in wildlife photography began with a deep-rooted love for the natural world. It all started a decade ago when our founder, [Founder's Name], embarked on a solo expedition into the heart of untouched wilderness. Armed with a camera and a relentless curiosity, they ventured into the untamed landscapes that few had dared to explore.

Amidst rustling leaves and echoing calls, [Founder's Name] discovered the art of capturing more than just images – they captured the essence of life itself. Each click of the shutter was a testament to the intricate balance of ecosystems, the raw power of predators, and the fragile grace of creatures often hidden from the human eye.

Today, our team of dedicated photographers, naturalists, and storytellers continue to traverse the globe, seeking out fleeting moments of wonder that deserve to be etched into eternity. Through our lens, we not only freeze time but also kindle a fire of reverence for the wild. Join us as we unveil the untold stories, the hidden dramas, and the sheer poetry of nature through our wildlife photography.
            </div>

            <div class="teamdiv">
                <h3>Our Team</h3>
            </div>

            <div class="photographers">
                <div>
                    <img class="photographer" src="/imgs/ph1.jpg" ></img>
                   <p class="names">Dhruva Princekumar Patel </p> 
                </div>

                <div>
                    <img class="photographer" src="/imgs/ph2.jpg" ></img>
                    <p class="names">Tharani Gnanasegaram</p>
                </div>

                <div>
                    <img class="photographer" src="/imgs/ph3.jpg" ></img>
                    <p class="names">Bibin John Jacob</p>
                </div>

                <div>
                    <img class="photographer" src="/imgs/ph4.jpg" ></img>
                   <p class="names">Alex Jose Lopez Piraquive </p> 
                </div>

            </div>

        </div>
    )

}

export default AboutUs;