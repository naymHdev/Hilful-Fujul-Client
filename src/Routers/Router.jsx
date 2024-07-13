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
import Join from "../Home/Join/Join";
import PrivateRoute from "../Auth/PrivateRoute";
import JoinVolunteer from "../Pages/JoinVolunteer/JoinVolunteer";
import DashboardLayout from "../Layouts/DashboardLayout";
import Dashboard from "../Dashboard/Dashboard";
import AddChairman from "../Dashboard/Admin/AddChairman";
import AddVolunteers from "../Dashboard/Admin/AddVolunteers";
import EventsDetails from "../Pages/Events/EventsDetails";
import Donate from "../Pages/Donate/Donate";
import DonationDetails from "../Pages/Donations/DonationDetails";
import Contact from "../Pages/Contact/Contact";
import BlogDetails from "../Pages/Blogs/BlogDetails";
import AddImages from "../Dashboard/Moderator/AddImages/AddImages";
import ImageGallery from "../Pages/Gallery/Gallery";
import PrimaryLoader from "../Components/PrimaryLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrimaryLoader>
        <Layouts />
      </PrimaryLoader>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/gallery",
        element: (
          <PrimaryLoader>
            <ImageGallery />
          </PrimaryLoader>
        ),
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
        path: "/join",
        element: <Join />,
      },
      {
        path: "/donate/:id",
        element: <Donate />,
      },
    ],
  },
  { path: "/signUp", element: <SignUp /> },
  { path: "/logIn", element: <LogIn /> },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "addChairman",
        element: <AddChairman />,
      },
      {
        path: "addVolunteers",
        element: <AddVolunteers />,
      },
      {
        path: "addImages",
        element: <AddImages />,
      },
    ],
  },
]);

export default router;
