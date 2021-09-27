import React from 'react';
import '../App.css';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div id="navigation">
           <NavLink id="NavLink" to="/">Home</NavLink>
          <NavLink id="NavLink" to="./Experimenthome">Experimenthome</NavLink>
       </div>
    );
}
 
export default Navigation;

