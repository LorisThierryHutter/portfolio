import React from 'react';
import rick from '../rick.jpg';
import '../App.css';
import { SocialIcon } from 'react-social-icons';

function About(setter) {


  function getAge(birthYear){
    const todayDate = new Date();
    const today = [todayDate.getFullYear(), todayDate.getMonth() + 1, todayDate.getDate()] // January is 0
    const year_born = [2002, 2, 15] 
    const difference = [0, 0, 0]

    for (let i = 0; i < 3; i++){
      difference[i] = today[i] - year_born[i];
    }
    if ( difference[2] < 0 ){
      difference[1] -= 1;
    }

    if ( difference[1] < 0 ){
      difference[0] -= 1
    }

    return difference[0];;
  }

  let age = getAge();

  const aboutText = ["My name is Loris, I am ", "Meine Name ist Loris, ich bin ", " years old.", " Jahre alt", "Current Occupation: ", "Momentane Beschäftigung"]
  const occupation = ["2nd Year Apprenticeship in IT Application development EFZ", "2. Jahr Lehre Informatiker Applikationsentwickler EFZ"]
  

  return (
    <div id="about">
      <div className="container2">
        <img src={rick} alt="Rickrolled" id="aboutImage" />

        <ul style={{ textAlign: 'left' }}>
          <li>
            {aboutText[setter.language]} { age } {aboutText[setter.language+2]}
          </li>
          <li>
            {aboutText[setter.language+4]} {occupation[setter.language]}
          </li>
        </ul>
      </div>
      
      <p>Socials:</p>
      <div className="container" id="socials">
        <SocialIcon id="socialIcons" url="https://www.patreon.com/raccoongamestudios/creators" network="pinterest" />
        <SocialIcon id="socialIcons" url="https://raccoongamestudios.itch.io/" />
        <SocialIcon id="socialIcons" url="https://www.instagram.com/raccoon_game_studios/" />
        <SocialIcon id="socialIcons" url="https://github.com/LorisThierryHuetter" />
        <SocialIcon id="socialIcons" url="https://www.linkedin.com/in/loris-thierry-h%C3%BCtter-8276b5156/" />
        <SocialIcon id="socialIcons" url="https://stackoverflow.com/users/14103392/loristhierryhuetter" />
        <SocialIcon id="socialIcons" url="https://www.sololearn.com/profile/830484" />
      </div>

    </div>
  );
}

export default About;
