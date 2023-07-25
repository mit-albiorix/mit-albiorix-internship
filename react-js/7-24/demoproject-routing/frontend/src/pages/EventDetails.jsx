import React, { useEffect } from "react";
import { json, useRouteLoaderData, useParams, redirect } from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetails() {
  const params = useParams();
  const responseData = useRouteLoaderData("event-detail");

  console.log("resdetails", responseData);

  return (
    <div>
      <EventItem event={responseData?.event} />
      {params.eventId}
    </div>
  );
}

export default EventDetails;

export async function loader({ request, params }) {
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id);
  if (!response.ok) {
    throw json(
      { message: "could not fetch details of event" },
      { status: 500 }
    );
  } else {
    const resData = await response.json();
    console.log("resData", resData);
    return resData;
    // return response
  }
}

export async function action({ params, request }) {
  const eventId = params.eventId;
  const response = await fetch('http://localhost:8080/events/' + eventId, {
    method: request.method,
  });

  if (!response.ok) {
    throw json(
      { message: 'Could not delete event.' },
      {
        status: 500,
      }
    );
  }
  return redirect('/events');
}