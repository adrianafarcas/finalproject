import React, { useState } from "react";
import "../../css/contactStyle.css";
import pic4 from "../../photos/pic4.jpg";
import { Card } from "react-bootstrap";
import ContactForm from "./ContactForm.js";

const ContactContainer = () => {
  return (
    <>
      <Card className="bg-dark text-white">
        <Card.Img src={pic4} alt="Card image" />
        <Card.ImgOverlay>
          <h1 className="title">Contact</h1>
        </Card.ImgOverlay>
      </Card>
      <div className="container">
        <h4>Winery at the Lion's Head</h4>
        <p>
          Owners Oana Calugar & Marcel Farcas <br />
          Schulstrasse 41 <br />
          56349 Kaub
          <br />
          Phone: +49 6774 4059953
          <br />
          Email: info@weingut-loewenkopf.com
          <br />
          www.weingut-loewenkopf.com
        </p>
      </div>
      <ContactForm />
    </>
  );
};

export default ContactContainer;
