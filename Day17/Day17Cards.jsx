import React from "react";
import "./Day17.css"
function Day17Cards(props)
{
    return(
        <>
       
       
          
          <div className="container">

            <h1>{props.food}</h1>
            <h2>{props.calorie}</h2>
             
          </div>
        
          

        
        </>
    );

}

export default Day17Cards;