import React from "react";
import { useState , useEffect } from "react";
import "./Day22.css";
import Day22Templates from "./Day22Templates";
import Day22Meme from "./Day22Meme";

const Day22=()=>
{
    const[templates,setTemplates] = useState([]);
    const[meme , setMeme] = useState(null);

    useEffect(()=>
    {
        fetch("https://api.imgflip.com/get_memes")
        .then((res)=>res.json())
        .then((data)=>
        {
            setTemplates(data.data.memes);
        })

    },[]);
    return(
        <>
         <div className="meme_back22">
          <h1>MEME GENERATOR</h1>

            {meme===null ? <Day22Templates templates={templates} setMeme={setMeme}/> : <Day22Meme meme={meme} setMeme={setMeme}/>}
            </div> 
        </>
    );
}
export default Day22;