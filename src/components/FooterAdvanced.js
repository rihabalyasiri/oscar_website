import React from 'react';
import {useState} from "react";
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn
} from 'mdb-react-ui-kit';
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter, FaHeart } from 'react-icons/fa';


const sendEmail = (email) => {
    console.log(email)
    window.open('mailto:test@example.com?subject=subject&body=body');
}




const FooterAdvanced = () => {
    const {email, setEmail} = useState("")
    return (
        <MDBFooter className='text-center' color='white' bgColor='dark'>
            <MDBContainer className='p-4'>
                <section className='mb-4 flex_parent_social_media'>

                    <a className='icon' href='https://www.instagram.com/violinistoscar/' target="_blank">
                    <FaInstagram size={40} className="padding"/>
                    </a>

                    <a className='icon' href="https://www.youtube.com/@oscarpineiroviolin96" target="_blank">
                    <FaYoutube size={40} className="padding" />
                    </a>
                    <a className='icon' href='https://www.youtube.com/@marinapineiro7642' target="_blank">
                    <FaYoutube size={40} className="padding"/>
                    </a>
        
                    
                </section>

                {/*<section className=''>
                    <form action=''>
                        <MDBRow className='d-flex justify-content-center'>
                            <MDBCol size="auto">
                                <p className='pt-2'>
                                    <strong>Sign up for our newsletter</strong>
                                </p>
                            </MDBCol>

                            <MDBCol md='5' start>
                                <MDBInput contrast type='email' label='Email address' className='mb-4' value={email} onChange={setEmail}/>
                            </MDBCol>

                            <MDBCol size="auto">
                                <MDBBtn outline color='light' type='submit' className='mb-4' onClick={sendEmail}>
                                    Subscribe
                                </MDBBtn>
                            </MDBCol>
                        </MDBRow>
                    </form>
                </section>*/}

                <section className='mb-4'>
                    <p>
                    An insight into the authentic Spanish soul and a complete Spanish journey in all its territory,</p>
                    <p>
                    hosted in a 17th century palace, recently refurnished for our clients comfort.
                    </p>
                </section>

        
            </MDBContainer>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2023 Copyright:

                <a className='text-white marke'> Made with 
                <span className="heart"><FaHeart size={20} color={"#E3151B"} /></span>
                      by Spanish Virtuosos
                </a>
            </div>
        </MDBFooter>
    );
}

export default FooterAdvanced;