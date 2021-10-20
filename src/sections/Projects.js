import React from 'react';
import Corona from '../piskelcoronavirus.png';
import RovingShade from '../roving_shade.webp';
import Otherside from '../otherside.webp';
import KingdomsDemise from '../kingdoms_demise.webp';
import Popup from 'reactjs-popup';
import '../App.css';


import '../App.css';

function Projects(setter) {

    const kingdomsDemiseDesc = ["The first Game I made in a Team. We worked from January until August 2019.", "Das erste Spiel, dass ich in einem Team entwickelt habe habe. Wir arbeiteten vom Januar bis August 2019"];
    const othersideDesc = ["A short game I made in a team of 3 within 48 hours. The Theme was 'The Other Side'", "Ein kurzes Spiel, dass ich in einem Team von 3 Programmierer innerhalb 48 Stunden entwickelt habe. Das Thema war 'Die andere Seite'"];
    const rovingShadeDesc = ["Roving Shade was made in the Swiss Game Academy (SGA) in 2019 with a small Team within 3 days", "Roving Shade wurde an der Swiss Game Academy (SGA) 2019 in einem kleinen Team innerhalb 3 Tagen entwickelt"];
    const coronaDesc = ["An Idle Corona Clicker I made using the Cookie Clicker engine just when the pandemic started in Europe", "Ein Clicker Spiel mit Corona als Hauptthema gemacht mit der Cookie-Klicker engine gerade, als die Pandemie in Europa startete"];

    const kingdomsDemiseDescLong = ["The first Game I made in a Team. We worked from January until August 2019.", "Das erste Spiel, dass ich in einem Team entwickelt habe habe. Wir arbeiteten vom Januar bis August 2019"];
    const othersideDescLong = ["A short game I made in a team of 3 within 48 hours. The Theme was 'The Other Side'. We ranked #10 out of 17", "Ein kurzes Spiel, dass ich in einem Team von 3 Programmierer innerhalb 48 Stunden entwickelt habe. Das Thema war 'Die andere Seite'. Wir wurden auf Platz #10 von 17 gestellt."];
    const rovingShadeDescLong = ["Roving Shade was made in the Swiss Game Academy (SGA) in 2019 with a small Team within 3 days", "Roving Shade wurde an der Swiss Game Academy (SGA) 2019 in einem kleinen Team innerhalb 3 Tagen entwickelt"];
    const coronaDescLong = ["An Idle Corona Clicker I made using the Cookie Clicker engine just when the pandemic started in Europe", "Ein Clicker Spiel mit Corona als Hauptthema gemacht mit der Cookie-Klicker engine gerade, als die Pandemie in Europa startete"];

    return (
        <div id="projects">
            <p>Projects:</p>
            <div id="card_wrapper">
                <Card 
                    img={KingdomsDemise}
                    title="Kingdoms Demise"
                    description={kingdomsDemiseDesc[setter.language]}
                    descriptionLong={kingdomsDemiseDescLong[setter.language]}
                    date="August 2019"
                    link="https://hul.bm-it.ch/subscribetopewdiepie/game.html"
                    language={setter.language}
                    type="game"
                    tags={[ "RPG", "Adventure" ]}
                />
                <Card 
                    img={Otherside}
                    title="Other Side Revenge"
                    description={othersideDesc[setter.language]}
                    descriptionLong={othersideDescLong[setter.language]}
                    date="September 2020"
                    link="https://raccoongamestudios.itch.io/other-side-revenge"
                    language={setter.language}
                    type="game"
                />
                <Card 
                    img={RovingShade}
                    title="Roving Shade"
                    description={rovingShadeDesc[setter.language]}
                    descriptionLong={rovingShadeDescLong[setter.language]}
                    date="Juli 2019"
                    link="https://raccoongamestudios.itch.io/roving-shade"
                    language={setter.language}
                    type="game"
                />
                <Card
                    img={Corona}
                    title="Idle Corona Clicker"
                    description={coronaDesc[setter.language]}
                    descriptionLong={coronaDescLong[setter.language]}
                    date="8th of March 2020"
                    link={Corona}
                    language={setter.language}
                    type="game"
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
                <ProjectPopup  
                    project={props.title} 
                    descriptionLong={props.descriptionLong}
                    language={props.language}
                    link={props.link}
                    type={props.type}
                    tags={props.tags}
                    img={props.img}
                />
            </div>
        </div>
    )
}

function ProjectPopup(props){

    const closeModal = ["Close", "Schliessen"];
    const option = ["Play ", "Test ", "Check out ", "Download "];
    let chooser = 2;
    let download = "";

    if(props.type === "game"){
        chooser = 0;
    } else if(props.type === "software"){
        chooser = 1;
    } else if(props.type === "other"){
        chooser = 2;
    } else if(props.type === "download"){
        chooser = 3;
        download = {download};
    } else{
        chooser = 2;
        console.log("Wrong Project Type received for Project: " + props.project)
    }

    const redirect = <p><a id="projectsLink" href={props.link} target="_blank" rel="noreferrer noopener" {...download} > {option[chooser]} { props.project } </a></p>

    return(
        <Popup 
            trigger={<button className="card_btn"> View { props.project } </button>} 
            modal
            nested
        >
            {close => (
                <div className="modal">
                    <div className="header">
                        <h2> { props.project } </h2>
                        <img className="popupImage" src={props.img} alt={props.project} />
                    </div>
                    <div className="content">
                        {' '}
                        { props.descriptionLong }
                    </div>
                    <div className="actions">
                        { redirect }
                        <button
                            className="card_btn_popup"
                            onClick={() => {
                                console.log('modal closed ');
                                close();
                            }}
                        >
                            { closeModal[props.language] }
                        </button>
                    </div>
                </div>
            )}
        </Popup>
      );
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