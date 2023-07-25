import React from "react";
import EventForm from "../components/EventForm";
import { json, redirect } from "react-router-dom";

function NewEvent() {
  return <EventForm />;
}

export default NewEvent;

export async function action({ request, params }) {
  const data = await request.formData();
  console.log("dataaForm", data);

  const formData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };
  console.log("form", formData);
  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw json({ message: "eventdata not saved" }, { status: 500 });
  }
  return redirect("/events");
}
