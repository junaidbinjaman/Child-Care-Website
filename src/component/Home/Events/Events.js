import React from "react";
import EventCard from "./EventCard/EventCard";
import "./Events.css";

const eventData = [
  {
    time: "11:30am",
    eventName: "Imagination Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    time: "11:30am",
    eventName: "Imagination Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    time: "11:30am",
    eventName: "Imagination Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    time: "11:30am",
    eventName: "Imagination Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
];

const Events = () => {
  return (
    <div className="events-container">
      <h1 className="sub-heading"> Time to know about </h1>
      <h2>Upcoming Events</h2>
      <hr />
      <div className="event-row">
        {eventData.map((event) => (
          <EventCard event={event}></EventCard>
        ))}
      </div>
    </div>
  );
};

export default Events;
