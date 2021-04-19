import React from "react";
import { FaClock } from "react-icons/fa";
import "./EventCard.css";

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <ul>
        <li>
          <FaClock className="event-clock" /> {event.time}
        </li>
      </ul>
      <h1>{event.eventName}</h1>
      <hr />
      <p>{event.description}</p>
    </div>
  );
};

export default EventCard;
