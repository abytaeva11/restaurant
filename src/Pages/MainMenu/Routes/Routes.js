import React from 'react';
import {Route, Routes, useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";
import Sidebar from "../Sidebar"
import Desserts from "../pages/Deserts";
import HotDrinks from "../pages/HotDrinks";
import ColdDrinks from "../pages/ColdDrinksMenu";
import NationalFoods from "../pages/NationalFoods";
import EasternCuisine from "../pages/EasternCuisine";
import FastFoods from "../pages/FastFoods";

import IconImg2 from "../../../images/hero-wave-right.svg";
import IconImg from "../../../images/hero-wave.svg";
import { BsArrowRight } from 'react-icons/bs';

const Main = () => {
    const nav = useNavigate()
const getNav = () => {
  nav("AboutMenu")
}

    return (
<div  id="rout" style={{background:"  #1d1f23"}}>
    <div className="rout " >
        <div className="rout--teen">
            <div className="rout--img " style={{color:"white" ,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                <img src={IconImg} alt=""/>
                <h3> Main Menu</h3>
                <img src={IconImg2} alt=""/>

            </div>

            <h1 style={{color:"white",padding:"20px 0"}}>Exceptional Quality. <br/>
                Delightfully Delicious</h1>

        </div>
    <div className="rout--all">
        <Sidebar/>
        <Routes>
            <Route path='desert' element={<Desserts/> }/>
            <Route path='hotDrinks' element={ <HotDrinks/> }/>
            <Route path='coldDrinks' element={ <ColdDrinks/> }/>
            <Route path='nationalFoods' element={ <NationalFoods/> }/>
            <Route path='easternCuisine' element={ <EasternCuisine/> }/>
            <Route path='fastFoods' element={ <FastFoods/> }/>
        </Routes>
</div>

        <div  className="rout--link ">
                        <button onClick={() => getNav()}>  View Full menu  <BsArrowRight/> </button>
        </div>
    </div>

</div>
    );
};

export default Main;


