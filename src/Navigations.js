
/* 
    Created by Tharani Gnanasegaram on 16/08/2023
*/

import React from 'react'
import { Link, BrowserRouter } from "react-router-dom";
import PageRoutes from "./PageNavRoutes";


function Navigations() {

    return (
        <BrowserRouter>
            <div>

                <div class="titleHeadingStyle">
                    <Link to="/" > <img id="logoimg" src="/imgs/logo.png" ></img> </Link>
                </div>

                <nav class="nav">

                    <ul class="nav_ul">
                        <li> <Link to="/" class="nav_ul_link" >Home</Link> </li>
                        <li> <Link to="/wildanimals" class="nav_ul_link" >Wild Animals Gallery</Link> </li>
                        <li> <Link to="/rainforest" class="nav_ul_link" >Rainforest Gallery</Link> </li>
                        <li> <Link to="/aboutus" class="nav_ul_link" >About Us</Link> </li>
                    </ul>

                </nav>

                <div id="contentshome">
                    <hr />
                </div>

                <PageRoutes />

            </div>
        </BrowserRouter>

    )
}

export default Navigations;