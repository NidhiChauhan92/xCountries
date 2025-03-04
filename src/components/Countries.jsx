import React, { useEffect } from "react";
import { useState } from "react";
// import axios from "axios";
import Card from "./Card";




function Countries (){

const [countries,setCountries] = useState([]);    

const api = "https://xcountries-backend.azurewebsites.net/all";

useEffect(() => {
    fetch(api) // API URL
      .then((res) => res.json()) // Convert response to JSON
      .then((data) => {
        setCountries(data); 
        console.log(data);
        
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

   return(
    <>
     <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                justifyContent: "center"
            }}>
    {countries.map((item) => (
        <Card abbr={item.abbr} name={item.name} flag={item.flag} />
      ))}
    </div>
    </>
    
   )


    
}

export default Countries;