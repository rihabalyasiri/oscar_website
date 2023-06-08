import React from "react";
import EventCover from "../components/EventCover";
import Menu from "../components/Menu";
import FooterAdvanced from "../components/FooterAdvanced";
import EventInfo from "../components/EventInfo";


const EventPage2 = () => {
    return (
        <div>
            <Menu />
            <EventCover
                image="event2_image"

            />
            <EventInfo subheader="So., 18. Juni  |  Barcelona"
                concertName="Palau Dalmases"
                description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
            voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas."
                time="18. Juni, 19:00 – 20:40"
                adresse="Barcelona, C/ de Montcada, 20, 08003 Barcelona, Spain" />
            <FooterAdvanced />
        </div>
    )
}

export default EventPage2;