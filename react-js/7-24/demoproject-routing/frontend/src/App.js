import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Events, { loader as eventsLoader } from "./pages/Events";
import EventDetails, {
  loader as EventDetailsLoader,
  action as deleteEventAction,
} from "./pages/EventDetails";
import NewEvent from "./pages/NewEvent";
import EditEvent from "./pages/EditEvent";
import Root from "./pages/Root";
import EventRoot from "./pages/EventRoot";
import Error from "./pages/Error";
import { action as manipulateEventAction } from "./components/EventForm";
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
            // action: deleteEventAction,

            children: [
              {
                index: true,
                // path:"",
                action: deleteEventAction,

                element: <EventDetails />,
              },
              {
                path: "edit",
                element: <EditEvent />,
                action: manipulateEventAction,
              },
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
            action: manipulateEventAction,
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
