// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'

import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import App from "./App.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import Contact from "./pages/Contact.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Resume from "./pages/Resume.jsx";

// SG: Returns a data router object that manages all navigation and data loading/mutations
//     i.e. the accessible routes, and which components respond to which URL
//     https://reactrouter.com/6.30.0/routers/create-browser-router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <AboutMe />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Portfolio",
        element: <Portfolio />,
      },
      {
        path: "/Resume",
        element: <Resume />,
      },
    ],
  },
]);

// SG: Render the App component to the root element in the HTML file
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
