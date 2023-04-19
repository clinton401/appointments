import React from "react";


export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={({target}) => {setName(target.value)}} placeholder="name"/>
      <input type="tel" value={phone} onChange={({target}) => {setPhone(target.value)}} pattern="	
(^(\+?\-? *[0-9]+)([,0-9 ]*)([0-9 ])*$)|(^ *$" placeholder="Phone number"/>
      <input type="email" value={email} onChange={({target}) => {setEmail(target.value)}} placeholder="email@123.com"/>
      <input type="submit" value='submit'/>
    </form>
  );
};

