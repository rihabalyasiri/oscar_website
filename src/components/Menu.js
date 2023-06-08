import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse
} from 'mdb-react-ui-kit';
import HamburgerMenu from './HamburgerMenu';

export default function App() {
  const [showNav, setShowNav] = useState(true);

  return (
    <div className="menu white_text">
    <MDBNavbar   expand="lg" >
      <MDBContainer fluid >
        <div className='logo'></div>
        <MDBNavbarBrand className="logo_text" href='#'>Spanish Virtuosos</MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNav(!showNav)}
          className='toggle_menu'
        >
          
       
        </MDBNavbarToggler>
     
        <MDBCollapse navbar show={showNav}>
          <MDBNavbarNav>
       
            <MDBNavbarItem>
              <MDBNavbarLink href='/'>HOME</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/about_us'>ABOUT US</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/events'>EVENTS</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/videos'>VIDEOS</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='/contact'>CONTACT</MDBNavbarLink>
            </MDBNavbarItem>
      
          </MDBNavbarNav>
        </MDBCollapse>
     
      </MDBContainer>
    </MDBNavbar>
    </div>
  );
}