import CardDetails from "../../Pages/CardDetails/CardDetails";
import Courses from "../../Pages/Courses/Courses";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import LeftSideNav from "../../Shared/LeftSideNav/LeftSideNav";

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
                    return fetch('http://localhost:5000/')
                }

            },
            {
                path: '/details/:id',
                element: <CardDetails></CardDetails>,
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/courses/${params.id}`)
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
                    return fetch('http://localhost:5000/')
                }
            }
        ]
    }
])