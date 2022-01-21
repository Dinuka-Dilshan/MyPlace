import React from 'react';
import ReactDom from 'react-dom';

import './BackDrop.css';

const BackDrop = props=>{

    const clickHandler = ()=>{
        props.closeNavDrawer && props.closeNavDrawer();
    }


    const content =  <div  onClick={clickHandler} className='back-drop'>
        {props.children}
    </div>;

    return ReactDom.createPortal(content,document.getElementById('backdrop'));
}


export default BackDrop;