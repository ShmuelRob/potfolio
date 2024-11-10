import {createBrowserRouter} from "react-router-dom";
import Home from "./home/home.tsx";
import About from "./about/about.tsx";
import Portfolio from "./portfolio/portfolio.tsx";
import Contact from "./contact/contact.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/portfolio",
        element: <Portfolio />
    },
    {
        path: "/contact",
        element: <Contact />
    },
])

export default router;
