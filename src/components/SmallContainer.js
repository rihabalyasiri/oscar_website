import React from 'react';
import "../css/style.css"



export default function App(props) {
    return (
        <div className={props.background + " " + props.bg_small}>
            <h1 className='titel header_small_container'>{props.titel}</h1>
            <div className={props.main_image}>

            </div>

        </div>
    );
}