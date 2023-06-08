import React from 'react';
import Menu from "../components/Menu"
import FooterAdvanced from "../components/FooterAdvanced"
import Container from "../components/MainContainer"
import PIC_TEXT_OSCAR from '../components/PIC_TEXT_OSCAR';
import PIC_TEXT_OSCAR_MOTHER from "../components/PIC_TEXT_OSCAR_MOTHER";
import Events from "../components/EventList";


class HomePage extends React.Component {
  render() {
    return <div>
      <Menu/>
      <Container titel="OSCAR PIÑEIRO" background="main_image" main_image="main_image_child"/>
      <PIC_TEXT_OSCAR/>
      <PIC_TEXT_OSCAR_MOTHER/>
      <h1 className=' blond_header center_header events_header'>Upcoming Events</h1>
      <Events/>
      <FooterAdvanced/>
      </div>
  }
}

export default HomePage;