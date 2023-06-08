import React from "react";
import EventCover from "../components/EventCover";
import Menu from "../components/Menu";
import FooterAdvanced from "../components/FooterAdvanced";
import EventInfo from "../components/EventInfo";


const EventPage1 = () => {
    return (
        <div>
            <Menu />
            <EventCover
                image="event1_image"

            />
            <EventInfo
                subheader="Fr., 16. Juni  |  Lloret de Mar"
                concertName="[CONCERT] Església de Sant Romà de Lloret de Mar"
                description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
          voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
          sequi voluptate quas."
                time="16. Juni, 21:00 – 22:00"
                adresse="Lloret de Mar, Plaça de l'Església, 4, 17310 Lloret de Mar, Girona, Spain"
            />
            <FooterAdvanced />
        </div>
    )
}

export default EventPage1;