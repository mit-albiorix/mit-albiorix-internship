import React from "react";
import EventForm from "../components/EventForm";
import { useRouteLoaderData } from "react-router-dom";

function EditEvent() {
  const data = useRouteLoaderData("event-detail");
  console.log("data", data);
  return <EventForm method="patch" event={data.event}  />;
}

export default EditEvent;
