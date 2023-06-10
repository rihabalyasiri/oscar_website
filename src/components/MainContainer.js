import React from 'react';
import "../css/style.css"
import 'animate.css';



export default function App(props) {
    return (
        <div className={props.background + " " + props.bg_small}>
            <h1 className='titel titel_main_container animate__backInLeft animate__animated'>{props.titel}</h1>
            <div className={props.main_image}>

            </div>

        </div>
    );
}