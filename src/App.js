import React from "react";

import {
  RouterProvider,
  createHashRouter,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

// import pages and other components below
import About from "./pages/About";
import ProjectContainer from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

function App() {

  const router = createHashRouter([
    {
      path: "/",
      element: <About />
    },
    {
      path: "/projects",
      element: <ProjectContainer />
    },
    {
      path: "/resume",
      element: <Resume />
    },
    {
      path: "/contact",
      element: <Contact />
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
