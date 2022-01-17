import React from "react";
import './Home.css'
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";


 export default function Home () {
  return (
    <>
    <Navbar />
    <Hero />
    <div className="homepage">
      Hello World
    </div>
    </>
    
    
  );
}

 