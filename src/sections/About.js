import React from 'react';
import rick from '../rick.jpg';
import '../App.css';
import { SocialIcon } from 'react-social-icons';
import { SkillBars } from 'react-skills';

function About(setter) {


  function getAge(){
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

  const aboutText = ["#My name is Loris, I am", "#Mein Name ist Loris, ich bin", " years old.", " Jahre alt", "#Current Occupation: ", "#Momentane Beschäftigung"]
  const occupation = ["2nd Year Apprenticeship in IT Application development EFZ", "2. Jahr Lehre Informatiker Applikationsentwickler EFZ"]
  const skillExplanation = ["0% - 20%: Novice | 21% - 40%: Beginner | 41% - 60%: Intermediate | 61% - 80%: Advanced | 81% - 100%: Expert", "0% - 20%: Neueinsteiger | 21% - 40%: Anfänger | 41% - 60%: Mittleres Fähigkeitsniveau | 61% - 80%: Fortgeschritten | 81% - 100%: Experte"]

  // https://kevincastejon.github.io/react-skills/documentation/
  const skillsData = [
    {
      name: 'ReactJS',
      level: 51,
      color: '#5CD0EE',
      levelProgress: true,
    },
    {
      name: 'C++',
      level: 9,
      color: '#1D659C'
    },
    {
      name: 'C#',
      level: 32,
      color: '#92458C'
    },
    {
      name: 'HTML',
      level: 55,
      color: '#D84924'
    },
    {
      name: 'CSS',
      level: 59,
      color: '#146CAD'
    },
    {
      name: 'Python',
      level: 60,
      color: '#F29D00'
    },
    {
      name: 'JavaScript',
      level: 52,
      color: '#EAD41C'
    },
    {
      name: 'Java',
      level: 45,
      color: '#E97B18'
    },
    {
      name: 'SQL',
      level: 59,
      color: '#006F88'
    },
    {
      name: 'Wordpress',
      level: 25,
      color: '#1F6F92'
    },
    {
      name: 'Git',
      level: 34,
      color: '#E44C30'
    },
    {
      name: 'Linux',
      level: 52,
      color: '#D24413'
    },
    {
      name: 'Metasploit',
      level: 12,
      color: '#0B72B0'
    },
  ]

  return (
    <div id="about">
      <div className="container2">
        <img src={rick} alt="Rickrolled" id="aboutImage" />

        <ul id="aboutme">
          <li>
            {aboutText[setter.language]} { age } {aboutText[setter.language+2]}
          </li>
          <li>
            {aboutText[setter.language+4]} {occupation[setter.language]}
          </li>
        </ul>
      </div>

      <div id="skillbar">
        <p>Skills: </p>
        <p style={{fontSize: '18px'}} > { skillExplanation[setter.language] } </p>
        <SkillBars spacing={20} skills={skillsData} />
      </div>

      <p>Socials:</p>
      <div className="container" id="socials">
        <SocialIcon id="socialIcons" url="https://www.patreon.com/raccoongamestudios/creators" bgColor="#FA6A56" fgColor="#ffffff" />
        <SocialIcon id="socialIcons" url="https://raccoongamestudios.itch.io/" fgColor="#ffffff" />
        <SocialIcon id="socialIcons" url="https://www.instagram.com/raccoon_game_studios/" bgColor="#F03D5B" fgColor="#6266E1" />
        <SocialIcon id="socialIcons" url="https://github.com/LorisThierryHuetter" fgColor="#ffffff" bgColor="#15181C" />
        <SocialIcon id="socialIcons" url="https://www.linkedin.com/in/loris-thierry-h%C3%BCtter-8276b5156/" fgColor="#ffffff" />
        <SocialIcon id="socialIcons" url="https://stackoverflow.com/users/14103392/loristhierryhuetter" bgColor="#E87A22" fgColor="#ffffff" />
        <SocialIcon id="socialIcons" url="https://www.sololearn.com/profile/830484" fgColor="#0A3267" bgColor="#E36F40" />
      </div>
    </div>
  );
}

export default About;
