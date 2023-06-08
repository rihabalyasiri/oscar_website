import React from "react";
import Menu from "../components/Menu";
import FooterAdvanced from "../components/FooterAdvanced";
import SmallContainer from "../components/SmallContainer";
import OscarBio from "../components/OscarBio";


const AboutusPage = () => {
    return <div>
        <Menu/>
        <SmallContainer titel="BIOGRAPHY"  background="main_image cover_height" main_image="biogrphy_image" bg_small="bg_small"/>
        <OscarBio/>
        <FooterAdvanced/>
    </div>
}

export default AboutusPage;