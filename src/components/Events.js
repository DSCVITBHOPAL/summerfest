import React from "react";
import "./Events.css";
import eventsDataArr from "./eventsDataArr";
import Timer from "./Timer";
const Events = () => {
  return (
    <div className="card-holder">
      <p className="upcoming">Upcoming Events</p>
      {eventsDataArr.map((event) => {
        return (
          <div class="card">
            <div>
              <h1>{event.title}</h1>
              <div className="description-card">
                <p>{event.desc}</p>
              </div>
              <div className="event-card-timer-holder">
                <Timer targetTime={event.time} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Events;