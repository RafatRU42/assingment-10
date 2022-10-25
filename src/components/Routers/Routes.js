import { createBrowserRouter } from "react-router-dom";
import Main from "../../Main/Main";
import Blog from "../Blog/Blog";
import Courses from "../Courses/Courses";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";

export const router = createBrowserRouter([
{path:'/', element: <Home></Home>},
{path:'*', element: <div><h2>Sorry, This URL Does Not Exist.</h2></div>},
{path:'blog', element:<Blog></Blog>},
{path:'login', element:<Login></Login>},
{path:'register', element: <Register></Register>},


{path: '/', element: <Main></Main>, children:[

   
    {path:'courses', element: <Courses></Courses>, loader: () => fetch('http://localhost:5000/courses')}
]}
])

