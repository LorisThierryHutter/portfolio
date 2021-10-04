import '../App.css';
import About from './About';
import Footer from './Footer';
import Projects from './Projects';

import { NavLink } from 'react-router-dom';
import { useState } from 'react';



const Navigation = () => {
    return (
       <div id="navigation">
           <NavLink id="NavLink" to="/">Home</NavLink>
          <NavLink id="NavLink" to="./Experimenthome">Experiments(English only)</NavLink>
       </div>
    );
}

const Home = () => {

    // 0 = English, 1 = german
    const language = ['English', 'Deutsch'];
    const welcome = ["Welcome to my portfolio", "Willkommen zu meinem Portfolio"]

    const [activeLanguage, setActiveLanguage] = useState(language[0])
    const [languageSwitcher, setLanguageSwitcher] = useState(1)

  return (
    <div className="App">
      <header className="App-header">
        <button id="languages" onClick={ () => {
            setLanguageSwitcher(languageSwitcher + 1)
            setActiveLanguage(language[languageSwitcher%2]) 
        }
        }>{activeLanguage}
        </button>
        <h1>{welcome[languageSwitcher%2]}</h1>

      </header>

      <main>
        <About language={languageSwitcher%2} />
        <Projects language={languageSwitcher%2} />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
export { Navigation };