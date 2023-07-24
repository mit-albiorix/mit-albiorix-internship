// import React from "react";
// import {NavLink} from 'react-router-dom'

// function Events() {
//   const events = [
//     { id: "e1", title: "Event1" },
//     { id: "e2", title: "Event2" },
//     { id: "e3", title: "Event3" },
//     { id: "e4", title: "Event4" },
//   ];
//   return (
//     <div>
//       <h2>Events</h2>
//       <NavLink to={'../events/newEvent'}>New Event</NavLink>
//       <ul>{events.map((event) => {
//         return (
//         <li key={event.id}>
//             <NavLink to={`${event.id}`}>{event.title}</NavLink>
//             <br />
//             <NavLink to={`${event.id}/edit`}>Edit</NavLink>
//         </li>
//         )
//       })}</ul>

//     </div>
//   );
// }

// export default Events;

import { useEffect, useState } from "react";

import EventsList from "../components/EventsList";
import {useLoaderData} from 'react-router-dom'

function Events() {
    const fetchedEvents = useLoaderData()
  return (
    <>
      <EventsList events={fetchedEvents} />
    </>
  );
}

export default Events;

export const loader = async () =>{
    const response = await fetch("http://localhost:8080/events");

    if (!response.ok) {
      // setError("Fetching events failed.");
    } else {
      const resData = await response.json();
      return resData.events
      // setFetchedEvents(resData.events);
    }
  }
