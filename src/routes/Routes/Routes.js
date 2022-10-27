import Blog from "../../Pages/Blog/Blog";
import CardDetails from "../../Pages/CardDetails/CardDetails";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import Courses from "../../Pages/Courses/Courses";
import Faq from "../../Pages/Faq/Faq";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import NotFound from "../../Pages/NotFound/NotFound";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../layout/Main");

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => {
                    return fetch('https://elarning-courses-server.vercel.app/')
                }

            },
            {
                path: '/details/:id',
                element: <CardDetails></CardDetails>,
                loader: ({ params }) => {
                    return fetch(`https://elarning-courses-server.vercel.app/courses/${params.id}`)
                }
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => {
                    return fetch('https://elarning-courses-server.vercel.app/')
                }
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({ params }) => {
                    return fetch(`https://elarning-courses-server.vercel.app/courses/${params.id}`)
                }
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            }
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])