import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Events, { loader as eventsLoader } from "./pages/Events";
import EventDetails, {
  loader as EventDetailsLoader,
  action as deleteEventAction,
} from "./pages/EventDetails";
import NewEvent, { action as newEventAction } from "./pages/NewEvent";
import EditEvent from "./pages/EditEvent";
import Root from "./pages/Root";
import EventRoot from "./pages/EventRoot";
import Error from "./pages/Error";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "events",
        element: <EventRoot />,
        children: [
          {
            path: "",
            element: <Events />,
            loader: eventsLoader,
          },
          {
            path: ":eventId",
            id: "event-detail",
            loader: EventDetailsLoader,

            children: [
              {
                path: "",
                element: <EventDetails />,
                action : deleteEventAction
              },
              { path: "edit", element: <EditEvent /> },
            ],
          },
          // {
          //   path: ":eventId",
          //   element: <EventDetails />,
          //   loader: EventDetailsLoader,
          // },
          {
            path: "newEvent",
            element: <NewEvent />,
            action: newEventAction,
          },
          // {
          //   path: ":editId/edit",
          //   element: <EditEvent />,
          // },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
