import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Projects from "../pages/Projects";
import ContactMe from "../pages/ContactMe";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsOfService from "../pages/TermsOfService";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
             path: "",
             element: <Home/>
            },
            {
                path: "services",
                element: <Services/>
            },
            {
                path: "projects",
                element: <Projects/>
            },
            {
                path: "contact",
                element: <ContactMe/>
            },
            {
                path: "privacy-policy",
                element: <PrivacyPolicy/>
            },
            {
                path: "terms-of-service",
                element: <TermsOfService/>
            }
        ]
    },
    

    
])

export default router