import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home";
import Contact from "../contact/Contact";
import AboutMe from "../About/AboutMe";
import ServiceSection from "../components/ServiceSection";
import Project from "../components/Project";
  
export const router = createBrowserRouter([
    {
      path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
                
            },
            {
                path: '/projects',
                element: <Project />
            },
            {
                path: '/contact',
                element:<Contact/>
            },
            {
                path: '/about',
                element:<AboutMe/>
            },
            {
                path: '/services',
                element:<ServiceSection/>
            }
            
      ]
    },
  ]);