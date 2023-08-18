import React from 'react'
import { useNavigate } from 'react-router-dom';

function HomePage() {

    const navigate = useNavigate();

    const navservicepro = async (e) => {
        e.preventDefault();
        navigate(`/wildanimals`);
    }


    return (


        <div>

            <div>
                <img class="homeimg" src="/imgs/homeimg.jpg" ></img>
            </div>

            <div id="headdescription">
                <h3 id ="descripHead">Capturing Wilderness: A Visual Odyssey into the Heart of Wildlife </h3>
                Welcome to our mesmerizing world of wildlife photography! Embark on an extraordinary visual journey through the untamed beauty of nature. Our web page is a sanctuary for those who seek to witness the magic of the animal kingdom through the lens of talented photographers.
                Immerse yourself in a collection of awe-inspiring snapshots capturing the grace, power, and diversity of creatures both great and small. From the majestic roamers of the savannah to the elusive inhabitants of dense rainforests, our wildlife photography showcases the raw essence of life in its purest form.
                Each photograph tells a unique story, frozen in time, waiting for you to unravel its mysteries. Whether it's the piercing gaze of a predator, the tender moment between a parent and its offspring, or the intricate patterns of nature's designs, our images provide a window into the intricate dance of survival and beauty.
            </div>

            <div class="buttonDivOut">
                <div class="buttonDiv">

                    <div class="container">
                        <button onClick={navservicepro} class="buttonstyle">Visit Gallery</button> 
                    </div>

                </div>
            </div>

        </div>
    )

}

export default HomePage;