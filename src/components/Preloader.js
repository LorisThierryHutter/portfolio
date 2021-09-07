import React from 'react'
import { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import * as location from '../loaderrr.json'
import App from '../App';
import '../App.css';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: location.default,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

function Preloader(){

    const [completed, setcompleted] = useState(undefined);

useEffect(() => {
    setTimeout(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => {
            setTimeout(() => {
                setcompleted(true);
            }, 1000);
        });
    }, 1000);
}, []);



    return(
        <>
            {!completed ? (
            <header id="lottie">
                <Lottie id="lottie-animation" options={defaultOptions} style={{width: "80vw"}} />
            </header>
                
                ):(
                    <App />
                    )}
        </>
    );
}

export default Preloader