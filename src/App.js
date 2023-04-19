import React from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Root from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  
  const [contacts , setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);


    const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };


  /*
  Implement functions to add data to
  contacts and appointments
  */

  const addContacts = (phone, name, email) => {
    setContacts([...contacts, {phone, name, email}]);
  };
  const addAppointments = (contact, date, time, title) => {
    setAppointments([...appointments, {contact, date, time, title}])
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contacts={contacts} addContacts={addContacts}/> /* Add props to ContactsPage */ }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage appointments={appointments} contacts={contacts} addAppointments={addAppointments} /> /* Add props to AppointmentsPage */ }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
