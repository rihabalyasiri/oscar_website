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
                description="Three centuries of Spanish culture, where you can listen to Flamenco music and beyond at the highest expression. 
                An insight into the authentic Spanish soul and a complete Spanish journey in all its territory, hosted in a 17th century palace, recently 
                refurnished for our clients comfort."
                time="16. Juni, 21:00 – 22:00"
                adresse="Lloret de Mar, Plaça de l'Església, 4, 17310 Lloret de Mar, Girona, Spain"
                
            />
            <FooterAdvanced />
        </div>
    )
}

export default EventPage1;