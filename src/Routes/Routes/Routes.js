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
import Review from "../../Pages/Reviews/Reviews";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import Footer from "../../Pages/Shared/Footer/Footer";
import SignUp from "../../Pages/Signup/SignUp";
import PrivateRoute from "../PrivateRoute";

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
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
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
                loader: () => fetch('https://life-care-server-delta.vercel.app/allservices'),
                element: <AllServices></AllServices>,
                
            },
            {
                path: '/details/:id',
                element: <ServiceDetails></ServiceDetails>,  
                loader: ({params}) =>fetch (`https://life-care-server-delta.vercel.app/details/${params.id}`)
            },
            {
                path: '/review',
                element: <PrivateRoute><Review></Review></PrivateRoute>
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