import React from "react";
import propTypes from "prop-types";
import "./Hackathon.css"

function Hackathon(props) {
    return( 
    <div className="Hackathon">
        <span>{props.name}</span>
    </div>
);
}
Hackathon.propTypes={
    name:propTypes.string.isRequired
};
export default Hackathon;