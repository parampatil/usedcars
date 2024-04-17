import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import { ProtectedRoute } from "./ProtectedRoute";

import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Logout from "../pages/Logout";
import Home from "../pages/Home";
import UserDashboard from "../pages/UserDashboard";
import Profile from "../pages/Profile";
import LayoutComponent from "../Components/LayoutComponent";

const Routes = () => {
  const { token } = useAuth();

  // Define public routes accessible to all users
  const routesForPublic = [
    {
      path: "/service",
      element: <div>Service Page</div>,
    },
    {
      path: "/about-us",
      element: <div>About Us</div>,
    },
  ];

  // Define routes accessible only to authenticated users
  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
      children: [
        {
          path: "/",
          element: <UserDashboard />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/logout",
          element: <Logout />,
        },
      ],
    },
  ];

  // Define routes accessible only to non-authenticated users
  const routesForNotAuthenticatedOnly = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
  ];

  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <LayoutComponent />,
        children: [
          ...routesForPublic,
          ...(!token ? routesForNotAuthenticatedOnly : []),
          ...routesForAuthenticatedOnly,
        ],
      },
    ],
    {
      basename: "/usedcars",
    }
  );

  // Provide the router configuration using RouterProvider
  return (
    <>
      {/* f<NavBar /> Render the NavBar component here */}
      <RouterProvider router={router} />
    </>
  );
};

export default Routes;
