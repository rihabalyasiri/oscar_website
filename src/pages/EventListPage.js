
import { render } from "@testing-library/react"
import React from "react"
import EventList from "../components/EventList";
import Menu from "../components/Menu";
import FooterAdvanced from "../components/FooterAdvanced";
import SmallContainer from "../components/SmallContainer";

const EventsPage = () => {


    return <div>
        <Menu />
        <SmallContainer titel="EVENTS" background="main_image cover_height" main_image="event_cover event_cover_img " bg_small="bg_small" />
        <EventList />
        <FooterAdvanced />
    </div>

}

export default EventsPage;