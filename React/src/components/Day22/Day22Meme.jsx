import { useState } from "react"
import { Button, TextField } from '@material-ui/core';
const Day22Meme=({meme,setMeme})=>
{
    //const classes = useStyles();

    const [form,setForm]=useState({
        template_id:meme.id,
        username:"gaurigarg33",
        password:"gaurigarg33",
        boxes:[]
    })
   const generateMeme=()=>
   {
       let url=`https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`
       
       form.boxes.map((box,index)=>url+=`&boxes[${index}][text]=${box.text}`)

       fetch(url)
       .then(res=>res.json())
       .then(data=>{
           if(data.success===true)
           setMeme({...meme,url:data.data.url})
           
       })
        console.log(url)
   }
    return (
        <div className="meme22">
            <img src={meme.url} className="image_meme22" alt=""/>
            <div className="memee22">
                {
                    [...Array(meme.box_count)].map((_,index)=>(
                       
                        <TextField variant="outlined" size="small" type="text" key={index} label={`Meme Caption ${index+1}`} margin="normal" onChange={(e)=>{
                            const newBoxes=form.boxes;
                            newBoxes[index]={text:e.target.value}
                            setForm({...form,boxes:newBoxes})
                        }} style={{margin:"5px"}}>

                        </TextField>
                    ))
                }
                
            </div>
            <div className="div_btn22">
                <Button variant="contained" color="secondary" onClick={generateMeme}
            style={{
                     height: "40px",
                     padding: "10px",
                     width: "200px",
                     textAlign: "center",
                     fontWeight: "bolder",
                     borderRadius: "7px",
                     boxShadow:"3px 5px 10px black",
                     
      }}
           className="meme_gbtn22">
        GENERATE MEME
      </Button>
                

      <Button variant="contained" color="secondary"  
      style={{
              border:"none",
                     height: "40px",
                     padding: "10px",
                     width: "200px",
                     textAlign: "center",
                     fontWeight: "bolder",
                     borderRadius: "7px",
                     marginLeft: "30px",
                     boxShadow:"3px 5px 10px black",
      
      }} className="meme_gbtn22" onClick={()=>
           {
               setMeme(null);
           }}>
        CHOOSE TEMPLATE
      </Button>


            </div>
        </div>
    )
}
export default Day22Meme;