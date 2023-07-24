import classes from "./EventsNavigation.module.css";
import { NavLink } from "react-router-dom";

function EventsNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to=""
              className={({ isActive }) => (isActive ? classes.active : "")}
              end
            >
              All Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="newEvent"
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              New Event
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
