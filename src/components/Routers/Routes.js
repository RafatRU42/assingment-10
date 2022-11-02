import { createBrowserRouter } from "react-router-dom";
import Details from "../../Details/Details";
import Main from "../../Main/Main";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";
import Blog from "../Blog/Blog";
import Courses from "../Courses/Courses";
import GetPremium from "../GetPremium/GetPremium";
import Home from "../Home/Home";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import Login from "../Login/Login";
import Register from "../Register/Register";

export const router = createBrowserRouter([
{path:'/', element: <Home></Home>},
{path:'*', element: <div><h2>Sorry, This URL Does Not Exist.</h2></div>},
{path:'blog', element:<Blog></Blog>},
{path:'login', element:<Login></Login>},
{path:'register', element: <Register></Register>},
{path: '/courses/:id', element:<Details></Details> , loader: ({params}) =>fetch(`https://learning-point-server-delta.vercel.app/courses/${params.id}`)},
{path: '/courses/0:id', element:<PrivateRoute><GetPremium></GetPremium></PrivateRoute> , loader: ({params}) =>fetch(`https://learning-point-server-delta.vercel.app/courses/0${params.id}`)},
// {path: '/category/:id', element:<LeftSideNav></LeftSideNav>, loader: () =>fetch('https://learning-point-server-delta.vercel.app/category')},


{path: '/', element: <Main></Main>, children:[

   
    {path:'courses', element: <Courses></Courses>, loader: () => fetch('https://learning-point-server-delta.vercel.app/courses')}
]}
])

