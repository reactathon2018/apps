import React from "react"
// import Hackathon component
import HackathonDetailsview from "./HackathonDetailsview";

function HackathonDetails(props){
    return(
    <div>
        {props.HackathonDetails.map(h =><HackathonDetailsview key={h.id} name={h.name} Date={h.Date} Venue={h.Venue}/>)}
    </div>
    );
}
export default HackathonDetails;
