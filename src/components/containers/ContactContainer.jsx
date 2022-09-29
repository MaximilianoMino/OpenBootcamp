import React from "react";
import { ContactData } from "../../models/contact.class";
import Contact from "../pure/Contact";

const ContactContainer = () => {
  const contactData = new ContactData(
    "Maximiliano",
    "Miño",
    "maximiliano.mino323@gmail.com",
    true
  );
  return (
    <div>
      <Contact contactData={contactData} />
    </div>
  );
};

export default ContactContainer;
