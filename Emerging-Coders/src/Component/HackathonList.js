import React from "react"
// import Hackathon component
import Hackathon from "./Hackathon";

function HackathonList(props){
    return(
    <div>
        {props.Hackathons.map(h =><Hackathon key={h.id} name={h.name}/>)}
    </div>
    );
}
export default HackathonList;
