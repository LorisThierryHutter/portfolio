import React from 'react';

function About() {


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

  var age = getAge();

  return (
    <div id="about">
      <p>My name is Loris, I am { age } years old.</p>
    </div>
  );
}

export default About;
