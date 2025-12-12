import { createBrowserRouter } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import Layout from "./Layout";
import LandingPage from "./LandingPage";

const router = createBrowserRouter([{
    path: "/",
    element: <Layout/>,
    children:
        [
            {
                path: "",
                index: true,
                element:<LandingPage/>
            },{
                path: "home",
                element: <Home/>

            }
        ,
            {
                path: "about",
                element: <About/>
            },
            {
                path: "contact",
                element: <Contact/>
            },
            {
                path: "Pricing",
                element: <Pricing/>
            },
            {
                path: "Services"
                , element:<Services/>
            },
            ]
}])
export default router;