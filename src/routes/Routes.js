import React from "react";
import { Route } from "react-router-dom";
import Start from "../pages/Startpage";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import ResumeNew from "../components/Resume/ResumeNew";


function MyRoutes(){
    return(
        <>
       
        <Route path="/" element={<Start/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/project" element={<Projects/>} />
        <Route path="/resume" element={<ResumeNew />} />

        </>
    )
}
export default MyRoutes