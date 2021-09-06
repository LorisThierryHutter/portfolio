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

    const [data, setData] = useState([]);
    const [loading, setloading] = useState(undefined);
    const [completed, setcompleted] = useState(undefined);

useEffect(() => {
    setTimeout(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => {
            setData(json);
            setloading(true);

            setTimeout(() => {
                setcompleted(true);
            }, 1000);
        });
    }, 1000);
}, []);

    return(
        <>
            {!completed ? (
            <header className="App-header">
                <Lottie options={defaultOptions} id="lottie" />
            </header>
                
                ):(
                    <App />
                    )}
        </>
    );
}

export default Preloader