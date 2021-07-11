import React from "react";
import './Day16.css';
import Card2 from "./Day16_board2";

function Card()
{
    return(
        <>

        <div className="main1">
          <div className="card">
            <img src="https://www.hebergementwebs.com/image/61/61413e0e73c2480f2a8b8042959f3bd8.jpg/4-things-to-know-before-you-start-using-memes-on-social-media-13.jpg"
              alt="mastercard pic"
            />
            <h1 className="heading">MEME CARD</h1>

            <Card2/>
          </div>
        </div>
        </>
    );

}

export default Card;