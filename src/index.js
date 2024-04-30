import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Message from "./message";
import Header from "./header";
import Main from "./main";
import Aside from "./aside";
import Footer from "./footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css"
const feather = require('feather-icons');

setTimeout( () => {
    feather.replace(); 
},500);

const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <Message message = 'KOOPACAPS'></Message>
        <Header></Header>
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <Main></Main>
                </div>
                <div className="col-md-4">
                    <Aside></Aside>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </StrictMode>
);