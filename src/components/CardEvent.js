import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';



export default function App(props) {
    return (
        <MDBCard className='card_size'>

            <div className={props.classStyle}></div>
            <MDBCardBody>
                <MDBCardTitle>{props.concertName}</MDBCardTitle>
                <MDBCardText>
                    {props.date}
                </MDBCardText>
                <MDBCardText >
                    <p > {props.adresse}</p>
                </MDBCardText>
          
             
                <MDBBtn href={props.link} color='danger'>Details</MDBBtn>
            </MDBCardBody>
        </MDBCard>
    );
}