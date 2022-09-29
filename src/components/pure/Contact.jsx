import React from "react";
import PropTypes from "prop-types";
import { ContactData } from "../../models/contact.class";
const Contact = ({ contactData }) => {
  return (
    <div>
      <h2>Name: {contactData.name}</h2>
      <h2>Lastname: {contactData.lastname}</h2>
      <h2>Mail: {contactData.email}</h2>
      <h2>{contactData.isConected ? "Welcome" : "Login"}</h2>
    </div>
  );
};

Contact.propTypes = {
  contactData: PropTypes.instanceOf(ContactData)
};

export default Contact;
