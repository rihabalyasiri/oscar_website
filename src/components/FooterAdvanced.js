import React from "react";
import { useState } from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaHeart,
} from "react-icons/fa";

const sendEmail = (email) => {
  console.log(email);
  window.open("mailto:test@example.com?subject=subject&body=body");
};

const FooterAdvanced = () => {
  return (
    <MDBFooter className="text-center" color="white" bgColor="dark">
      <MDBContainer className="p-4">
        <section className="mb-4 flex_parent_social_media">
          <a
            className="icon"
            href="https://www.instagram.com/violinistoscar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={40} className="padding" />
          </a>

          <a
            className="icon"
            href="https://www.youtube.com/@oscarpineiroviolin96"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube size={40} className="padding" />
          </a>
          <a
            className="icon"
            href="https://www.youtube.com/@marinapineiro7642"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube size={40} className="padding" />
          </a>
        </section>

        <section className="mb-4">
          <p>
            An insight into the authentic Spanish soul and a complete Spanish
            journey in all its territory,
          </p>
          <p>
            hosted in a 17th century palace, recently refurnished for our
            clients comfort.
          </p>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 Copyright:
        <span className="text-white marke">
          {" "}
          Made with
          <span className="heart">
            <FaHeart size={20} color={"#E3151B"} />
          </span>
          by Spanish Virtuosos
        </span>
      </div>
    </MDBFooter>
  );
};

export default FooterAdvanced;
