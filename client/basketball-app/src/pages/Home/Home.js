import React, {useEffect} from "react";
import './Home.css'
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";


 export default function Home () {
  useEffect(()=> {
    fetch('http://localhost:3000/api/users')
      .then((res) => {
        return res.json();  
      })
      .then((results) => {
        console.log(results);
      })
      .catch((err) => {
        console.error(err);
      })
  }, [])
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

 