import { createBrowserRouter } from "react-router-dom";
import Details from "../../Details/Details";
import Main from "../../Main/Main";
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
{path: '/courses/:id', element:<Details></Details> , loader: ({params}) =>fetch(`http://localhost:5000/courses/${params.id}`)},
{path: '/courses/:id', element:<GetPremium></GetPremium> , loader: ({params}) =>fetch(`http://localhost:5000/courses/${params.id}`)},


{path: '/', element: <Main></Main>, children:[

   
    {path:'courses', element: <Courses></Courses>, loader: () => fetch('http://localhost:5000/courses')}
]}
])

