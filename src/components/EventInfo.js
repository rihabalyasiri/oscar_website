import React from "react";
import {
    MDBBtn
} from 'mdb-react-ui-kit';

const EventInfo = (props) => {
    return <div className="event_container">
        <div className="event_header">
            <p>{props.subheader}</p>
            <h1 className="concert_header">{props.concertName}</h1>
        </div>
        <div className="event_info">
            <h4>Description:</h4>
            <p>  {props.description}</p>
            <h4>Time & Location:</h4>
            <p>{props.time}</p>
            <p>{props.adresse}</p>
            <MDBBtn href="https://en.eventospalaudalmases.com/virtuosos" color='danger'  target="_blank"
            rel="noopener noreferrer">Buy Ticket</MDBBtn>
           
        </div>

    </div>
}

export default EventInfo;