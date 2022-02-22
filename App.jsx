import React from "react";
// import {Component} from 'react';
// import{
//     Button,
//     Form,
//     FormGroup,
//     Input,
//     Label
// } from 'reactstrap';
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Works from "./Works";
import Contact from "./Contact";
import Footer from "./Footer";

function App(){
    return(
        <div>
        <Navbar />
        <Home />
        <About />
        <Works />
        <Contact />
        <Footer />
        </div>
    )
}


export default App;