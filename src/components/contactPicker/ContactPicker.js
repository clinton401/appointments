import React from "react";

export const ContactPicker = (props) => {
  const contacts = props.contacts;
  const onChange = props.onChange;

  return (
    <select>
      <option value=''>Select a contact</option>
     { contacts.map(contact => <option value={contact.name} onChange={onChange}>{contact.name}</option>)}
    </select>
  );
};
