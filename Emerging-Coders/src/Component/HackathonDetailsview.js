import React from "react";
import propTypes from "prop-types";
import "./Hackathon.css"

function HackathonDetailsview(props) {
    return( 
    <div className="HackathonDetails">
        <span>{props.name} {props.Date} {props.Venue}</span>
        <br/>
    </div>
);
}
HackathonDetailsview.propTypes={
    name:propTypes.string.isRequired
};
export default HackathonDetailsview;