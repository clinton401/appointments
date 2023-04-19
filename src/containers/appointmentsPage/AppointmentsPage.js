import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  
  
  */
  const appointments = props.appointments;
  const contacts = props.contacts;
  const addAppointment = props.addAppointments;

  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [contact, setContact] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    addAppointment(title, contact, date, time);
    // reseting values
    setTitle('');
    setContact('');
    setDate('');
    setTime('');
   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
        title={title}
        date={date}
        contact={contact}
        time={time}
        setTitle={setTitle}
        setDate={setDate}
        setContact={setContact}
        setTime={setTime}
        handleSubmit={handleSubmit}
        contacts={contacts}/>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList objArr={appointments}/>

      </section>
    </div>
  );
};