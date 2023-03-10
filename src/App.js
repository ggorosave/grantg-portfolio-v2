import React from "react";

import {
  RouterProvider,
  createHashRouter,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

// import pages and other components below
import About, { aboutLoader} from "./pages/About";
import ProjectContainer, { projectLoader } from "./pages/Projects";
import Resume, { resumeLoader } from "./pages/Resume";
import Contact, { contactLoader }  from "./pages/Contact";

function App() {

  const router = createHashRouter([
    {
      path: "/",
      element: <About />,
      loader: aboutLoader
    },
    {
      path: "/projects",
      element: <ProjectContainer />,
      loader: projectLoader
    },
    {
      path: "/resume",
      element: <Resume />,
      loader: resumeLoader
    },
    {
      path: "/contact",
      element: <Contact />,
      loader: contactLoader
    }
  ])

  return (
    <div className="container flex flex-col flex-grow justify-between min-h-screen bg-primary">
      <Header />

        <RouterProvider router={router} />

      <Footer />
    </div>

  );
}

export default App;
