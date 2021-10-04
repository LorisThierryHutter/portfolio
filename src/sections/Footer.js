import React from 'react';
import '../App.css';

function Footer() {



  return (
    <div id="footer">
          <ul id="madewith">
            <p>&#47;&#47; Made with: </p>
            <li>12 Created/Altered Files</li>
            <li>&gt;1MB in Total</li>
            <li>15 Hours of planing</li>
            <li>50 Hours of working</li>
          </ul>
          <p id="footerposition"><a href="https://hul.bm-it.ch/copy/privacy.html">Cookie & Privacy Policy</a> &copy;2018-{new Date().getFullYear()} Loris Thierry Hütter. All rights reserved. Version (0.8.0.0)</p>
    </div>
  );
}

export default Footer;
