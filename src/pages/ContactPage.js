import React from "react";
import Menu from "../components/Menu";
import FooterAdvanced from "../components/FooterAdvanced";
import Contact from "../components/Contact"
import SmallContainer from "../components/SmallContainer"


const ContactPage = () => {
    return <div>
        <Menu/>
        <SmallContainer titel="CONTACT" background="main_image cover_height" main_image="event_cover" bg_small="bg_small" />
        <Contact/>
        <FooterAdvanced/>
    </div>
}

export default ContactPage;