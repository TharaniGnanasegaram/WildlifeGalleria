
/*
    Created by Tharani Gnanasegaram on 16/08/2023
*/

import React from 'react'
import { Route, Routes } from "react-router-dom";
import AboutUs from './About Us';
import HomePage from "./HomePage";
import Wildanimal from "./Wildanimalsgallery";
import Wildplants from './RainforestGallery';


function PageNavRoutes() {
    return(
       <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/wildanimals' element={<Wildanimal />} />
            <Route path='/rainforest' element={<Wildplants />} />            
            <Route path='/aboutus' element={<AboutUs />} />
       </Routes>
        
    )
}

export default PageNavRoutes;