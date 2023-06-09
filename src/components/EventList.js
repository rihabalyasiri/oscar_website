import React from "react";
import CardEvent from "./CardEvent";

export default function App() {
  return (
    <div className="grid flex_parent card_flex">
      <div className="g-col-6 margin_bt">
        <CardEvent
          classStyle="card_img2"
          concertName="[CONCERT] Església de Sant Romà de Lloret de Mar"
          date="16. Juni, 21:00 – 22:00"
          adresse="Lloret de Mar, Plaça de l'Església, 4, 17310 Lloret de Mar, Girona, Spain"
          description="Three centuries of Spanish culture, where you can listen to Flamenco music and beyond at the highest expression. 
          An insight into the authentic Spanish soul and a complete Spanish journey in all its territory, hosted in a 17th century palace, recently 
          refurnished for our clients comfort."
          link="/event1"
        />
      </div>

      <div className="g-col-6 margin_bt">
        <CardEvent
          classStyle="card_img1"
          concertName="Palau Dalmases"
          date="18. Juni, 19:00 – 20:40 "
          adresse="Barcelona, C/ de Montcada, 20, 08003 Barcelona, Spain"
          link="/event2"
        />
      </div>
    </div>
  );
}
