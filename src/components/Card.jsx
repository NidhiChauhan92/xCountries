import React from "react";

function Card({ name, flag, abbr }) {
    return (
        <>
           
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    border: "2px solid black",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    borderRadius: "5px",
                    height: "200px",
                    width: "200px",

                }}>
                    <img style={{
                        width: "100px",
                        textAlign: "center"
                    }} src={flag} alt={abbr}/>
                    <h2>{name}</h2>
                </div>
            

        </>
    )

}

export default Card;