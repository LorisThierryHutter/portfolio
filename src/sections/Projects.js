import React from 'react';
import Corona from '../piskelcoronavirus.png';
import RovingShade from '../roving_shade.png';
import Otherside from '../otherside.png';
import KingdomsDemise from '../kingdoms_demise.jpg';


import '../App.css';

function Projects(setter) {

    const kingdomsDemiseDesc = ["The first Game I made in a Team. We worked from January until August 2019.", "Das erste Spiel, dass ich in einem Team entwickelt habe habe. Wir arbeiteten vom Januar bis August 2019"];
    const othersideDesc = ["A short game I made in a team of 3 within 72 hours. The Theme was '2 worlds'", "Ein kurzes Spiel, dass ich in einem Team von 3 Programmierer innerhalb 72 Stunden entwickelt habe. Das Thema war '2 Welten'"];
    const rovingShadeDesc = ["Roving Shade was made in the Swiss Game Academy (SGA) in 2019 with a small Team within 3 days", "Roving Shade wurde an der Swiss Game Academy (SGA) 2019 in einem kleinen Team innerhalb 3 Tagen entwickelt"];
    const coronaDesc = ["An Idle Corona Clicker I made using the Cookie Clicker engine just when the pandemic started in Europe", "Ein Clicker Spiel mit Corona als Hauptthema gemacht mit der Cookie-Klicker engine gerade, als die Pandemie in Europa startete"];
    

    return (
        <div id="projects">
            <p>Projects:</p>
            <p><a href="https://hul.bm-it.ch/subscribetopewdiepie/game.html" target="_blank" rel="noreferrer noopener">Kingdoms Demis</a></p>
            <div id="card_wrapper">
                <Card 
                    img={KingdomsDemise}
                    title="Kingdoms Demise"
                    description={kingdomsDemiseDesc[setter.language]}
                    date="August 2019"
                />
                <Card 
                    img={Otherside}
                    title="Other Side Revenge"
                    description={othersideDesc}
                    date="Two years ago"
                    link="https://raccoongamestudios.itch.io/other-side-revenge"
                />
                <Card 
                    img={RovingShade}
                    title="Roving Shade"
                    description={rovingShadeDesc}
                    date="Juli 2019"
                    link="https://raccoongamestudios.itch.io/roving-shade"
                />
                <Card
                    img={Corona}
                    title="Idle Corona Clicker"
                    description={coronaDesc}
                    date="8th of March 2020"
                    link=""
                />
            </div>
        </div>

    )
}

function Card(props){
    return(
        <div className="card">
            <img src={props.img} className="card_img" alt="Kingdoms Demise Icon" />
            <div className="card_body">
                <h2 className="card_title">{props.title}</h2>
                <p className="card_description">{props.description}</p>
                <p className="card_date">{props.date}</p>
                <button className="card_btn">View</button>
            </div>
        </div>
    )
}

export default Projects

    /* "You are a lonely Soul in the search of an exit from this purgatory. Jump from platforms to platforms and avoid the deadly crystals on your search of the portal.

                    This game is created at the Swiss Game Academy Jam in Fribourg by a small but hard working team within 3 days and with lots of coffee.
                    
                    
                    Developers are :
                    
                     Loris Hütter
                    Discord: RacconGameStudios#6272
                    Patreon: https://www.patreon.com/raccoongamestudios
                    
                    Dunia Oualibouch
                    
                    Michel-François Legrand
                    
                    Corentin Goosse
                    
                    CreaZyp!
                    
                    Emocap"*/