import React from "react";

const SubHeading = props => {
  const {
    subHeadingStyle,
    subHeadingTextStyle,
    lineStyle,
    dividerStyle
  } = styles;
  return (
    <div style={subHeadingStyle}>
      <h2 style={subHeadingTextStyle}>{props.text}</h2>
      <div style={dividerStyle}>
        <span style={lineStyle}> </span>
      </div>
    </div>
  );
};

const styles = {
  subHeadingTextStyle: {
    fontFamily: "sans-serif",
    color: "rgb(158, 149, 149)",
    fontSize: 18,
    display: "inline-block",
    float: "left",
    position: "relative",
    marginTop: 5
  },

  dividerStyle: {
    overflow: "hidden",
    height: 54
  },

  lineStyle: {
    background: "#e5e7e8",
    width: "95%",
    height: 5,
    display: "inline-block",
    borderRadius: 25,
    marginLeft: 20
  },
  subHeadingStyle: {
    marginTop: 20,
    marginLeft: 20,
    display: "block"
  }
};

export default SubHeading;
