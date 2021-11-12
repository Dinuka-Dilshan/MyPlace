import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import './BurgerButton.css';
const BurgerButton = props=>{

    const clickHandler = ()=>{
       props.openNavDrawer();
    }


    return(
        <div className='burger-button-wrapper'>
            <FontAwesomeIcon onClick={clickHandler} className='burgur-button' icon={faBars} size='2x' color="#005f99"/>
        </div>
    )
}

export default BurgerButton;