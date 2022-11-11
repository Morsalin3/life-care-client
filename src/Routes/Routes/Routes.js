import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddService from "../../Pages/AddService/AddService";
import AllServices from "../../Pages/AllServices/AllServices";
import Blog from "../../Pages/Blog/Blog";
import AboutUs from "../../Pages/Home/AboutUs/AboutUs";
import Home from "../../Pages/Home/Home";
import Services from "../../Pages/Home/Services/Services";
import LogIn from "../../Pages/Login/LogIn";
import MyReview from "../../Pages/MyReview/MyReview";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import Footer from "../../Pages/Shared/Footer/Footer";
import SignUp from "../../Pages/Signup/SignUp";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/myreview',
                element: <MyReview></MyReview>
            },
            {
                path: '/addservice',
                element: <AddService></AddService>
            },
            {
                path: '/aboutus',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/allservices',
                loader: () => fetch('http://localhost:5000/services'),
                element: <AllServices></AllServices>,
                
            },
            {
                path: '/details/:id',
                element: <ServiceDetails></ServiceDetails>,  
                loader: ({params}) =>fetch (`http://localhost:5000/details/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/footer',
                element: <Footer></Footer>
            }
        ]
    }
])