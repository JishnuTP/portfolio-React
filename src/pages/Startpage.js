import React from "react";
import { Link } from "react-router-dom";
import "./styling.css"
import NavBar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import Home from "../components/Home/Home";
import Footer from "../components/Footer";

function Start() {
  const backgroundStyle = {
    backgroundImage: `url('')`, // Replace with the path to your background image
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed", // Optional: Keeps the background fixed while scrolling
  };

 

  return (
    <>
    <NavBar/>
    <ScrollToTop />
    <Home/>
    <Footer/>
    </>
   
  );
}

export default Start;
