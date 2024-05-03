import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css"
import { createRoot } from "react-dom/client";
import Main from "./main";
import Aside from "./aside";
import Footer from "../src/layout/footer"
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"
import Single from './single';
import Basic from './layout/basic';

const feather = require('feather-icons');

setTimeout( () => {
    feather.replace(); 
},500);


const router = createBrowserRouter([
    {
        path: "/",
        element: <Basic />,
        children: [
            {
                path: '',
                element: <>
                    <div className="col-md-8">
                        <Main></Main>
                    </div>
                    <div className="col-md-4">
                        <Aside></Aside>
                    </div>
                </>
            },
            {
                path: "detalle/:slug",
                element: <Single />,
            },
        ],
    },
]);

const root = createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={router} />
);



