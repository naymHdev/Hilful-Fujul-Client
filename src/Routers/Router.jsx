import { createBrowserRouter } from "react-router-dom";
import Error from "../Components/Error";
import Layouts from "../Layouts/Layouts";
import Home from "../Home/Home";
import About from "../Pages/About/About";
import Donations from "../Pages/Donations/Donations";
import Events from "../Pages/Events/Events";
import Blogs from "../Pages/Blogs/Blogs";
import SignUp from "../Auth/SugnUp/SignUp";
import LogIn from "../Auth/LogIn/LogIn";
import PrivateRoute from "../Auth/PrivateRoute";
import JoinVolunteer from "../Pages/JoinVolunteer/JoinVolunteer";
import EventsDetails from "../Pages/Events/EventsDetails";
import Donate from "../Pages/Donate/Donate";
import DonationDetails from "../Pages/Donations/DonationDetails";
import Contact from "../Pages/Contact/Contact";
import BlogDetails from "../Pages/Blogs/BlogDetails";
import ImageGallery from "../Pages/Gallery/Gallery";
import CausesDetails from "../Pages/Causes/CausesDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/gallery",
        element: <ImageGallery />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/donations",
        element: <Donations />,
      },
      {
        path: "/donationDetails/:id",
        element: <DonationDetails />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/eventsDetails/:id",
        element: <EventsDetails />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blogDetails/:id",
        element: <BlogDetails />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/joinVolunteer",
        element: (
          <PrivateRoute>
            <JoinVolunteer />
          </PrivateRoute>
        ),
      },
      {
        path: "/donate",
        element: <Donate />,
      },
      {
        path: "/donate/:id",
        element: <Donate />,
      },
      {
        path: "/projects/:projectName/:id",
        element: <CausesDetails />,
      },
    ],
  },
  { path: "/signUp", element: <SignUp /> },
  { path: "/logIn", element: <LogIn /> },
]);

export default router;
