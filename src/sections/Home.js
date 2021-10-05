import '../App.css';
import About from './About';
import Footer from './Footer';
import Projects from './Projects';

import Settings from '../settings.png';
import Language from '../language.png';

import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import Popup from 'reactjs-popup';

const Navigation = () => {
    return (
       <div id="navigation">
        <Popup
          trigger={<img id="settings" src={Settings} alt={Settings} />}
          position="left top"
          on="click"
          closeOnDocumentClick
          mouseLeaveDelay={300}
          mouseEnterDelay={0}
          arrow={false}
        >
          <div className="navmenu">
            <NavLink id="NavLink" className="navmenu-item" to="/">Home</NavLink>
            <NavLink id="NavLink" className="navmenu-item" to="./Experimenthome">Experiments(English only)</NavLink>
          </div>
        </Popup>
      </div>
    );
}

const Home = () => {

    // 0 = English, 1 = german
    const language = ['English', 'Deutsch'];
    const languageAmmount = language.length;
    const welcome = ["Welcome to my portfolio page, my name is ", "Willkommen zu meiner Portfolio Seite, mein Name ist "]

    const [activeLanguage, setActiveLanguage] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <div id="languages">
          <Popup
            trigger={<img id="languageIcon" src={Language} alt={Settings} />}
            position="right top"
            on="click"
            closeOnDocumentClick
            mouseLeaveDelay={300}
            mouseEnterDelay={0}
            arrow={false}
          >
            <div className="navmenu">
              <div className="navmenu-item"><button id="nobutton" onClick={ () => {
                setActiveLanguage(0)
              } }>
                English
              </button></div>
              <div className="navmenu-item"><button id="nobutton" onClick={ () => {
                setActiveLanguage(1)
              } }>
                Deutsch
              </button></div>
            </div>
          </Popup>
        </div>
        <h1 id="welcome">{welcome[activeLanguage]} Loris H&#252;tter</h1>

      </header>

      <main>
        <About 
          language={activeLanguage} 
          languageAmmount={languageAmmount}
        />
        <Projects 
          language={activeLanguage} 
          languageAmmount={languageAmmount}
        />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
export { Navigation };