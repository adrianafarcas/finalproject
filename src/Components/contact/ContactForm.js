import React, { useState } from "react";
import "../../css/contactStyle.css";
import axios from "axios";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const API_PATH = "http://localhost:80/finalProject/api/contactForm.php";

  const { register, handleSubmit, watch, errors } = useForm();


  const clearInputs = () => {
    setFirstname('');
    setLastname('');
    setEmail('');
    setSubject('');
    console.log('aa');
  };
  

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(firstname, lastname, email, subject);
    let formData = new FormData();
    formData.append("firstname", firstname);
    formData.append( "lastname", lastname);
    formData.append( "email", email);
    formData.append( "subject", subject);
    axios.post(API_PATH, formData)
    .then(clearInputs())
    .then((rez) => console.log(rez.data))
    // useState({dataSent: rez.data.sent})
    .catch((err) => console.log(err));
  };

  


  return (
    <>
    <h4> Send us your request</h4>
    <p className="p-3">
      Do you have questions about our wines & sparkling wines, or would you
      like to book a wine tasting or send us feedback? <br/> Write us using the
      contact form below if you have any specific questions or
      requests/criticism! You will receive an answer from us as soon as
      possible!
    </p>
    <div className="container" id="contactForm">
      <form >
        <label>First Name</label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          placeholder="Your name.."
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <label>Last Name</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          placeholder="Your last name.."
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />

        <label>Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Subject</label>
        <textarea
          id="message"
          name="message"
          placeholder="Write something.."
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        ></textarea>
        <input type="submit" value="Submit" onClick={onSubmit}/>
      </form>
    </div>
    <div className="box contact-form">
      

    </div>
    </>
  );
};

export default ContactForm;
