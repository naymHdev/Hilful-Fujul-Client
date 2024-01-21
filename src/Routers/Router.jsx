import { createBrowserRouter } from "react-router-dom";
import Error from "../Components/Error";
import Layouts from "../Layouts/Layouts";
import Home from "../Home/Home";
import Gallery from "../Pages/Gallery/Gallery";
import About from "../Pages/About/About";
import Donations from "../Pages/Donations/Donations";
import Events from "../Pages/Events/Events";
import Blogs from "../Pages/Blogs/Blogs";
import SignUp from "../Auth/SugnUp/SignUp";
import LogIn from "../Auth/LogIn/LogIn";
import Join from "../Home/Join/Join";
import PrivateRoute from "../Auth/PrivateRoute";
import JoinVolunteer from "../Pages/JoinVolunteer/JoinVolunteer";

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
        element: <Gallery />,
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
        path: "/events",
        element: <Events />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
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
    ],
  },
  { path: "/signUp", element: <SignUp /> },
  { path: "/logIn", element: <LogIn /> },
]);

export default router;
