import { slide } from 'react-burger-menu'
import React from "react";

class HamburgerMenu extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
   
    return (
     
        <section class="top-nav">
    
          <input id="menu-toggle" type="checkbox" />
          <label class='menu-button-container' for="menu-toggle">
          <div class='menu-button'></div>
        </label>
          <ul class="menu">
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
            <li>Four</li>
            <li>Five</li>
          </ul>
        </section>
    );
  }
}

export default HamburgerMenu;