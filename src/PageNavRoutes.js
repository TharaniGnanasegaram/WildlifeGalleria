
/*
    Created by Tharani Gnanasegaram on 16/08/2023
*/

import React from 'react'
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";


function PageNavRoutes() {
    return(
       <Routes>
            <Route path='/' element={<HomePage />} />

       </Routes>
        
    )
}

export default PageNavRoutes;