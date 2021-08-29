import "bootstrap/dist/css/bootstrap.min.css";
import './Day28.css';
import {useState} from "react";
// const placedata=()=>{
//   fetch("http://api.weatherapi.com/v1/current.json?key=95ab28abf0b74b61a11103833212608&q=varanasi")
//   .then(res=>res.json())
//   .then((data)=>setPlaceData(data));
// };
function Day28() {
  const [place,setPlace]=useState("");
  const [placeData,setPlaceData]=useState({});
  const updateplacedata=()=>{
    fetch(`http://api.weatherapi.com/v1/current.json?key=95ab28abf0b74b61a11103833212608&q=${place}`)
    .then(res=>res.json())
    .then((data)=>{setPlaceData(data);console.log(data);});
  };
  return (
    <div>
      <h2 className="heading28">WEATHER APP</h2>
    <div className="App28">
     <div className="container28">
       <div className="row28">
         <div className="col28form">
           <input type="text28" value={place} onChange={(e)=>{setPlace(e.target.value)}}/>
           <button className="btn btn-primary28" onClick={updateplacedata}>Submit</button>
         </div>
         <div className="offset-md-4 col-12 col-md-4 weather28">
            {placeData.location?(
              <div className="contain28">
                <img src={placeData.current.condition.icon} alt=""/>
                <div className="temp28">{placeData.current.temp_c}°C</div>
                <div className="text28">{placeData.current.condition.text}</div>
                <div className="place28">{placeData.location.name}</div>
                <div className="container28">
                  <div className="row whp28">
                    <div className="col28">
                      <div className="title28">Wind Now</div>
                      <div className="data28">{placeData.current.wind_kph}<span className="unit28">kph</span></div>
                    </div>
                    <div className="col28">
                    <div className="title28">Humidity</div>
                      <div className="data28">{placeData.current.humidity}<span className="unit28">%</span></div>
                    </div>
                    <div className="col28">
                    <div className="title28">precipitation</div>
                      <div className="data28">{placeData.current.precip_in}<span className="unit28">inches</span></div>
                    </div>
                  </div>
                </div>
              </div>
            ):(<h2>Place Not Found</h2>)}
         </div>
       </div>
     </div>
    </div>
    </div>
  );
}

export default Day28;